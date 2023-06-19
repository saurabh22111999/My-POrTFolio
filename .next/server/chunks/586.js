"use strict";
exports.id = 586;
exports.ids = [586];
exports.modules = {

/***/ 7586:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3875);
/* harmony import */ var _HighRadius__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7694);
/* harmony import */ var _Feynn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8276);
/* harmony import */ var _Dev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2702);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_HighRadius__WEBPACK_IMPORTED_MODULE_3__, _Feynn__WEBPACK_IMPORTED_MODULE_4__, _Dev__WEBPACK_IMPORTED_MODULE_5__]);
([_HighRadius__WEBPACK_IMPORTED_MODULE_3__, _Feynn__WEBPACK_IMPORTED_MODULE_4__, _Dev__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Experience = ()=>{
    const [workHighRadius, setWorkHighRadius] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const [workFeynn, setWorkFeynn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [workDev, setWorkDev] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleFeynn = ()=>{
        setWorkFeynn(true);
        setWorkDev(false);
        setWorkHighRadius(false);
    };
    const handleHighRadius = ()=>{
        setWorkFeynn(false);
        setWorkDev(false);
        setWorkHighRadius(true);
    };
    const handleDev = ()=>{
        setWorkDev(true);
        setWorkFeynn(false);
        setWorkHighRadius(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "experience",
        className: "max-w-containerxs mx-auto py-10 lgl:py-24 px-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SectionTitle__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: "Where I have Worked",
                titleNo: "02."
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "w-full mt-10 flex flex-col md:flex-row gap-16 ",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "md:w-32 flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                onClick: handleHighRadius,
                                className: "border-l-2 border-l-hoverColor text-textDark bg-transparent   hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8   font-medium",
                                children: "HighRadius"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                onClick: handleFeynn,
                                className: "border-l-2 border-l-hoverColor text-textDark bg-transparent   hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8   font-medium",
                                children: "FeynnLabs"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                onClick: handleDev,
                                className: "border-l-2 border-l-hoverColor text-textDark bg-transparent   hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8   font-medium",
                                children: "DevIncept"
                            })
                        ]
                    }),
                    workHighRadius && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HighRadius__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    workFeynn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Feynn__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    workDev && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dev__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Experience);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;