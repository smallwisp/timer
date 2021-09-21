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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Validator = /*#__PURE__*/function () {\n  function Validator(_ref) {\n    var selector = _ref.selector,\n        pattern = _ref.pattern,\n        method = _ref.method;\n\n    _classCallCheck(this, Validator);\n\n    this.form = document.querySelector(selector);\n    this.pattern = pattern;\n    this.method = method;\n    this.elementsForm = _toConsumableArray(this.form.elements).filter(function (item) {\n      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';\n    });\n  }\n\n  _createClass(Validator, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.applyStyle();\n      this.elementsForm.forEach(function (elem) {\n        elem.addEventListener('change', _this.checkIt);\n      });\n    }\n  }, {\n    key: \"isvalid\",\n    value: function isvalid(elem) {}\n  }, {\n    key: \"checkIt\",\n    value: function checkIt(event) {\n      var target = event.target;\n    }\n  }, {\n    key: \"showError\",\n    value: function showError(elem) {\n      elem.classList.remove('success');\n      elem.classList.add('error');\n      var errorDiv = document.createElement('div');\n      errorDiv.textContent = 'В этом поле ошибка';\n      errorDiv.classList.add('validator-error');\n      elem.insertAdjacentElement('afterend', errorDiv);\n    }\n  }, {\n    key: \"showSuccess\",\n    value: function showSuccess(elem) {\n      elem.classList.remove('error');\n      elem.classList.add('success');\n\n      if (elem.nextElementSibling.classList.contains('validator-error')) {\n        elem.nextElementSibling.remove();\n      }\n    }\n  }, {\n    key: \"applyStyle\",\n    value: function applyStyle() {\n      var style = document.createElement('style');\n      style.textContent = \"\\n            input.success {\\n                border: 2px solid green;\\n            }\\n            iput.error {\\n                border: 2px solid red;\\n            }\\n            validator-error {\\n                font-size: 14px;\\n                color: red;\\n            }\\n        \";\n      document.head.appendChild(style);\n    }\n  }]);\n\n  return Validator;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validator);\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/validator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9112c39856c27a7244f0")
/******/ })();
/******/ 
/******/ }
);