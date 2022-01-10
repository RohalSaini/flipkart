"use strict";
(() => {
var exports = {};
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 1423:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 2944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1423);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


const handler = (req, res)=>{
    if (req.method === 'POST') {
        console.log("POST API");
        console.log(req.body);
        console.log(req.body.email);
        console.log(req.body.feedback);
        const email = req.body.email;
        const feedback = req.body.feedback;
        const newFeedback = {
            id: new Date().toDateString(),
            email: email,
            text: feedback
        };
        // Store Data
        const filepath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "data", "feedback.json");
        const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filepath);
        let data = null;
        try {
            data = JSON.parse(fileData);
        } catch (error) {
            data = [];
        }
        data.push(newFeedback);
        fs__WEBPACK_IMPORTED_MODULE_0___default().writeFileSync(filepath, JSON.stringify(data));
        res.status(201).json({
            message: "Success",
            feedback: newFeedback
        });
    } else if (req.method === "GET") {
        const filepath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "data", "feedback.json");
        const fileData = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filepath);
        let data = null;
        try {
            data = JSON.parse(fileData);
        } catch (error) {
            data = [];
        }
        console.log("GET API");
        res.status(200).json({
            message: "SUCCESS",
            feedback: data
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
var __webpack_exports__ = (__webpack_exec__(2944));
module.exports = __webpack_exports__;

})();