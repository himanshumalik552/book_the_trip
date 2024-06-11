(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
// EXTERNAL MODULE: ./services/index.js + 4 modules
var services = __webpack_require__(7717);
// EXTERNAL MODULE: ./components/index.js + 4 modules
var components = __webpack_require__(8493);
;// CONCATENATED MODULE: ./pages/_app.js







/* harmony default export */ const _app = (App);
function App({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    const [user, setUser] = (0,external_react_.useState)(null);
    const [authorized, setAuthorized] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        // on initial load - run auth check 
        authCheck(router.asPath);
        // on route change start - hide page content by setting authorized to false  
        const hideContent = ()=>setAuthorized(false);
        router.events.on("routeChangeStart", hideContent);
        // on route change complete - run auth check 
        router.events.on("routeChangeComplete", authCheck);
        // unsubscribe from events in useEffect return function
        return ()=>{
            router.events.off("routeChangeStart", hideContent);
            router.events.off("routeChangeComplete", authCheck);
        };
    }, []);
    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in 
        setUser(services/* userService.userValue */.W.userValue);
        const publicPaths = [
            "/account/login",
            "/account/register"
        ];
        const path = url.split("?")[0];
        if (!services/* userService.userValue */.W.userValue && !publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: "/account/login",
                query: {
                    returnUrl: router.asPath
                }
            });
        } else {
            setAuthorized(true);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Next.js 13 - User Registration and Login Example"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `app-container ${user ? "bg-light" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* Nav */.JL, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* Alert */.bZ, {}),
                    authorized && /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 4558:
/***/ ((module) => {

"use strict";
module.exports = require("next/config");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1964:
/***/ ((module) => {

"use strict";
module.exports = require("rxjs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,717,493], () => (__webpack_exec__(9068)));
module.exports = __webpack_exports__;

})();