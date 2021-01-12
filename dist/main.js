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

/***/ "./src/eventHandlers.js":
/*!******************************!*\
  !*** ./src/eventHandlers.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n\n\nfunction initEventHandlers() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('addButtonCreated', addButtonEvents);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('projectFormCreated', projectFormEvents)\n}\n\nfunction addButtonEvents(){\n  const addBtn = document.getElementById('add');\n  addBtn.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('addNewProject');\n  });\n}\n\nfunction projectFormEvents(object) {\n  object.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('checkInputs');\n  })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initEventHandlers);\n\n//# sourceURL=webpack://todo/./src/eventHandlers.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n/* harmony import */ var _eventHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventHandlers */ \"./src/eventHandlers.js\");\n/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectHandler */ \"./src/projectHandler.js\");\n/* harmony import */ var _projectFormController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectFormController */ \"./src/projectFormController.js\");\n/* harmony import */ var _projectDisplayController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectDisplayController */ \"./src/projectDisplayController.js\");\n\n\n\n\n\n\n(0,_eventHandlers__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_projectHandler__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_projectFormController__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_projectDisplayController__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n_eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('addButtonCreated');\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projectDisplayController.js":
/*!*****************************************!*\
  !*** ./src/projectDisplayController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n/* harmony import */ var _projectFormController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFormController */ \"./src/projectFormController.js\");\n\n\n\n\nfunction initProjectDisplay() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('createProject', drawProject)\n}\n\nfunction drawProject(object) {\n  console.log(_projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProjectDisplay);\n\n//# sourceURL=webpack://todo/./src/projectDisplayController.js?");

/***/ }),

/***/ "./src/projectFormController.js":
/*!**************************************!*\
  !*** ./src/projectFormController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domCache\": () => /* binding */ domCache,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n\n\n\nfunction initProjectFormController() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('addNewProject', createProjectInputs);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('checkInputs', getFormInfo);\n}\n\nconst domCache = {\n  main: document.getElementById('main'),\n  projectsWindow: document.getElementById('projects-window'),\n  addBtn: document.getElementById('add'),\n}\n\nfunction cacheElements(els) {\n  els.forEach(id => {\n    if (id.includes('-')) {\n      let key = id.split('-');\n      let word = key[1].charAt(0).toUpperCase() + key[1].slice(1);\n      key.splice(1, 1, word);\n      domCache[`${key.join('')}`] = document.getElementById(id);\n    } else {\n      domCache[`${id}`] = document.getElementById(id);\n    }\n  });\n}\n\nfunction createElement(type, target, id, attributes, content) {\n  const el = document.createElement(type);\n  target.appendChild(el);\n  el.setAttribute('id', id);\n\n  if (attributes !== undefined) {\n    for (let key in attributes) {\n      el.setAttribute(key, attributes[key]);\n    }\n  }\n\n  if(content !== undefined) {\n    el.textContent = content;\n  }\n}\n\nfunction createSelect(target, id, options) {\n  const el = document.createElement('select');\n  target.appendChild(el);\n  el.setAttribute('id', id);\n  options.forEach(item => {\n    const option = document.createElement('option');\n    option.setAttribute('value', item);\n    option.textContent = item;\n    el.appendChild(option);\n  });\n}\n\nfunction createProjectInputs() {\n  domCache.main.removeChild(domCache.addBtn);\n  createElement('form', domCache.projectsWindow, 'create-project');\n\n  cacheElements(['create-project']);\n\n  createElement('label', domCache.createProject, 'title-label', {'for': 'title'}, 'title');\n  createElement('input', domCache.createProject, 'title', {'type': 'text', 'placeholder': 'project title'});\n\n  createElement('label', domCache.createProject, 'description-label', {'for': 'description'}, 'description');\n  createElement('input', domCache.createProject, 'description', {'type': 'text', 'placeholder': 'project description'});\n\n  createElement('label', domCache.createProject, 'due-date-label', {'for': 'due-date'}, 'due date');\n  createElement('input', domCache.createProject, 'due-date', {'type': 'date', 'placeholder': 'project due date'});\n\n  createElement('label', domCache.createProject, 'priority-label', {'for': 'priority'}, 'priority');\n  createSelect(domCache.createProject, 'priority', [1, 2, 3, 4, 5]);\n\n  createElement('label', domCache.createProject, 'notes-label', {'for': 'notes'}, 'notes');\n  createElement('input', domCache.createProject, 'notes', {'type': 'text', 'placeholder': 'notes'});\n\n  createElement('input', domCache.createProject, 'create-btn', {'type': 'button'}, 'create');\n  \n  cacheElements(['title', 'description', 'due-date', 'priority', 'notes', 'create-btn']);\n\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('projectFormCreated', domCache.createBtn);\n}\n\n\n\nfunction getFormInfo() {\n  let data = [];\n  let keys = ['title', 'description', 'dueDate', 'priority', 'notes'];\n  for (let i = 0; i < keys.length; i++){\n      if (domCache[`${keys[i]}`].value !== '') {\n        data.push(domCache[`${keys[i]}`].value);\n      } else {\n        domCache[`${keys[i]}`].classList.add('empty');\n        return\n      }\n  }\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('createProject', data);\n  console.log('emit project');\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProjectFormController);\n\n//# sourceURL=webpack://todo/./src/projectFormController.js?");

/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => /* binding */ createNewProject,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n\n\nfunction initProjectHandler() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('createProject', createNewProject);\n  getExistingProjects();\n}\n\nlet projects = [];\n\nfunction getExistingProjects() {\n  if (projects[0] !== undefined) {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('createProject', projects);\n  }\n}\n\nclass Project {\n  constructor(title, description, dueDate, priority, notes) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n  }\n}\n\nconst createNewProject = (data) => {\n  let newProject = new Project(data[0], data[1], data[2], data[3], data[4]);\n  projects.push(newProject);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('newProject', newProject);\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProjectHandler);\n\n//# sourceURL=webpack://todo/./src/projectHandler.js?");

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