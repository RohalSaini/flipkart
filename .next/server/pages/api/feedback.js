"use strict";
(() => {
var exports = {};
exports.id = 240;
exports.ids = [240];
exports.modules = {

/***/ 3408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ feedback)
});

;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/feedback.js


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
        const filepath = external_path_default().join(process.cwd(), "data", "feedback.json");
        const fileData = external_fs_default().readFileSync(filepath);
        let data = null;
        try {
            data = JSON.parse(fileData);
        } catch (error) {
            data = [];
        }
        data.push(newFeedback);
        external_fs_default().writeFileSync(filepath, JSON.stringify(data));
        res.status(201).json({
            message: "Success",
            feedback: newFeedback
        });
    } else {
        res.status(200).json({
            message: "This works"
        });
    }
};
/* harmony default export */ const feedback = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3408));
module.exports = __webpack_exports__;

})();