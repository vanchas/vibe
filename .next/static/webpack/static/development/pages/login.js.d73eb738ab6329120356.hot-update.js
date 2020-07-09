webpackHotUpdate("static/development/pages/login.js",{

/***/ "./src/_services/authentication.service.ts":
/*!*************************************************!*\
  !*** ./src/_services/authentication.service.ts ***!
  \*************************************************/
/*! exports provided: authenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authenticationService\", function() { return authenticationService; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var _redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/actions/actions */ \"./src/redux/actions/actions.ts\");\n\n\n\n\n\n\n\nvar currentUserSubject = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON(\"currentUser\") ? js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON(\"currentUser\") : {};\nvar target = \"https://intim-vibe-api.padilo.pro/api\";\nvar authenticationService = {\n  login: login,\n  logout: logout,\n  registrationAdmin: registrationAdmin,\n  registrationClient: registrationClient,\n  registrationProvider: registrationProvider,\n  registrationAgency: registrationAgency,\n  currentUser: currentUserSubject,\n\n  get currentUserValue() {\n    return currentUserSubject;\n  }\n\n};\n\nfunction login(_x, _x2) {\n  return _login.apply(this, arguments);\n}\n\nfunction _login() {\n  _login = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(email, password) {\n    var response, promise;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(\"currentUser\");\n            _context.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"\".concat(target, \"/login\"), {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                email: email,\n                password: password\n              })\n            });\n\n          case 3:\n            response = _context.sent;\n            promise = response.json();\n\n            if (!(response.status === 200)) {\n              _context.next = 7;\n              break;\n            }\n\n            return _context.abrupt(\"return\", promise.then(function (data) {\n              js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set(\"currentUser\", JSON.stringify(data), {\n                expires: 1\n              });\n              currentUserSubject = data;\n              return data;\n            }).then(function () {\n              return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');\n            }).then(function () {\n              return window.location.reload();\n            })[\"catch\"](function (err) {\n              return console.error(\"Error:\", err);\n            }));\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _login.apply(this, arguments);\n}\n\nfunction registrationClient(_x3, _x4, _x5, _x6) {\n  return _registrationClient.apply(this, arguments);\n}\n\nfunction _registrationClient() {\n  _registrationClient = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(name, password, email, password_confirmation) {\n    var response, promise;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(\"currentUser\");\n            _context2.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://intim-vibe-api.padilo.pro/api/client/register\", {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\",\n                'Accept': 'application/json'\n              },\n              body: JSON.stringify({\n                name: name,\n                password: password,\n                email: email,\n                password_confirmation: password_confirmation\n              })\n            });\n\n          case 3:\n            response = _context2.sent;\n            promise = response.json();\n\n            if (!(response.status === 201)) {\n              _context2.next = 7;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", promise.then(function (data) {\n              _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__[\"showSuccess\"])(data.message));\n              setTimeout(function () {\n                return window.location.reload();\n              }, 3000);\n            })[\"catch\"](function (err) {\n              return console.error(\"Error:\", err);\n            }));\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _registrationClient.apply(this, arguments);\n}\n\nfunction registrationAdmin(_x7, _x8, _x9, _x10) {\n  return _registrationAdmin.apply(this, arguments);\n}\n\nfunction _registrationAdmin() {\n  _registrationAdmin = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(name, password, email, password_confirmation) {\n    var response, promise;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(\"currentUser\");\n            _context3.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"\".concat(target, \"/admin/register\"), {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\",\n                'Accept': 'application/json'\n              },\n              body: JSON.stringify({\n                name: name,\n                password: password,\n                email: email,\n                password_confirmation: password_confirmation\n              })\n            });\n\n          case 3:\n            response = _context3.sent;\n            promise = response.json();\n\n            if (!(response.status === 201)) {\n              _context3.next = 7;\n              break;\n            }\n\n            return _context3.abrupt(\"return\", promise.then(function (data) {\n              _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__[\"showSuccess\"])(data.message));\n              setTimeout(function () {\n                return window.location.reload();\n              }, 3000);\n            })[\"catch\"](function (err) {\n              return console.error(\"Error:\", err);\n            }));\n\n          case 7:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _registrationAdmin.apply(this, arguments);\n}\n\nfunction registrationProvider(_x11, _x12, _x13, _x14, _x15) {\n  return _registrationProvider.apply(this, arguments);\n}\n\nfunction _registrationProvider() {\n  _registrationProvider = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(name, password, email, password_confirmation, phone) {\n    var response, promise;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(\"currentUser\");\n            _context4.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"\".concat(target, \"/individual/register\"), {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\",\n                'Accept': 'application/json'\n              },\n              body: JSON.stringify({\n                name: name,\n                password: password,\n                email: email,\n                password_confirmation: password_confirmation,\n                phone: phone\n              })\n            });\n\n          case 3:\n            response = _context4.sent;\n            promise = response.json();\n\n            if (!(response.status === 201)) {\n              _context4.next = 7;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", promise.then(function (data) {\n              _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__[\"showSuccess\"])(data.message));\n              setTimeout(function () {\n                return window.location.reload();\n              }, 3000);\n            })[\"catch\"](function (err) {\n              return console.error(\"Error:\", err);\n            }));\n\n          case 7:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _registrationProvider.apply(this, arguments);\n}\n\nfunction registrationAgency(_x16, _x17, _x18, _x19, _x20, _x21) {\n  return _registrationAgency.apply(this, arguments);\n}\n\nfunction _registrationAgency() {\n  _registrationAgency = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(name, password, email, password_confirmation, phone, agency_name) {\n    var response, promise;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(\"currentUser\");\n            _context5.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"\".concat(target, \"/agency/register\"), {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\",\n                'Accept': 'application/json'\n              },\n              body: JSON.stringify({\n                name: name,\n                password: password,\n                email: email,\n                password_confirmation: password_confirmation,\n                phone: phone,\n                agency_name: agency_name\n              })\n            });\n\n          case 3:\n            response = _context5.sent;\n            promise = response.json();\n\n            if (!(response.status === 201)) {\n              _context5.next = 7;\n              break;\n            }\n\n            return _context5.abrupt(\"return\", promise.then(function (data) {\n              _redux_store__WEBPACK_IMPORTED_MODULE_5__[\"default\"].dispatch(Object(_redux_actions_actions__WEBPACK_IMPORTED_MODULE_6__[\"showSuccess\"])(data.message));\n              setTimeout(function () {\n                return window.location.reload();\n              }, 3000);\n            })[\"catch\"](function (err) {\n              return console.error(\"Error:\", err);\n            }));\n\n          case 7:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _registrationAgency.apply(this, arguments);\n}\n\nfunction logout() {\n  return _logout.apply(this, arguments);\n}\n\nfunction _logout() {\n  _logout = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove(\"currentUser\");\n            _context6.next = 3;\n            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()(\"\".concat(target, \"/logout\"), {\n              method: \"GET\",\n              headers: {\n                \"Content-Type\": \"application/json\",\n                \"Access-Control-Allow-Origin\": \"*\"\n              }\n            }).then(function () {\n              return next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');\n            }).then(function () {\n              return window.location.reload(true);\n            })[\"catch\"](function (err) {\n              return console.error(\"Error:\", err);\n            });\n\n          case 3:\n            return _context6.abrupt(\"return\", _context6.sent);\n\n          case 4:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n  return _logout.apply(this, arguments);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvX3NlcnZpY2VzL2F1dGhlbnRpY2F0aW9uLnNlcnZpY2UudHM/ZTJjNiJdLCJuYW1lcyI6WyJjdXJyZW50VXNlclN1YmplY3QiLCJDb29raWVzIiwiZ2V0SlNPTiIsInRhcmdldCIsImF1dGhlbnRpY2F0aW9uU2VydmljZSIsImxvZ2luIiwibG9nb3V0IiwicmVnaXN0cmF0aW9uQWRtaW4iLCJyZWdpc3RyYXRpb25DbGllbnQiLCJyZWdpc3RyYXRpb25Qcm92aWRlciIsInJlZ2lzdHJhdGlvbkFnZW5jeSIsImN1cnJlbnRVc2VyIiwiY3VycmVudFVzZXJWYWx1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJyZW1vdmUiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJlc3BvbnNlIiwicHJvbWlzZSIsImpzb24iLCJzdGF0dXMiLCJ0aGVuIiwiZGF0YSIsInNldCIsImV4cGlyZXMiLCJSb3V0ZXIiLCJwdXNoIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJuYW1lIiwicGFzc3dvcmRfY29uZmlybWF0aW9uIiwic3RvcmUiLCJkaXNwYXRjaCIsInNob3dTdWNjZXNzIiwibWVzc2FnZSIsInNldFRpbWVvdXQiLCJwaG9uZSIsImFnZW5jeV9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSUEsa0JBQWtCLEdBQUdDLGdEQUFPLENBQUNDLE9BQVIsQ0FBZ0IsYUFBaEIsSUFDbkJELGdEQUFPLENBQUNDLE9BQVIsQ0FBZ0IsYUFBaEIsQ0FEbUIsR0FFbkIsRUFGTjtBQUlBLElBQU1DLE1BQU0sMENBQVo7QUFFTyxJQUFNQyxxQkFBcUIsR0FBRztBQUNqQ0MsT0FBSyxFQUFMQSxLQURpQztBQUVqQ0MsUUFBTSxFQUFOQSxNQUZpQztBQUdqQ0MsbUJBQWlCLEVBQWpCQSxpQkFIaUM7QUFJakNDLG9CQUFrQixFQUFsQkEsa0JBSmlDO0FBS2pDQyxzQkFBb0IsRUFBcEJBLG9CQUxpQztBQU1qQ0Msb0JBQWtCLEVBQWxCQSxrQkFOaUM7QUFPakNDLGFBQVcsRUFBRVgsa0JBUG9COztBQVFqQyxNQUFJWSxnQkFBSixHQUF1QjtBQUNuQixXQUFPWixrQkFBUDtBQUNIOztBQVZnQyxDQUE5Qjs7U0FhUUssSzs7Ozs7NExBQWYsaUJBQXFCUSxLQUFyQixFQUFvQ0MsUUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0liLDREQUFPLENBQUNjLE1BQVIsQ0FBZSxhQUFmO0FBREo7QUFBQSxtQkFFMkJDLHlEQUFLLFdBQUliLE1BQUosYUFBb0I7QUFDNUNjLG9CQUFNLEVBQUUsTUFEb0M7QUFFNUNDLHFCQUFPLEVBQUU7QUFBQyxnQ0FBZ0I7QUFBakIsZUFGbUM7QUFHNUNDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNSLHFCQUFLLEVBQUxBLEtBQUQ7QUFBUUMsd0JBQVEsRUFBUkE7QUFBUixlQUFmO0FBSHNDLGFBQXBCLENBRmhDOztBQUFBO0FBRVVRLG9CQUZWO0FBT1VDLG1CQVBWLEdBT29CRCxRQUFRLENBQUNFLElBQVQsRUFQcEI7O0FBQUEsa0JBUVFGLFFBQVEsQ0FBQ0csTUFBVCxLQUFvQixHQVI1QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw2Q0FTZUYsT0FBTyxDQUFDRyxJQUFSLENBQWEsVUFBQUMsSUFBSSxFQUFJO0FBQ3hCMUIsOERBQU8sQ0FBQzJCLEdBQVIsQ0FBWSxhQUFaLEVBQTJCUixJQUFJLENBQUNDLFNBQUwsQ0FBZU0sSUFBZixDQUEzQixFQUFpRDtBQUFDRSx1QkFBTyxFQUFFO0FBQVYsZUFBakQ7QUFDQTdCLGdDQUFrQixHQUFHMkIsSUFBckI7QUFDQSxxQkFBT0EsSUFBUDtBQUNILGFBSk0sRUFJSkQsSUFKSSxDQUlDO0FBQUEscUJBQU1JLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaLENBQU47QUFBQSxhQUpELEVBS0ZMLElBTEUsQ0FLRztBQUFBLHFCQUFNTSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQU47QUFBQSxhQUxILFdBTUksVUFBQ0MsR0FBRDtBQUFBLHFCQUFTQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxRQUFkLEVBQXdCRixHQUF4QixDQUFUO0FBQUEsYUFOSixDQVRmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FtQmUzQixrQjs7Ozs7eU1BQWYsa0JBQ0k4QixJQURKLEVBRUl4QixRQUZKLEVBR0lELEtBSEosRUFJSTBCLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1JdEMsNERBQU8sQ0FBQ2MsTUFBUixDQUFlLGFBQWY7QUFOSjtBQUFBLG1CQU8yQkMseURBQUssMERBQTBEO0FBQ2xGQyxvQkFBTSxFQUFFLE1BRDBFO0FBRWxGQyxxQkFBTyxFQUFFO0FBQUMsZ0NBQWdCLGtCQUFqQjtBQUFxQywwQkFBVTtBQUEvQyxlQUZ5RTtBQUdsRkMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJpQixvQkFBSSxFQUFKQSxJQURpQjtBQUVqQnhCLHdCQUFRLEVBQVJBLFFBRmlCO0FBR2pCRCxxQkFBSyxFQUFMQSxLQUhpQjtBQUlqQjBCLHFDQUFxQixFQUFyQkE7QUFKaUIsZUFBZjtBQUg0RSxhQUExRCxDQVBoQzs7QUFBQTtBQU9VakIsb0JBUFY7QUFpQlVDLG1CQWpCVixHQWlCb0JELFFBQVEsQ0FBQ0UsSUFBVCxFQWpCcEI7O0FBQUEsa0JBa0JRRixRQUFRLENBQUNHLE1BQVQsS0FBb0IsR0FsQjVCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQW1CZUYsT0FBTyxDQUFDRyxJQUFSLENBQWEsVUFBQ0MsSUFBRCxFQUFlO0FBQy9CYSxrRUFBSyxDQUFDQyxRQUFOLENBQWVDLDBFQUFXLENBQUNmLElBQUksQ0FBQ2dCLE9BQU4sQ0FBMUI7QUFDQUMsd0JBQVUsQ0FBQztBQUFBLHVCQUFNWixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQU47QUFBQSxlQUFELEVBQWlDLElBQWpDLENBQVY7QUFDSCxhQUhNLFdBR0UsVUFBQ0MsR0FBRDtBQUFBLHFCQUFjQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxRQUFkLEVBQXdCRixHQUF4QixDQUFkO0FBQUEsYUFIRixDQW5CZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBMEJlNUIsaUI7Ozs7O3dNQUFmLGtCQUNJK0IsSUFESixFQUVJeEIsUUFGSixFQUdJRCxLQUhKLEVBSUkwQixxQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNSXRDLDREQUFPLENBQUNjLE1BQVIsQ0FBZSxhQUFmO0FBTko7QUFBQSxtQkFPMkJDLHlEQUFLLFdBQUliLE1BQUosc0JBQTZCO0FBQ3JEYyxvQkFBTSxFQUFFLE1BRDZDO0FBRXJEQyxxQkFBTyxFQUFFO0FBQUMsZ0NBQWdCLGtCQUFqQjtBQUFxQywwQkFBVTtBQUEvQyxlQUY0QztBQUdyREMsa0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDakJpQixvQkFBSSxFQUFKQSxJQURpQjtBQUVqQnhCLHdCQUFRLEVBQVJBLFFBRmlCO0FBR2pCRCxxQkFBSyxFQUFMQSxLQUhpQjtBQUlqQjBCLHFDQUFxQixFQUFyQkE7QUFKaUIsZUFBZjtBQUgrQyxhQUE3QixDQVBoQzs7QUFBQTtBQU9VakIsb0JBUFY7QUFpQlVDLG1CQWpCVixHQWlCb0JELFFBQVEsQ0FBQ0UsSUFBVCxFQWpCcEI7O0FBQUEsa0JBa0JRRixRQUFRLENBQUNHLE1BQVQsS0FBb0IsR0FsQjVCO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQW1CZUYsT0FBTyxDQUFDRyxJQUFSLENBQWEsVUFBQ0MsSUFBRCxFQUFlO0FBQy9CYSxrRUFBSyxDQUFDQyxRQUFOLENBQWVDLDBFQUFXLENBQUNmLElBQUksQ0FBQ2dCLE9BQU4sQ0FBMUI7QUFDQUMsd0JBQVUsQ0FBQztBQUFBLHVCQUFNWixNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEVBQU47QUFBQSxlQUFELEVBQWlDLElBQWpDLENBQVY7QUFDSCxhQUhNLFdBR0UsVUFBQ0MsR0FBRDtBQUFBLHFCQUFjQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxRQUFkLEVBQXdCRixHQUF4QixDQUFkO0FBQUEsYUFIRixDQW5CZjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O1NBMEJlMUIsb0I7Ozs7OzJNQUFmLGtCQUNJNkIsSUFESixFQUVJeEIsUUFGSixFQUdJRCxLQUhKLEVBSUkwQixxQkFKSixFQUtJTSxLQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9JNUMsNERBQU8sQ0FBQ2MsTUFBUixDQUFlLGFBQWY7QUFQSjtBQUFBLG1CQVEyQkMseURBQUssV0FBSWIsTUFBSiwyQkFBa0M7QUFDMURjLG9CQUFNLEVBQUUsTUFEa0Q7QUFFMURDLHFCQUFPLEVBQUU7QUFBQyxnQ0FBZ0Isa0JBQWpCO0FBQXFDLDBCQUFVO0FBQS9DLGVBRmlEO0FBRzFEQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQmlCLG9CQUFJLEVBQUpBLElBRGlCO0FBRWpCeEIsd0JBQVEsRUFBUkEsUUFGaUI7QUFHakJELHFCQUFLLEVBQUxBLEtBSGlCO0FBSWpCMEIscUNBQXFCLEVBQXJCQSxxQkFKaUI7QUFLakJNLHFCQUFLLEVBQUxBO0FBTGlCLGVBQWY7QUFIb0QsYUFBbEMsQ0FSaEM7O0FBQUE7QUFRVXZCLG9CQVJWO0FBbUJVQyxtQkFuQlYsR0FtQm9CRCxRQUFRLENBQUNFLElBQVQsRUFuQnBCOztBQUFBLGtCQW9CUUYsUUFBUSxDQUFDRyxNQUFULEtBQW9CLEdBcEI1QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FxQmVGLE9BQU8sQ0FBQ0csSUFBUixDQUFhLFVBQUNDLElBQUQsRUFBZTtBQUMvQmEsa0VBQUssQ0FBQ0MsUUFBTixDQUFlQywwRUFBVyxDQUFDZixJQUFJLENBQUNnQixPQUFOLENBQTFCO0FBQ0FDLHdCQUFVLENBQUM7QUFBQSx1QkFBTVosTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixFQUFOO0FBQUEsZUFBRCxFQUFpQyxJQUFqQyxDQUFWO0FBQ0gsYUFITSxXQUdFLFVBQUNDLEdBQUQ7QUFBQSxxQkFBY0MsT0FBTyxDQUFDQyxLQUFSLENBQWMsUUFBZCxFQUF3QkYsR0FBeEIsQ0FBZDtBQUFBLGFBSEYsQ0FyQmY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztTQTRCZXpCLGtCOzs7Ozt5TUFBZixrQkFDSTRCLElBREosRUFFSXhCLFFBRkosRUFHSUQsS0FISixFQUlJMEIscUJBSkosRUFLSU0sS0FMSixFQU1JQyxXQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFJN0MsNERBQU8sQ0FBQ2MsTUFBUixDQUFlLGFBQWY7QUFSSjtBQUFBLG1CQVMyQkMseURBQUssV0FBSWIsTUFBSix1QkFBOEI7QUFDdERjLG9CQUFNLEVBQUUsTUFEOEM7QUFFdERDLHFCQUFPLEVBQUU7QUFBQyxnQ0FBZ0Isa0JBQWpCO0FBQXFDLDBCQUFVO0FBQS9DLGVBRjZDO0FBR3REQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQmlCLG9CQUFJLEVBQUpBLElBRGlCO0FBRWpCeEIsd0JBQVEsRUFBUkEsUUFGaUI7QUFHakJELHFCQUFLLEVBQUxBLEtBSGlCO0FBSWpCMEIscUNBQXFCLEVBQXJCQSxxQkFKaUI7QUFLakJNLHFCQUFLLEVBQUxBLEtBTGlCO0FBTWpCQywyQkFBVyxFQUFYQTtBQU5pQixlQUFmO0FBSGdELGFBQTlCLENBVGhDOztBQUFBO0FBU1V4QixvQkFUVjtBQXFCVUMsbUJBckJWLEdBcUJvQkQsUUFBUSxDQUFDRSxJQUFULEVBckJwQjs7QUFBQSxrQkFzQlFGLFFBQVEsQ0FBQ0csTUFBVCxLQUFvQixHQXRCNUI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsOENBdUJlRixPQUFPLENBQUNHLElBQVIsQ0FBYSxVQUFDQyxJQUFELEVBQWU7QUFDL0JhLGtFQUFLLENBQUNDLFFBQU4sQ0FBZUMsMEVBQVcsQ0FBQ2YsSUFBSSxDQUFDZ0IsT0FBTixDQUExQjtBQUNBQyx3QkFBVSxDQUFDO0FBQUEsdUJBQU1aLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsRUFBTjtBQUFBLGVBQUQsRUFBaUMsSUFBakMsQ0FBVjtBQUNILGFBSE0sV0FHRSxVQUFDQyxHQUFEO0FBQUEscUJBQWNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JGLEdBQXhCLENBQWQ7QUFBQSxhQUhGLENBdkJmOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0E4QmU3QixNOzs7Ozs2TEFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lMLDREQUFPLENBQUNjLE1BQVIsQ0FBZSxhQUFmO0FBREo7QUFBQSxtQkFFaUJDLHlEQUFLLFdBQUliLE1BQUosY0FBcUI7QUFDbkNjLG9CQUFNLEVBQUUsS0FEMkI7QUFFbkNDLHFCQUFPLEVBQUU7QUFDTCxnQ0FBZ0Isa0JBRFg7QUFFTCwrQ0FBK0I7QUFGMUI7QUFGMEIsYUFBckIsQ0FBTCxDQU9SUSxJQVBRLENBT0g7QUFBQSxxQkFBTUksa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosQ0FBTjtBQUFBLGFBUEcsRUFRUkwsSUFSUSxDQVFIO0FBQUEscUJBQU1NLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUIsSUFBdkIsQ0FBTjtBQUFBLGFBUkcsV0FTRixVQUFDQyxHQUFEO0FBQUEscUJBQVNDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjLFFBQWQsRUFBd0JGLEdBQXhCLENBQVQ7QUFBQSxhQVRFLENBRmpCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiIuL3NyYy9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHtzaG93U3VjY2Vzc30gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvYWN0aW9uc1wiO1xuXG5sZXQgY3VycmVudFVzZXJTdWJqZWN0ID0gQ29va2llcy5nZXRKU09OKFwiY3VycmVudFVzZXJcIilcbiAgICA/IENvb2tpZXMuZ2V0SlNPTihcImN1cnJlbnRVc2VyXCIpXG4gICAgOiB7fTtcblxuY29uc3QgdGFyZ2V0ID0gYGh0dHBzOi8vaW50aW0tdmliZS1hcGkucGFkaWxvLnByby9hcGlgO1xuXG5leHBvcnQgY29uc3QgYXV0aGVudGljYXRpb25TZXJ2aWNlID0ge1xuICAgIGxvZ2luLFxuICAgIGxvZ291dCxcbiAgICByZWdpc3RyYXRpb25BZG1pbixcbiAgICByZWdpc3RyYXRpb25DbGllbnQsXG4gICAgcmVnaXN0cmF0aW9uUHJvdmlkZXIsXG4gICAgcmVnaXN0cmF0aW9uQWdlbmN5LFxuICAgIGN1cnJlbnRVc2VyOiBjdXJyZW50VXNlclN1YmplY3QsXG4gICAgZ2V0IGN1cnJlbnRVc2VyVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlclN1YmplY3Q7XG4gICAgfSxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2xvZ2luYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7ZW1haWwsIHBhc3N3b3JkfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiY3VycmVudFVzZXJcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIHtleHBpcmVzOiAxfSk7XG4gICAgICAgICAgICBjdXJyZW50VXNlclN1YmplY3QgPSBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goJy8nKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycikpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVnaXN0cmF0aW9uQ2xpZW50KFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2ludGltLXZpYmUtYXBpLnBhZGlsby5wcm8vYXBpL2NsaWVudC9yZWdpc3RlcmAsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLCAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBwYXNzd29yZF9jb25maXJtYXRpb24sXG4gICAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpLCAzMDAwKVxuICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25BZG1pbihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGFzc3dvcmQ6IHN0cmluZyxcbiAgICBlbWFpbDogc3RyaW5nLFxuICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbjogc3RyaW5nXG4pOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0YXJnZXR9L2FkbWluL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdHJhdGlvblByb3ZpZGVyKFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBwYXNzd29yZDogc3RyaW5nLFxuICAgIGVtYWlsOiBzdHJpbmcsXG4gICAgcGFzc3dvcmRfY29uZmlybWF0aW9uOiBzdHJpbmcsXG4gICAgcGhvbmU6IHN0cmluZyB8IG51bWJlclxuKTogUHJvbWlzZTxhbnk+IHtcbiAgICBDb29raWVzLnJlbW92ZShcImN1cnJlbnRVc2VyXCIpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGFyZ2V0fS9pbmRpdmlkdWFsL3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIHBob25lXG4gICAgICAgIH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IHByb21pc2UgPSByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goc2hvd1N1Y2Nlc3MoZGF0YS5tZXNzYWdlKSlcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpLCAzMDAwKVxuICAgICAgICB9KS5jYXRjaCgoZXJyOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyKSk7XG4gICAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiByZWdpc3RyYXRpb25BZ2VuY3koXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhc3N3b3JkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZyxcbiAgICBwYXNzd29yZF9jb25maXJtYXRpb246IHN0cmluZyxcbiAgICBwaG9uZTogc3RyaW5nIHwgbnVtYmVyLFxuICAgIGFnZW5jeV9uYW1lOiBzdHJpbmdcbik6IFByb21pc2U8YW55PiB7XG4gICAgQ29va2llcy5yZW1vdmUoXCJjdXJyZW50VXNlclwiKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3RhcmdldH0vYWdlbmN5L3JlZ2lzdGVyYCwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkX2NvbmZpcm1hdGlvbixcbiAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgYWdlbmN5X25hbWVcbiAgICAgICAgfSksXG4gICAgfSk7XG4gICAgY29uc3QgcHJvbWlzZSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbigoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzaG93U3VjY2VzcyhkYXRhLm1lc3NhZ2UpKVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCksIDMwMDApXG4gICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIENvb2tpZXMucmVtb3ZlKFwiY3VycmVudFVzZXJcIik7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGAke3RhcmdldH0vbG9nb3V0YCwge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4gICAgICAgIH0sXG4gICAgfSlcbiAgICAgICAgLnRoZW4oKCkgPT4gUm91dGVyLnB1c2goJy9sb2dpbicpKVxuICAgICAgICAudGhlbigoKSA9PiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKHRydWUpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnIpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/_services/authentication.service.ts\n");

/***/ })

})