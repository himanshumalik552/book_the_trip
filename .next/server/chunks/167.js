"use strict";
exports.id = 167;
exports.ids = [167];
exports.modules = {

/***/ 8167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GH": () => (/* reexport */ apiHandler),
  "db": () => (/* reexport */ db),
  "Po": () => (/* reexport */ errorHandler),
  "Ie": () => (/* reexport */ jwtMiddleware),
  "rY": () => (/* reexport */ usersRepo)
});

;// CONCATENATED MODULE: ./helpers/api/api-handler.js


function apiHandler(handler) {
    return async (req, res)=>{
        const method = req.method.toLowerCase();
        // check handler supports HTTP method
        if (!handler[method]) return res.status(405).end(`Method ${req.method} Not Allowed`);
        try {
            // global middleware
            await jwtMiddleware(req, res);
            // route handler
            await handler[method](req, res);
        } catch (err) {
            // global error handler
            errorHandler(err, res);
        }
    };
}

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(1185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./helpers/api/db.js


const { serverRuntimeConfig  } = config_default()();
const Schema = (external_mongoose_default()).Schema;
external_mongoose_default().connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString);
(external_mongoose_default()).Promise = global.Promise;
const db = {
    User: userModel()
};
// mongoose models with schema definitions
function userModel() {
    const schema = new Schema({
        username: {
            type: String,
            unique: true,
            required: true
        },
        hash: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });
    schema.set("toJSON", {
        virtuals: true,
        versionKey: false,
        transform: function(doc, ret) {
            delete ret._id;
            delete ret.hash;
        }
    });
    return (external_mongoose_default()).models.User || external_mongoose_default().model("User", schema);
}

;// CONCATENATED MODULE: ./helpers/api/error-handler.js

function errorHandler(err, res) {
    if (typeof err === "string") {
        // custom application error
        const is404 = err.toLowerCase().endsWith("not found");
        const statusCode = is404 ? 404 : 400;
        return res.status(statusCode).json({
            message: err
        });
    }
    if (err.name === "UnauthorizedError") {
        // jwt authentication error
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
    // default to 500 server error
    console.error(err);
    return res.status(500).json({
        message: err.message
    });
}

// EXTERNAL MODULE: external "express-jwt"
var external_express_jwt_ = __webpack_require__(9779);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(3837);
var external_util_default = /*#__PURE__*/__webpack_require__.n(external_util_);
;// CONCATENATED MODULE: ./helpers/api/jwt-middleware.js



const { serverRuntimeConfig: jwt_middleware_serverRuntimeConfig  } = config_default()();

function jwtMiddleware(req, res) {
    const middleware = (0,external_express_jwt_.expressjwt)({
        secret: jwt_middleware_serverRuntimeConfig.secret,
        algorithms: [
            "HS256"
        ]
    }).unless({
        path: [
            // public routes that don't require authentication
            "/api/users/register",
            "/api/users/authenticate"
        ]
    });
    return external_util_default().promisify(middleware)(req, res);
}

// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(9344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
;// CONCATENATED MODULE: ./helpers/api/users-repo.js




const { serverRuntimeConfig: users_repo_serverRuntimeConfig  } = config_default()();
const User = db.User;
const usersRepo = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};
async function authenticate({ username , password  }) {
    const user = await User.findOne({
        username
    });
    if (!(user && external_bcryptjs_default().compareSync(password, user.hash))) {
        throw "Username or password is incorrect";
    }
    // create a jwt token that is valid for 7 days
    const token = external_jsonwebtoken_default().sign({
        sub: user.id
    }, users_repo_serverRuntimeConfig.secret, {
        expiresIn: "7d"
    });
    return {
        ...user.toJSON(),
        token
    };
}
async function getAll() {
    return await User.find();
}
async function getById(id) {
    return await User.findById(id);
}
async function create(params) {
    // validate
    if (await User.findOne({
        username: params.username
    })) {
        throw 'Username "' + params.username + '" is already taken';
    }
    const user = new User(params);
    // hash password
    if (params.password) {
        user.hash = external_bcryptjs_default().hashSync(params.password, 10);
    }
    // save user
    await user.save();
}
async function update(id, params) {
    const user = await User.findById(id);
    // validate
    if (!user) throw "User not found";
    if (user.username !== params.username && await User.findOne({
        username: params.username
    })) {
        throw 'Username "' + params.username + '" is already taken';
    }
    // hash password if it was entered
    if (params.password) {
        params.hash = external_bcryptjs_default().hashSync(params.password, 10);
    }
    // copy params properties to user
    Object.assign(user, params);
    await user.save();
}
async function _delete(id) {
    await User.findByIdAndRemove(id);
}

;// CONCATENATED MODULE: ./helpers/api/index.js







/***/ })

};
;