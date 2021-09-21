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

/***/ "./src/modules/checkInputsAll.js":
/*!***************************************!*\
  !*** ./src/modules/checkInputsAll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _maskPhone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maskPhone */ \"./src/modules/maskPhone.js\");\n\n\nvar checkInputsAll = function checkInputsAll() {\n  var deleteHyphenSpace = function deleteHyphenSpace(str) {\n    str = str.trim();\n    str = str.replace(/ +/g, ' ');\n    str = str.replace(/\\-+/g, '\\-');\n    str = str.replace(/^-/g, '');\n    str = str.replace(/-$/g, '');\n    return str;\n  };\n\n  var inputsAll = document.querySelectorAll('input');\n  inputsAll.forEach(function (item) {\n    item.setAttribute('required', true);\n    item.addEventListener('input', function (event) {\n      if (event.target.id === 'form1-name' || event.target.id === 'form2-name' || event.target.id === 'form3-name') {\n        var nameValue = event.target.value;\n        event.target.value = nameValue.replace(/[;\\+\\>\\<\\*\\!\\=\\.@:\\?\\,#\\$\\%^\\&\\}{\\[\\]\\^\\\"\\\\\\|\\/\\_)(\\w]/gi, '');\n      } else if (event.target.id === 'form1-email' || event.target.id === 'form2-email' || event.target.id === 'form3-email') {\n        event.target.value = event.target.value.replace(/[а-яА-Я;:\\?\\,)(#\\$\\%^\\&\\}{\\[\\]\\^\\\"\\\\\\|\\/]/gi, '');\n      } else if (event.target.classList === 'calc-item') {\n        event.target.value = event.target.value.replace(/\\D/g, '');\n      } else if (event.target.id === 'form2-message') {\n        event.target.value = event.target.value.replace(/[a-zA-Z)(#@\\=\\$\\>\\<\\*\\%\\&\\}{\\[\\]\\^\\\\\\|\\/]/gi, '');\n      } else {\n        event.target.value = event.target.value.replace(/[а-яА-Яa-zA-Z;\\>\\<\\*)(\\=\\.@:\\?\\,#\\$\\%^\\&\\}{\\[\\]\\^\\\"\\\\\\|\\/\\_]/gi, '');\n        event.target.value = (0,_maskPhone__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(event.target.id);\n      }\n    });\n    item.addEventListener('blur', function (event) {\n      if (event.target.id === 'form1-name' || event.target.id === 'form2-name' || event.target.id === 'form3-name') {\n        var nameValue = event.target.value;\n        event.target.value = deleteHyphenSpace(nameValue)[0].toUpperCase() + deleteHyphenSpace(nameValue).slice(1, deleteHyphenSpace(nameValue).length).toLowerCase();\n      } else if (event.target.id === 'form1-email' || event.target.id === 'form2-email' || event.target.id === 'form3-email' || event.target.classList === 'calc-item' || event.target.id === 'form2-message' || event.target.id === 'form1-phone' || event.target.id === 'form2-phone' || event.target.id === 'form3-phone') {\n        event.target.value = deleteHyphenSpace(event.target.value);\n      }\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkInputsAll);\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/checkInputsAll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c14fada6494477a83ca9")
/******/ })();
/******/ 
/******/ }
);