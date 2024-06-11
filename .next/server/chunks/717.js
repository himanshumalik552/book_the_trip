"use strict";
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 7717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* reexport */ alertService),
  "W": () => (/* reexport */ userService)
});

// EXTERNAL MODULE: external "rxjs"
var external_rxjs_ = __webpack_require__(1964);
;// CONCATENATED MODULE: ./services/alert.service.js

const alertSubject = new external_rxjs_.BehaviorSubject(null);
const alertService = {
    alert: alertSubject.asObservable(),
    success,
    error,
    clear
};
function success(message, showAfterRedirect = false) {
    alertSubject.next({
        type: "alert-success",
        message,
        showAfterRedirect
    });
}
function error(message, showAfterRedirect = false) {
    alertSubject.next({
        type: "alert-danger",
        message,
        showAfterRedirect
    });
}
// clear alerts
function clear() {
    // if showAfterRedirect flag is true the alert is not cleared 
    // for one route change (e.g. after successful registration)
    let alert = alertSubject.value;
    if (alert?.showAfterRedirect) {
        alert.showAfterRedirect = false;
    } else {
        alert = null;
    }
    alertSubject.next(alert);
}

// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./helpers/fetch-wrapper.js


const { publicRuntimeConfig  } = config_default()();
const fetchWrapper = {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    delete: request("DELETE")
};
function request(method) {
    return (url, body)=>{
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            requestOptions.headers["Content-Type"] = "application/json";
            requestOptions.body = JSON.stringify(body);
        }
        return fetch(url, requestOptions).then(handleResponse);
    };
}
// helper functions
function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const user = userService.userValue;
    const isLoggedIn = user?.token;
    const isApiUrl = url.startsWith(publicRuntimeConfig.apiUrl);
    if (isLoggedIn && isApiUrl) {
        return {
            Authorization: `Bearer ${user.token}`
        };
    } else {
        return {};
    }
}
async function handleResponse(response) {
    const isJson = response.headers?.get("content-type")?.includes("application/json");
    const data = isJson ? await response.json() : null;
    // check for error response
    if (!response.ok) {
        if ([
            401,
            403
        ].includes(response.status) && userService.userValue) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            userService.logout();
        }
        // get error message from body or default to response status
        const error = data && data.message || response.statusText;
        return Promise.reject(error);
    }
    return data;
}

;// CONCATENATED MODULE: ./helpers/index.js


;// CONCATENATED MODULE: ./services/user.service.js





const { publicRuntimeConfig: user_service_publicRuntimeConfig  } = config_default()();
const baseUrl = `${user_service_publicRuntimeConfig.apiUrl}/users`;
const userSubject = new external_rxjs_.BehaviorSubject( false && 0);
const userService = {
    user: userSubject.asObservable(),
    get userValue () {
        return userSubject.value;
    },
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};
async function login(username, password) {
    const user = await fetchWrapper.post(`${baseUrl}/authenticate`, {
        username,
        password
    });
    // publish user to subscribers and store in local storage to stay logged in between page refreshes
    userSubject.next(user);
    localStorage.setItem("user", JSON.stringify(user));
}
function logout() {
    alertService.clear();
    // remove user from local storage, publish null to user subscribers and redirect to login page
    localStorage.removeItem("user");
    userSubject.next(null);
    router_default().push("/account/login");
}
async function register(user) {
    await fetchWrapper.post(`${baseUrl}/register`, user);
}
async function getAll() {
    return await fetchWrapper.get(baseUrl);
}
async function getById(id) {
    return await fetchWrapper.get(`${baseUrl}/${id}`);
}
async function update(id, params) {
    await fetchWrapper.put(`${baseUrl}/${id}`, params);
    // update stored user if the logged in user updated their own record
    if (id === userSubject.value.id) {
        // update local storage
        const user = {
            ...userSubject.value,
            ...params
        };
        localStorage.setItem("user", JSON.stringify(user));
        // publish updated user to subscribers
        userSubject.next(user);
    }
}
// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
    await fetchWrapper["delete"](`${baseUrl}/${id}`);
    // auto logout if the logged in user deleted their own record
    if (id === userSubject.value.id) {
        logout();
    }
}

;// CONCATENATED MODULE: ./services/index.js




/***/ })

};
;