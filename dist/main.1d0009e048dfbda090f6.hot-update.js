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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/changePhoto */ \"./src/modules/changePhoto.js\");\n/* harmony import */ var _modules_checkInputsAll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/checkInputsAll */ \"./src/modules/checkInputsAll.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n/* harmony import */ var _modules_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/validator */ \"./src/modules/validator.js\");\n\n\n\n\n\n\n\n\n\n\n\n\nvar valid = new _modules_validator__WEBPACK_IMPORTED_MODULE_9__[\"default\"]({\n  selector: 'form',\n  pattern: {\n    phone: /^\\+380\\d{7}$/,\n    zip: /\\d{5,6}/\n  },\n  method: {\n    'phone': [['notEmpty'], ['pattern', 'phone']],\n    'email': [['notEmpty'], ['pattern', 'email']]\n  }\n});\nvalid.init(); // Timer\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('10 september 2021'); // Меню\n\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // popup\n\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // tabs\n\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // slider\n\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(); // our team\n\n(0,_modules_changePhoto__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // checking all inputs\n\n(0,_modules_checkInputsAll__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(); // calc\n\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100); // send ajax form\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://lesson17-timer/./src/index.js?");

/***/ }),

/***/ "./src/modules/validator.js":
/*!**********************************!*\
  !*** ./src/modules/validator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Validator = /*#__PURE__*/function () {\n  function Validator(_ref) {\n    var selector = _ref.selector,\n        _ref$pattern = _ref.pattern,\n        pattern = _ref$pattern === void 0 ? {} : _ref$pattern,\n        method = _ref.method;\n\n    _classCallCheck(this, Validator);\n\n    this.form = document.querySelector(selector);\n    this.pattern = pattern;\n    this.method = method;\n    this.elementsForm = _toConsumableArray(this.form.elements).filter(function (item) {\n      return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';\n    });\n    this.error = new Set();\n  }\n\n  _createClass(Validator, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.applyStyle();\n      this.setPattern();\n      this.elementsForm.forEach(function (elem) {\n        elem.addEventListener('change', _this.checkIt.bind(_this));\n      });\n      this.form.addEventListener('submit', function (e) {\n        if (_this.error.size) {\n          e.preventDefault();\n        }\n      });\n    }\n  }, {\n    key: \"isValid\",\n    value: function isValid(elem) {\n      var _this2 = this;\n\n      var validatorMethod = {\n        notEmpty: function notEmpty(elem) {\n          if (elem.value.trim() === '') {\n            return false;\n          }\n\n          return true;\n        },\n        pattern: function pattern(elem, _pattern) {\n          return _pattern.test(elem.value);\n        }\n      };\n\n      if (this.method) {\n        var method = this.method[elem.id];\n\n        if (method) {\n          return method.every(function (item) {\n            return validatorMethod[item[0](elem, _this2.pattern[item[1]])];\n          });\n        }\n      } else {\n        console.warn('Необходимо передать id полей ввода и методы проверки этих полей');\n      }\n\n      return true;\n    }\n  }, {\n    key: \"checkIt\",\n    value: function checkIt(event) {\n      var target = event.target;\n\n      if (this.isValid(target)) {\n        this.showSuccess(target);\n        this.error[\"delete\"](target);\n      } else {\n        this.showError(target);\n        this.error.add(target);\n      }\n    }\n  }, {\n    key: \"showError\",\n    value: function showError(elem) {\n      elem.classList.remove('success');\n      elem.classList.add('error');\n      /* if (elem.parentNode.nextElementSibling.childNodes[1].classList.contains('validator-error')) {\r\n          return;\r\n      } */\n      // elem.style.border = '2px solid red';\n\n      var errorDiv = document.createElement('div');\n      errorDiv.textContent = 'В этом поле ошибка';\n      errorDiv.classList.add('validator-error');\n      elem.insertAdjacentElement('afterend', errorDiv);\n    }\n  }, {\n    key: \"showSuccess\",\n    value: function showSuccess(elem) {\n      // console.log(elem.parentNode.previousElementSibling.childNodes[1]);\n      elem.classList.remove('error');\n      elem.classList.add('success'); // elem.style.border = '2px solid green';\n\n      /* if (elem.parentNode.nextElementSibling.childNodes[1].classList.contains('validator-error')) {\r\n          elem.nextElementSibling.remove();\r\n      } */\n    }\n  }, {\n    key: \"applyStyle\",\n    value: function applyStyle() {\n      var style = document.createElement('style');\n      style.textContent = \"\\n            input.success {\\n                border: 2px solid green;\\n            }\\n            iput.error {\\n                border: 2px solid red;\\n            }\\n            .validator-error {\\n                font-size: 12px;\\n                font-family: sans-serif;\\n                color: red;\\n            }\\n        \";\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"setPattern\",\n    value: function setPattern() {\n      if (!this.pattern.phone) {\n        this.pattern.phone = /^\\+?[78]([-()]*\\d){10}$/;\n      }\n\n      if (!this.pattern.email) {\n        this.pattern.email = /^w+@\\w+\\.\\w{2,}$/;\n      }\n    }\n  }]);\n\n  return Validator;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Validator);\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/validator.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b5ccdb4af5c5d3e3c599")
/******/ })();
/******/ 
/******/ }
);