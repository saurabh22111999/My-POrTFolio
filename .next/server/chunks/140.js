"use strict";
exports.id = 140;
exports.ids = [140];
exports.modules = {

/***/ 7924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.0b43b4e1.png","height":67,"width":67,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApklEQVR42k3OoQoCQRDG8al255rJK/oUPoDgQxhNgtng7YpvsfsAgumaRRSMwhXBYrMJGoxy/se7sAu/8O3Mzo7Y0eAWuGn0ryy6J+4afIWeFZeo8cWey2OTvcmFUGXRglsJp5041+g8DV0L02RCiS1mGoqOJC9yrFHihBpvDKyoKDBOHhzabzfCxkM0S0W/4/KcBTIwsu4+rjQ9KHw0/kdfMBER+QFFI2ks90VzYgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 7140:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7924);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4152);
/* harmony import */ var react_icons_tb__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5065);
/* harmony import */ var react_icons_sl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_sl__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Navbar = ()=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)("");
    const [showMenu, setshowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleScroll = (e)=>{
        e.preventDefault();
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth"
        });
        const links = document.querySelectorAll(".nav-link");
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-full  shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor    px-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "max-w-full w-full h-full m-0  py-1 font-titleFont flex items-center   justify-between",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: "w-14",
                        src: _public_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                        alt: "logo"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "hidden mdl:inline-flex items-center gap-7",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex text-[13px] gap-7",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "#home",
                                    onClick: handleScroll,
                                    className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                        initial: {
                                            y: -10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: 0.2
                                        },
                                        children: "Home"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "#about",
                                    onClick: handleScroll,
                                    className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                        initial: {
                                            y: -10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: 0.4
                                        },
                                        children: "About"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "#experience",
                                    onClick: handleScroll,
                                    className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                        initial: {
                                            y: -10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: 0.6
                                        },
                                        children: "Experience"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "#project",
                                    onClick: handleScroll,
                                    className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                        initial: {
                                            y: -10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: 0.8
                                        },
                                        children: "Project"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "#contact",
                                    onClick: handleScroll,
                                    className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                        initial: {
                                            y: -10,
                                            opacity: 0
                                        },
                                        animate: {
                                            y: 0,
                                            opacity: 1
                                        },
                                        transition: {
                                            duration: 1,
                                            delay: 1
                                        },
                                        children: "Contact"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "/assets/resume.pdf",
                            target: "_blank",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 0.5
                                },
                                className: "px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen   hover:bg-hoverColor duration-300",
                                children: "Resume"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    onClick: ()=>setshowMenu(true),
                    className: "w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-full h-[2px] bg-textGreen inline-flex transform    group-hover:translate-x-2 translate-all ease-in-out duration-300"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-full h-[2px] bg-textGreen inline-flex transform    translate-x-3 group-hover:translate-x-0 translate-all ease-in-out duration-300"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "w-full h-[2px] bg-textGreen inline-flex transform   translate-x-1 group-hover:translate-x-3 translate-all ease-in-out duration-300"
                        })
                    ]
                }),
                showMenu && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: (node)=>ref.current = node,
                    className: "absolute mdl:hidden top-0 right-0 w-full h-screen bg-black   bg-opacity-50 flex flex-col items-end",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                        initial: {
                            x: 20,
                            opacity: 0
                        },
                        animate: {
                            x: 0,
                            opacity: 1
                        },
                        transition: {
                            delay: 0.5
                        },
                        className: "w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240]   flex flex-col items-center px-4 py-10 relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_6__.MdOutlineClose, {
                                onClick: ()=>setshowMenu(false),
                                className: "text-3xl text-textGreen cursor-pointer hover:text-red-500   absolute top-4 right-4"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "flex flex-col text-base gap-7",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "#home",
                                                onClick: handleScroll,
                                                className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                                    initial: {
                                                        y: -10,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        y: 0,
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        duration: 1,
                                                        delay: 0.2,
                                                        ease: "easeIn"
                                                    },
                                                    children: "Home"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "#about",
                                                onClick: handleScroll,
                                                className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                                    initial: {
                                                        y: -10,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        y: 0,
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        duration: 1,
                                                        delay: 0.4
                                                    },
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "#experience",
                                                onClick: handleScroll,
                                                className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                                    initial: {
                                                        y: -10,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        y: 0,
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        duration: 1,
                                                        delay: 0.6
                                                    },
                                                    children: "Experience"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "#project",
                                                onClick: handleScroll,
                                                className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                                    initial: {
                                                        y: -10,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        y: 0,
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        duration: 1,
                                                        delay: 0.8
                                                    },
                                                    children: "Project"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: "#contact",
                                                onClick: handleScroll,
                                                className: "flex items-center gap-1 font-medium text-textDark    hover:text-textGreen cursor-pointer duration-300 nav-link",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
                                                    initial: {
                                                        y: -10,
                                                        opacity: 0
                                                    },
                                                    animate: {
                                                        y: 0,
                                                        opacity: 1
                                                    },
                                                    transition: {
                                                        duration: 1,
                                                        delay: 1
                                                    },
                                                    children: "Contact"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "/assets/resume.pdf",
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                delay: 0.5
                                            },
                                            className: "mt-5 px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen   hover:bg-hoverColor duration-300",
                                            children: "Resume"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: " flex  items-center justify-center   w-full py-6 gap-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://github.com/saurabh22111999",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex   items-center justify-center hover:text-textGreen cursor-pointer   hover:-translate-y-2 transition-all duration-300",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_tb__WEBPACK_IMPORTED_MODULE_7__.TbBrandGithub, {})
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://www.youtube.com/@gam3rpi302/featured",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex   items-center justify-center hover:text-textGreen cursor-pointer   hover:-translate-y-2 transition-all duration-300",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_sl__WEBPACK_IMPORTED_MODULE_8__.SlSocialYoutube, {})
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://www.linkedin.com/in/saurabh-jangra-84a092202/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex   items-center justify-center hover:text-textGreen cursor-pointer   hover:-translate-y-2 transition-all duration-300",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_sl__WEBPACK_IMPORTED_MODULE_8__.SlSocialLinkedin, {})
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://github.com/saurabh22111999",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex   items-center justify-center hover:text-textGreen cursor-pointer   hover:-translate-y-2 transition-all duration-300",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_sl__WEBPACK_IMPORTED_MODULE_8__.SlSocialFacebook, {})
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://www.instagram.com/saurabh_j__/",
                                                target: "_blank",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex   items-center justify-center hover:text-textGreen cursor-pointer   hover:-translate-y-2 transition-all duration-300",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_sl__WEBPACK_IMPORTED_MODULE_8__.SlSocialInstagram, {})
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                                initial: {
                                    opacity: 0
                                },
                                animate: {
                                    opacity: 1
                                },
                                transition: {
                                    delay: 1.2
                                },
                                className: "text-sm w-72 tracking-widest text-textGreen text-center   mt-4",
                                href: "mailto:cse.19bcs6009@gmail.com",
                                children: [
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "contact me : cse.19bcs6009@gmail.com"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;