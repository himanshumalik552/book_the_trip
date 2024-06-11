"use strict";
exports.id = 493;
exports.ids = [493];
exports.modules = {

/***/ 8493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "bZ": () => (/* reexport */ Alert),
  "JL": () => (/* reexport */ Nav),
  "OL": () => (/* reexport */ NavLink),
  "$j": () => (/* reexport */ Spinner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./services/index.js + 4 modules
var services = __webpack_require__(7717);
;// CONCATENATED MODULE: ./components/Alert.jsx





function Alert() {
    const router = (0,router_.useRouter)();
    const [alert, setAlert] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        // subscribe to new alert notifications
        const subscription = services/* alertService.alert.subscribe */.A.alert.subscribe((alert)=>setAlert(alert));
        // unsubscribe when the component unmounts
        return ()=>subscription.unsubscribe();
    }, []);
    (0,external_react_.useEffect)(()=>{
        // clear alert on location change
        services/* alertService.clear */.A.clear();
    }, [
        router
    ]);
    if (!alert) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "m-3",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `alert alert-dismissible ${alert.type}`,
                children: [
                    alert.message,
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "button",
                        className: "btn-close",
                        onClick: ()=>services/* alertService.clear */.A.clear()
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Nav.jsx





function Nav() {
    const [user, setUser] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const subscription = services/* userService.user.subscribe */.W.user.subscribe((x)=>setUser(x));
        return ()=>subscription.unsubscribe();
    }, []);
    // only show nav when logged in
    if (!user) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "navbar navbar-expand navbar-dark bg-dark px-3",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navbar-nav",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                    href: "/",
                    exact: true,
                    className: "nav-item nav-link",
                    children: "Home"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                    href: "/users",
                    className: "nav-item nav-link",
                    children: "Users"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: services/* userService.logout */.W.logout,
                    className: "btn btn-link nav-item nav-link",
                    children: "Logout"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./components/NavLink.jsx





NavLink.propTypes = {
    href: (external_prop_types_default()).string.isRequired,
    exact: (external_prop_types_default()).bool
};
NavLink.defaultProps = {
    exact: false
};
function NavLink({ children , href , exact , ...props }) {
    const { pathname  } = (0,router_.useRouter)();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    if (isActive) {
        props.className += " active";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        ...props,
        children: children
    });
}

;// CONCATENATED MODULE: ./components/Spinner.jsx


function Spinner() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "text-center p-4",
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: "spinner-border spinner-border-lg align-center"
        })
    });
}

;// CONCATENATED MODULE: ./components/index.js






/***/ })

};
;