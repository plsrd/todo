/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/eventsBus.js":
/*!**************************!*\
  !*** ./src/eventsBus.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst events = {\n  events: {},\n  on: function (eventName, fn) {\n    this.events[eventName] = this.events[eventName] || [];\n    this.events[eventName].push(fn);\n  },\n  off: function(eventName, fn) {\n    if (this.events[eventName]) {\n      for (var i = 0; i < this.events[eventName].length; i++) {\n        if (this.events[eventName][i] === fn) {\n          this.events[eventName].splice(i, 1);\n          break;\n        }\n      };\n    }\n  },\n  emit: function (eventName, data) {\n    if (this.events[eventName]) {\n      this.events[eventName].forEach(fn => {\n        fn(data);      \n      });\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);\n\n//# sourceURL=webpack://todo/./src/eventsBus.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectHandler */ \"./src/projectHandler.js\");\n\n\n\n(0,_projectHandler__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n(function eventHandlers() {\n  const addBtn = document.getElementById('add');\nconsole.log(addBtn)\n  addBtn.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('addBook', [1,2,3,4,['a', 'b']]);\n    console.log('emitting')\n  });\n})();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n\n\nfunction initProjectHandler() {\n  (() => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('addBook', createNewProject)\n  })();\n}\n\nlet projects = [];\n\n  class Project {\n    constructor(title, description, dueDate, priority, notes, tasks) {\n      this.title = title;\n      this.description = description;\n      this.dueDate = dueDate;\n      this.priority = priority;\n      this.notes = notes;\n      this.tasks = tasks;\n    }\n  }\n\n  const createNewProject = (data) => {\n    console.log('creatingBook')\n    let newProject = new Project(data[0], data[1], data[2], data[3], data[4], data[5]);\n    projects.push(newProject);\n    console.log(newProject);\n  }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProjectHandler);\n\n//# sourceURL=webpack://todo/./src/projectHandler.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;