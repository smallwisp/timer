"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelesson17_timer"]("main",{

/***/ "./src/modules/validator.js":
/*!**********************************!*\
  !*** ./src/modules/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Validator = /*#__PURE__*/function () {\n  function Validator(_ref) {\n    var selector = _ref.selector,\n        pattern = _ref.pattern,\n        method = _ref.method;\n\n    _classCallCheck(this, Validator);\n\n    this.selector = selector;\n    this.pattern = pattern;\n    this.method = method;\n  }\n\n  _createClass(Validator, [{\n    key: \"init\",\n    value: function init() {\n      this.applyStyle();\n      console.log(this.selector);\n    }\n  }, {\n    key: \"showError\",\n    value: function showError(elem) {\n      elem.classList.add('');\n    }\n  }, {\n    key: \"showSuccess\",\n    value: function showSuccess(elem) {\n      elem.classList.add('');\n    }\n  }, {\n    key: \"applyStyle\",\n    value: function applyStyle() {\n      var style = document.createElement('style');\n      style.textContent = \"\\n            input.success {\\n                border: 2px solid green;\\n            }\\n            iput.error {\\n                border: 2px solid red;\\n            }\\n        \";\n      document.head.appendChild(style);\n    }\n  }]);\n\n  return Validator;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validator);\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/validator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0a04aad71d8eb06f7b2e")
/******/ })();
/******/ 
/******/ }
);