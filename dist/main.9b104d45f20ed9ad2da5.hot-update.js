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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector('menu'); // тег меню, в нем закрытие и список\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('a')) {\n      menu.style.transform = \"translate(-100%)\";\n    }\n    /* if (target.closest('')) {\r\n        menu.style.transform = `translate(-100%)`;\r\n    } */\n\n\n    if (target.closest('.menu')) {\n      if (!menu.style.transform || menu.style.transform === \"translate(-100%)\") {\n        menu.style.transform = \"translate(0)\";\n        menu.classList.toggle('active-menu');\n      } else {\n        menu.style.transform = \"translate(-100%)\";\n      }\n    }\n\n    if (!target) {\n      menu.style.display = 'none';\n    }\n  });\n  /* const btnMenu = document.querySelector('.menu');\r\n  const menu = document.querySelector('menu');\r\n  const closeBtn = document.querySelector('.close-btn');\r\n  const menuItems = document.querySelectorAll('ul>li');\r\n  const screenWidth = window.innerWidth;\r\n        const handlerMenu = () => {\r\n      menu.style.transform = `translate(-100%)`;\r\n  };\r\n    function handlerMenuJS({\r\n      timing,\r\n      draw,\r\n      duration,\r\n      flag\r\n  }) {\r\n      if (flag) {\r\n          const start = performance.now();\r\n            requestAnimationFrame(function animate(time) {\r\n              let timeFraction = (time - start) / duration;\r\n              if (timeFraction > 1) timeFraction = 1;\r\n                const progress = timing(timeFraction);\r\n                draw(progress);\r\n                if (timeFraction < 1) {\r\n                  requestAnimationFrame(animate);\r\n              }\r\n          });\r\n      }\r\n  }\r\n    const animate = {\r\n      flag: true,\r\n      duration: 1000,\r\n      timing(timeFraction) {\r\n          return timeFraction;\r\n      },\r\n      draw(progress) {\r\n          menu.style.transform = `translate(${progress * 100}%)`;\r\n      }\r\n  };\r\n    document.addEventListener('click', event => {\r\n      let targetBtnMenu = event.target;\r\n      let targetMenu = event.target;\r\n      let targetCloseBtn = event.target;\r\n      let targetUlList = event.target;\r\n      targetBtnMenu = targetBtnMenu.closest('.menu');\r\n      targetMenu = targetMenu.closest('menu');\r\n      targetCloseBtn = targetCloseBtn.classList.contains('close-btn');\r\n      targetUlList = targetUlList.closest('a');\r\n      if ((screenWidth >= 768) && (targetBtnMenu)) {\r\n          handlerMenuJS(animate);\r\n          animate.flag = false;\r\n      } else if (targetCloseBtn || targetUlList) {\r\n          animate.flag = true;\r\n          handlerMenu();\r\n      } else if (targetMenu) {\r\n          return;\r\n      } else {\r\n          animate.flag = true;\r\n          handlerMenu();\r\n      }\r\n  }); */\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://lesson17-timer/./src/modules/toggleMenu.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("806f5a1a17ba180ba4d5")
/******/ })();
/******/ 
/******/ }
);