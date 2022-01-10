"use strict";
(() => {
var exports = {};
exports.id = 466;
exports.ids = [466];
exports.modules = {

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


const handler = (req, res)=>{
    if (req.method === "GET") {
        console.log(req.query.feedbackId);
        const feedbackId = req.query.feedbackId;
        const filepath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "data", "feedback.json");
        const fileData = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(filepath);
        let data = null;
        try {
            data = JSON.parse(fileData);
        } catch (error) {
            data = [];
        }
        const selectedFeedback = data.find((feedback)=>feedback.id === feedbackId
        );
        res.status(200).json({
            feedback: selectedFeedback
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3843));
module.exports = __webpack_exports__;

})();