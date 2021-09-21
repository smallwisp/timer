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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changePhoto */ \"./src/modules/changePhoto.js\");\n/* harmony import */ var _modules_checkInputsAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkInputsAll */ \"./src/modules/checkInputsAll.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/validator */ \"./src/modules/validator.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar valid = new _modules_validator__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n  selector: '#form1-name',\n  pattern: {},\n  method: {}\n});\nvalid.init(); // Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('09 september 2021'); // Меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // our team\n\n(0,_modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // checking all inputs\n\n(0,_modules_checkInputsAll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // calc\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100); // send ajax form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://lesson17-timer/./src/index.js?");

/***/ }),

/***/ "./src/modules/validator.js":
/*!**********************************!*\
  !*** ./src/modules/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Validator = /*#__PURE__*/function () {\n  function Validator(_ref) {\n    var selector = _ref.selector,\n        pattern = _ref.pattern,\n        method = _ref.method;\n\n    _classCallCheck(this, Validator);\n\n    this.selector = selector;\n    this.pattern = pattern;\n    this.method = method;\n  }\n\n  _createClass(Validator, [{\n    key: \"init\",\n    value: function init() {\n      console.log(this.selector);\n    }\n  }]);\n\n  return Validator;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validator);\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/validator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("05cd16abcf277dc3e170")
/******/ })();
/******/ 
/******/ }
);