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

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import checkInputsAll from './checkInputsAll';\nvar sendForm = function sendForm() {\n  var errorMessage = 'Что-то пошло не так(',\n      loadMessage = 'Загрузка...',\n      successMessage = 'Спасибо! Мы скоро с вами свяжемся!',\n      nameErrorMessage = 'Имя должно содержать больше одной буквы!',\n      popup = document.querySelector('.popup');\n  var forms = document.querySelectorAll('form');\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = \"font-size: 2rem;\\n                                    color: #19b5fe\";\n  forms.forEach(function (item) {\n    var input = item.querySelector('input');\n    item.addEventListener('submit', function (event) {\n      if (input.value.length < 2) {\n        event.preventDefault();\n        item.appendChild(statusMessage);\n        statusMessage.textContent = nameErrorMessage;\n      } else {\n        event.preventDefault();\n        item.appendChild(statusMessage);\n        statusMessage.textContent = loadMessage;\n        var formData = new FormData(item);\n        var body = {};\n        postData(formData).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error('status network not 200!');\n          }\n\n          statusMessage.textContent = successMessage;\n          setTimeout(function () {\n            statusMessage.textContent = '';\n          }, 3000);\n          setTimeout(function () {\n            popup.style.display = 'none';\n          }, 1500);\n        })[\"catch\"](function (error) {\n          statusMessage.textContent = errorMessage;\n          console.error(error);\n          setTimeout(function () {\n            statusMessage.textContent = '';\n          }, 3000);\n          setTimeout(function () {\n            popup.style.display = 'none';\n          }, 1500);\n        });\n        console.log(formData);\n        var inputs = item.querySelectorAll('input');\n        inputs.forEach(function (i) {\n          i.value = '';\n        });\n      }\n    });\n\n    var postData = function postData(formData) {\n      return fetch('./server.php', {\n        method: 'POST',\n        headers: {\n          'Content-type': 'application/json'\n        },\n        body: formData,\n        credentials: 'include'\n      });\n    };\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b82c0251ec2347af0a86")
/******/ })();
/******/ 
/******/ }
);