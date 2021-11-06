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

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadLine) {\n  var timerDays = document.querySelector('#timer-days'),\n      timerHours = document.querySelector('#timer-hours'),\n      timerMinutes = document.querySelector('#timer-minutes'),\n      timerSeconds = document.querySelector('#timer-seconds');\n\n  function getTimeRemaining() {\n    var dateStop = new Date(deadLine).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dateStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60 % 24),\n        days = Math.floor(timeRemaining / 60 / 60 / 24);\n    return {\n      timeRemaining: timeRemaining,\n      days: days,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function setClock() {\n    var timer = getTimeRemaining();\n    timerDays.textContent = timer.days;\n\n    if (timer.hours < 10) {\n      timerHours.textContent = '0' + timer.hours;\n    } else {\n      timerHours.textContent = timer.hours;\n    }\n\n    if (timer.minutes < 10) {\n      timerMinutes.textContent = '0' + timer.minutes;\n    } else {\n      timerMinutes.textContent = timer.minutes;\n    }\n\n    if (timer.seconds < 10) {\n      timerSeconds.textContent = '0' + timer.seconds;\n    } else {\n      timerSeconds.textContent = timer.seconds;\n    }\n  }\n\n  setClock();\n  var updateClock = setInterval(setClock, 1000);\n\n  function checkDate(time) {\n    if (time.timeRemaining < 0) {\n      clearInterval(updateClock);\n      timerDays.textContent = '0 дн.';\n      timerHours.textContent = '00';\n      timerMinutes.textContent = '00';\n      timerSeconds.textContent = '00';\n    }\n  }\n\n  checkDate(getTimeRemaining());\n}\n\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/countTimer.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1295f446004b1c2c0c7a")
/******/ })();
/******/ 
/******/ }
);