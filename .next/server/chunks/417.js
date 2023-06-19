"use strict";
exports.id = 417;
exports.ids = [417];
exports.modules = {

/***/ 7417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Banner = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "home",
        className: "max-w-contentContainer mx-auto py-10 mdl:py-24   flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h3, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 0.8
                },
                className: "text-lg font-titleFont tracking-wide text-textGreen",
                children: "Hi, my name is"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 1
                },
                className: "text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col",
                children: [
                    "Saurabh Jangra.",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-textDark mt-2 lgl:mt-4",
                        children: "I build things for the web"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.p, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 1.1
                },
                className: "text-base md:max-w-[650px] text-textDark font-medium",
                children: [
                    " ",
                    "A self-motivated and dedicated computer science engineering graduate with coding knowledge in different programming languages. Professional with advanced knowledge of designing and building web pages. A motivated and dedicated individual seeking a position that involves regular use of these skills.",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "https://www.linkedin.com/in/saurabh-jangra-84a092202/",
                        target: "_blank",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden   group",
                            children: [
                                "Learn More",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: " absolute w-full h-[1px] bg-textGreen left-0 bottom-1   -translate-x-[110%] group-hover:translate-x-0 transition-transform   duration-500"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                initial: {
                    y: 10,
                    opacity: 0
                },
                animate: {
                    y: 0,
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: 1.2
                },
                className: "   w-52 h-14 text-sm font-titleFont rounded-md text-textGreen  border border-textGreen   tracking-wide hover:bg-hoverColor duration-300",
                children: "Check out my Project!"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;