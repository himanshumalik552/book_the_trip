"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 9779:
/***/ ((module) => {

module.exports = require("express-jwt");

/***/ }),

/***/ 9344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 6780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var helpers_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8167);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,helpers_api__WEBPACK_IMPORTED_MODULE_0__/* .apiHandler */ .GH)({
    get: getById,
    put: update,
    delete: _delete
}));
async function getById(req, res) {
    const user = await helpers_api__WEBPACK_IMPORTED_MODULE_0__/* .usersRepo.getById */ .rY.getById(req.query.id);
    if (!user) throw "User Not Found";
    return res.status(200).json(user);
}
async function update(req, res) {
    await helpers_api__WEBPACK_IMPORTED_MODULE_0__/* .usersRepo.update */ .rY.update(req.query.id, req.body);
    return res.status(200).json({});
}
async function _delete(req, res) {
    await helpers_api__WEBPACK_IMPORTED_MODULE_0__/* .usersRepo["delete"] */ .rY["delete"](req.query.id);
    return res.status(200).json({});
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [167], () => (__webpack_exec__(6780)));
module.exports = __webpack_exports__;

})();