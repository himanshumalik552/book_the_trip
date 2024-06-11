"use strict";
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 8982:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ AddEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1908);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7717);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








function AddEdit(props) {
    const user = props?.user;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    // form validation rules 
    const validationSchema = yup__WEBPACK_IMPORTED_MODULE_5__.object().shape({
        firstName: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("First Name is required"),
        lastName: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Last Name is required"),
        username: yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Username is required"),
        password: yup__WEBPACK_IMPORTED_MODULE_5__.string().transform((x)=>x === "" ? undefined : x)// password optional in edit mode
        .concat(user ? null : yup__WEBPACK_IMPORTED_MODULE_5__.string().required("Password is required")).min(6, "Password must be at least 6 characters")
    });
    const formOptions = {
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(validationSchema)
    };
    // set default form values if in edit mode
    if (user) {
        formOptions.defaultValues = props.user;
    }
    // get functions to build form with useForm() hook
    const { register , handleSubmit , reset , formState  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)(formOptions);
    const { errors  } = formState;
    async function onSubmit(data) {
        services__WEBPACK_IMPORTED_MODULE_6__/* .alertService.clear */ .A.clear();
        try {
            // create or update user based on user prop
            let message;
            if (user) {
                await services__WEBPACK_IMPORTED_MODULE_6__/* .userService.update */ .W.update(user.id, data);
                message = "User updated";
            } else {
                await services__WEBPACK_IMPORTED_MODULE_6__/* .userService.register */ .W.register(data);
                message = "User added";
            }
            // redirect to user list with success message
            router.push("/users");
            services__WEBPACK_IMPORTED_MODULE_6__/* .alertService.success */ .A.success(message, true);
        } catch (error) {
            services__WEBPACK_IMPORTED_MODULE_6__/* .alertService.error */ .A.error(error);
            console.error(error);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-3 col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-label",
                                children: "First Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "firstName",
                                type: "text",
                                ...register("firstName"),
                                className: `form-control ${errors.firstName ? "is-invalid" : ""}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "invalid-feedback",
                                children: errors.firstName?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-3 col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-label",
                                children: "Last Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "lastName",
                                type: "text",
                                ...register("lastName"),
                                className: `form-control ${errors.lastName ? "is-invalid" : ""}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "invalid-feedback",
                                children: errors.lastName?.message
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-3 col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "form-label",
                                children: "Username"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "username",
                                type: "text",
                                ...register("username"),
                                className: `form-control ${errors.username ? "is-invalid" : ""}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "invalid-feedback",
                                children: errors.email?.message
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-3 col",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                className: "form-label",
                                children: [
                                    "Password",
                                    user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                                        className: "ms-1",
                                        children: "(Leave blank to keep the same password)"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                name: "password",
                                type: "password",
                                ...register("password"),
                                className: `form-control ${errors.password ? "is-invalid" : ""}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "invalid-feedback",
                                children: errors.password?.message
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mb-3",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        type: "submit",
                        disabled: formState.isSubmitting,
                        className: "btn btn-primary me-2",
                        children: [
                            formState.isSubmitting && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "spinner-border spinner-border-sm me-1"
                            }),
                            "Save"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>reset(formOptions.defaultValues),
                        type: "button",
                        disabled: formState.isSubmitting,
                        className: "btn btn-secondary",
                        children: "Reset"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/users",
                        className: "btn btn-link",
                        children: "Cancel"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Layout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-4",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: children
        })
    });
}


/***/ }),

/***/ 8112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _AddEdit__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "U": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_1__.A)
/* harmony export */ });
/* harmony import */ var _AddEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8982);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8582);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AddEdit__WEBPACK_IMPORTED_MODULE_0__]);
_AddEdit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;