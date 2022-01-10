"use strict";
(() => {
var exports = {};
exports.id = 557;
exports.ids = [557];
exports.modules = {

/***/ 7823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ allfeedback),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/allfeedback.js



const AllFeedback = (props)=>{
    console.log("DATA from JSON is");
    console.log(props.feedbacks);
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        children: props.feedbacks.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: item.text
            }, item.id)
        )
    }));
};
const getStaticProps = ()=>{
    const filepath = external_path_default().join(process.cwd(), "data", "feedback.json");
    const fileData = external_fs_default().readFileSync(filepath);
    let data = null;
    try {
        data = JSON.parse(fileData);
    } catch (error) {
        data = [];
    }
    console.log("DATA IS ");
    console.log(data);
    return {
        props: {
            feedbacks: data
        }
    };
};
/* harmony default export */ const allfeedback = (AllFeedback);


/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7823));
module.exports = __webpack_exports__;

})();