"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/newticket/page",{

/***/ "(app-pages-browser)/./src/app/newticket/page.jsx":
/*!************************************!*\
  !*** ./src/app/newticket/page.jsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ NewTicket)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./src/components/Header.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ExistingTickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ExistingTickets */ \"(app-pages-browser)/./src/components/ExistingTickets.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"(app-pages-browser)/./node_modules/react-toastify/dist/react-toastify.esm.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction NewTicket() {\n    _s();\n    const [tickettype, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ticketsummary, setSummary] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [ticketdetails, setDetails] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [hours, setHours] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:4000/api/v1/createticket\", {\n                tickettype,\n                ticketsummary,\n                ticketdetails,\n                hours\n            });\n            setType(\"\");\n            setSummary(\"\");\n            setDetails(\"\");\n            setHours(\"\");\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(res.data.message);\n        } catch (error) {\n            if (error.response && error.response.data && error.response.data.message) {\n                react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(error.response.data.message);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex flex-row w-screen h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ExistingTickets__WEBPACK_IMPORTED_MODULE_3__.ExistingTickets, {}, void 0, false, {\n                        fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"flex flex-row mt-[70px] w-[45%]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col w-[400px] border border-[#7D7D82] h-[550px] bg-[#FFFFFF] ml-[30px] shadow-lg mr-[20px] items-center font-mono rounded-lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"mt-[30px] font-mono text-black font-medium text-lg mr-36 \",\n                                    children: \"Create New Ticket\"\n                                }, void 0, false, {\n                                    fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: handleSubmit,\n                                    className: \"flex flex-col w-full items-center mt-[30px]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                            className: \"w-[80%] h-[40px] border border-[#B4B4B8] px-3 text-sm rounded-md outline-none text-gray-700\",\n                                            value: tickettype,\n                                            placeholder: \"Ticket Type\",\n                                            onChange: (e)=>setType(e.target.value),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"Story\",\n                                                    children: \"Story\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"bug\",\n                                                    children: \"Bug\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                                    lineNumber: 71,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"feature\",\n                                                    children: \"Feature Request\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 17\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                                    value: \"support\",\n                                                    children: \"Support\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 17\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            value: ticketsummary,\n                                            onChange: (e)=>setSummary(e.target.value),\n                                            placeholder: \"Summary\",\n                                            className: \"w-[80%] h-[40px] border border-[#B4B4B8] mt-[20px] px-3 text-sm rounded-md outline-none\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            name: \"\",\n                                            id: \"\",\n                                            onChange: (e)=>setDetails(e.target.value),\n                                            value: ticketdetails,\n                                            className: \"w-[80%] min-h-[80px] max-h-[140px] border border-[#B4B4B8] mt-[20px] px-3 text-sm rounded-md outline-none\",\n                                            placeholder: \"Details\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"number\",\n                                            name: \"\",\n                                            onChange: (e)=>setHours(e.target.value),\n                                            value: hours,\n                                            min: \"0.00\",\n                                            id: \"\",\n                                            placeholder: \"hours\",\n                                            className: \"w-[80%] h-[40px] border border-[#B4B4B8] mt-[15px] px-3 text-sm rounded-md outline-none\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"w-[80%] h-[40px] mt-[30px] bg-[#2EA8C3] text-black text-sm rounded-md hover:text-white transition-all\",\n                                            children: \"Save Ticket\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"reset\",\n                                            className: \"w-[80%] h-[40px] mt-[15px] border border-[#2EA8C3] text-[#2EA8C3] text-sm rounded-md hover:bg-blue-400 hover:text-white transition-all\",\n                                            children: \"Cancel\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/haroon-talib/Ticket-app/frontend/src/app/newticket/page.jsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(NewTicket, \"sO8cg5coRBkOcPTALWKTMWgsHMI=\");\n_c = NewTicket;\nvar _c;\n$RefreshReg$(_c, \"NewTicket\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbmV3dGlja2V0L3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDNkM7QUFDWjtBQUM4QjtBQUNyQztBQUNhO0FBRXhCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFlBQVlDLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDTyxlQUFlQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsZUFBZUMsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFbkMsTUFBTWEsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJO1lBQ0YsTUFBTUMsTUFBTSxNQUFNZCw2Q0FBS0EsQ0FBQ2UsSUFBSSxDQUMxQiw2Q0FDQTtnQkFDRVo7Z0JBQ0FFO2dCQUNBRTtnQkFDQUU7WUFDRjtZQUVGTCxRQUFRO1lBQ1JFLFdBQVc7WUFDWEUsV0FBVztZQUNYRSxTQUFTO1lBRVRULGlEQUFLQSxDQUFDZSxPQUFPLENBQUNGLElBQUlHLElBQUksQ0FBQ0MsT0FBTztRQUNoQyxFQUFFLE9BQU9DLE9BQU87WUFDZCxJQUNFQSxNQUFNQyxRQUFRLElBQ2RELE1BQU1DLFFBQVEsQ0FBQ0gsSUFBSSxJQUNuQkUsTUFBTUMsUUFBUSxDQUFDSCxJQUFJLENBQUNDLE9BQU8sRUFDM0I7Z0JBQ0FqQixpREFBS0EsQ0FBQ2tCLEtBQUssQ0FBQ0EsTUFBTUMsUUFBUSxDQUFDSCxJQUFJLENBQUNDLE9BQU87WUFDekM7UUFDRjtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDckIsc0RBQU1BOzs7OzswQkFFUCw4REFBQ3dCO2dCQUFLQyxXQUFVOztrQ0FDZCw4REFBQ3ZCLHdFQUFlQTs7Ozs7a0NBRWhCLDhEQUFDd0I7d0JBQVFELFdBQVU7a0NBQ2pCLDRFQUFDRTs0QkFBSUYsV0FBVTs7OENBQ2IsOERBQUNHO29DQUNDSCxXQUFVOzhDQUVYOzs7Ozs7OENBSUQsOERBQUNJO29DQUNDQyxVQUFVaEI7b0NBQ1ZXLFdBQVU7O3NEQUVWLDhEQUFDTTs0Q0FDQ04sV0FBVTs0Q0FDVk8sT0FBTzFCOzRDQUNQMkIsYUFBWTs0Q0FDWkMsVUFBVSxDQUFDbkIsSUFBTVIsUUFBUVEsRUFBRW9CLE1BQU0sQ0FBQ0gsS0FBSzs7OERBRXZDLDhEQUFDSTtvREFBT0osT0FBTTs4REFBUTs7Ozs7OzhEQUN0Qiw4REFBQ0k7b0RBQU9KLE9BQU07OERBQU07Ozs7Ozs4REFDcEIsOERBQUNJO29EQUFPSixPQUFNOzhEQUFVOzs7Ozs7OERBQ3hCLDhEQUFDSTtvREFBT0osT0FBTTs4REFBVTs7Ozs7Ozs7Ozs7O3NEQUUxQiw4REFBQ0s7NENBQ0NDLE1BQUs7NENBQ0xOLE9BQU94Qjs0Q0FDUDBCLFVBQVUsQ0FBQ25CLElBQU1OLFdBQVdNLEVBQUVvQixNQUFNLENBQUNILEtBQUs7NENBQzFDQyxhQUFZOzRDQUNaUixXQUFVOzs7Ozs7c0RBRVosOERBQUNjOzRDQUNDQyxNQUFLOzRDQUNMQyxJQUFHOzRDQUNIUCxVQUFVLENBQUNuQixJQUFNSixXQUFXSSxFQUFFb0IsTUFBTSxDQUFDSCxLQUFLOzRDQUMxQ0EsT0FBT3RCOzRDQUNQZSxXQUFVOzRDQUNWUSxhQUFZOzs7Ozs7c0RBRWQsOERBQUNJOzRDQUNDQyxNQUFLOzRDQUNMRSxNQUFLOzRDQUNMTixVQUFVLENBQUNuQixJQUFNRixTQUFTRSxFQUFFb0IsTUFBTSxDQUFDSCxLQUFLOzRDQUN4Q0EsT0FBT3BCOzRDQUNQOEIsS0FBSTs0Q0FDSkQsSUFBRzs0Q0FDSFIsYUFBWTs0Q0FDWlIsV0FBVTs7Ozs7O3NEQUVaLDhEQUFDa0I7NENBQ0NMLE1BQUs7NENBQ0xiLFdBQVU7c0RBQ1g7Ozs7OztzREFHRCw4REFBQ2tCOzRDQUNDTCxNQUFLOzRDQUNMYixXQUFVO3NEQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0E5R3dCcEI7S0FBQUEiLCJzb3VyY2VzIjpbIi9ob21lL2hhcm9vbi10YWxpYi9UaWNrZXQtYXBwL2Zyb250ZW5kL3NyYy9hcHAvbmV3dGlja2V0L3BhZ2UuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBFeGlzdGluZ1RpY2tldHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL0V4aXN0aW5nVGlja2V0c1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3VGlja2V0KCkge1xuICBjb25zdCBbdGlja2V0dHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RpY2tldHN1bW1hcnksIHNldFN1bW1hcnldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0aWNrZXRkZXRhaWxzLCBzZXREZXRhaWxzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbaG91cnMsIHNldEhvdXJzXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS92MS9jcmVhdGV0aWNrZXRcIixcbiAgICAgICAge1xuICAgICAgICAgIHRpY2tldHR5cGUsXG4gICAgICAgICAgdGlja2V0c3VtbWFyeSxcbiAgICAgICAgICB0aWNrZXRkZXRhaWxzLFxuICAgICAgICAgIGhvdXJzLFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgc2V0VHlwZShcIlwiKTtcbiAgICAgIHNldFN1bW1hcnkoXCJcIik7XG4gICAgICBzZXREZXRhaWxzKFwiXCIpO1xuICAgICAgc2V0SG91cnMoXCJcIik7XG5cbiAgICAgIHRvYXN0LnN1Y2Nlc3MocmVzLmRhdGEubWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZXJyb3IucmVzcG9uc2UgJiZcbiAgICAgICAgZXJyb3IucmVzcG9uc2UuZGF0YSAmJlxuICAgICAgICBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcbiAgICAgICkge1xuICAgICAgICB0b2FzdC5lcnJvcihlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy1zY3JlZW4gaC1zY3JlZW5cIj5cbiAgICAgICAgPEV4aXN0aW5nVGlja2V0cyAvPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgbXQtWzcwcHhdIHctWzQ1JV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bNDAwcHhdIGJvcmRlciBib3JkZXItWyM3RDdEODJdIGgtWzU1MHB4XSBiZy1bI0ZGRkZGRl0gbWwtWzMwcHhdIHNoYWRvdy1sZyBtci1bMjBweF0gaXRlbXMtY2VudGVyIGZvbnQtbW9ubyByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtWzMwcHhdIGZvbnQtbW9ubyB0ZXh0LWJsYWNrIGZvbnQtbWVkaXVtIHRleHQtbGcgbXItMzZcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENyZWF0ZSBOZXcgVGlja2V0XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBpdGVtcy1jZW50ZXIgbXQtWzMwcHhdXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNDBweF0gYm9yZGVyIGJvcmRlci1bI0I0QjRCOF0gcHgtMyB0ZXh0LXNtIHJvdW5kZWQtbWQgb3V0bGluZS1ub25lIHRleHQtZ3JheS03MDBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aWNrZXR0eXBlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVGlja2V0IFR5cGVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VHlwZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3RvcnlcIj5TdG9yeTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJidWdcIj5CdWc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmVhdHVyZVwiPkZlYXR1cmUgUmVxdWVzdDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJzdXBwb3J0XCI+U3VwcG9ydDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aWNrZXRzdW1tYXJ5fVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3VtbWFyeShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdW1tYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4MCVdIGgtWzQwcHhdIGJvcmRlciBib3JkZXItWyNCNEI0QjhdIG10LVsyMHB4XSBweC0zIHRleHQtc20gcm91bmRlZC1tZCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBpZD1cIlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXRhaWxzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17dGlja2V0ZGV0YWlsc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4MCVdIG1pbi1oLVs4MHB4XSBtYXgtaC1bMTQwcHhdIGJvcmRlciBib3JkZXItWyNCNEI0QjhdIG10LVsyMHB4XSBweC0zIHRleHQtc20gcm91bmRlZC1tZCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGV0YWlsc1wiXG4gICAgICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEhvdXJzKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17aG91cnN9XG4gICAgICAgICAgICAgICAgbWluPVwiMC4wMFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiaG91cnNcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzgwJV0gaC1bNDBweF0gYm9yZGVyIGJvcmRlci1bI0I0QjRCOF0gbXQtWzE1cHhdIHB4LTMgdGV4dC1zbSByb3VuZGVkLW1kIG91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs4MCVdIGgtWzQwcHhdIG10LVszMHB4XSBiZy1bIzJFQThDM10gdGV4dC1ibGFjayB0ZXh0LXNtIHJvdW5kZWQtbWQgaG92ZXI6dGV4dC13aGl0ZSB0cmFuc2l0aW9uLWFsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTYXZlIFRpY2tldFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bODAlXSBoLVs0MHB4XSBtdC1bMTVweF0gYm9yZGVyIGJvcmRlci1bIzJFQThDM10gdGV4dC1bIzJFQThDM10gdGV4dC1zbSByb3VuZGVkLW1kIGhvdmVyOmJnLWJsdWUtNDAwIGhvdmVyOnRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQ2FuY2VsXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZGVyIiwidXNlU3RhdGUiLCJFeGlzdGluZ1RpY2tldHMiLCJheGlvcyIsInRvYXN0IiwiTmV3VGlja2V0IiwidGlja2V0dHlwZSIsInNldFR5cGUiLCJ0aWNrZXRzdW1tYXJ5Iiwic2V0U3VtbWFyeSIsInRpY2tldGRldGFpbHMiLCJzZXREZXRhaWxzIiwiaG91cnMiLCJzZXRIb3VycyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsInBvc3QiLCJzdWNjZXNzIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnJvciIsInJlc3BvbnNlIiwibWFpbiIsImNsYXNzTmFtZSIsInNlY3Rpb24iLCJkaXYiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsInNlbGVjdCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9wdGlvbiIsImlucHV0IiwidHlwZSIsInRleHRhcmVhIiwibmFtZSIsImlkIiwibWluIiwiYnV0dG9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/newticket/page.jsx\n"));

/***/ })

});