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

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changePhoto */ \"./src/modules/changePhoto.js\");\n/* harmony import */ var _modules_checkInputsAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkInputsAll */ \"./src/modules/checkInputsAll.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/validator */ \"./src/modules/validator.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_validator__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\n\nvar valid = new (_modules_validator__WEBPACK_IMPORTED_MODULE_9___default())({\n  selector: 'form',\n  pattern: {\n    phone: /^\\+380\\d{7}$/,\n    zip: /\\d{5,6}/\n  },\n  method: {\n    'phone': [['notEmpty'], ['pattern', 'phone']],\n    'email': [['notEmpty'], ['pattern', 'email']]\n  }\n});\nvalid.init(); // Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('10 september 2021'); // Меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // our team\n\n(0,_modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // checking all inputs\n\n(0,_modules_checkInputsAll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // calc\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100); // send ajax form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://lesson17-timer/./src/index.js?");

/***/ }),

/***/ "./src/modules/validator.js":
/*!**********************************!*\
  !*** ./src/modules/validator.js ***!
  \**********************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/validator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("baa8c23ba3512d0b338f")
/******/ })();
/******/ 
/******/ }
);