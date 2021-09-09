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

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var btnMenu = document.querySelector('.menu');\n  var menu = document.querySelector('menu');\n  var closeBtn = document.querySelector('.close-btn');\n  var menuItems = document.querySelectorAll('ul>li');\n  var screenWidth = window.innerWidth;\n\n  var handlerMenu = function handlerMenu() {\n    menu.style.transform = \"translate(-100%)\";\n  };\n\n  function handlerMenuJS(_ref) {\n    var timing = _ref.timing,\n        draw = _ref.draw,\n        duration = _ref.duration,\n        flag = _ref.flag;\n\n    if (flag) {\n      var start = performance.now();\n      requestAnimationFrame(function animate(time) {\n        var timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n        var progress = timing(timeFraction);\n        draw(progress);\n\n        if (timeFraction < 1) {\n          requestAnimationFrame(animate);\n        }\n      });\n    }\n  }\n\n  var animate = {\n    flag: true,\n    duration: 1000,\n    timing: function timing(timeFraction) {\n      return timeFraction;\n    },\n    draw: function draw(progress) {\n      menu.style.transform = \"translate(\".concat(progress * 100, \"%)\");\n    }\n  };\n  document.addEventListener('click', function (event) {\n    var targetBtnMenu = event.target;\n    var targetMenu = event.target;\n    var targetCloseBtn = event.target;\n    var targetUlList = event.target;\n    targetBtnMenu = targetBtnMenu.closest('.menu');\n    targetMenu = targetMenu.closest('menu');\n    targetCloseBtn = targetCloseBtn.classList.contains('close-btn');\n    targetUlList = targetUlList.closest('a');\n\n    if (screenWidth >= 768 && targetBtnMenu) {\n      handlerMenuJS(animate);\n      animate.flag = false;\n    } else if (targetCloseBtn || targetUlList) {\n      animate.flag = true;\n      handlerMenu();\n    } else if (targetMenu) {\n      return;\n    } else {\n      animate.flag = true;\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("91d1eb62d0349de65a0f")
/******/ })();
/******/ 
/******/ }
);