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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n\n\nfunction initEventHandlers() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('addButtonCreated', addButtonEvents);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('projectFormCreated', projectFormEvents);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('tagBtnCreated', tagBtnEvents);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('taskBtnCreated', taskBtnEvents);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('taskInputCreated', taskInputEvents);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('addTaskBtnCreated', addTaskBtnEvents);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('addTaskEvents', addTaskEvents);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('addTagEvents', addTagEvents);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('closeFormCreated', closeFormEvents);\n}\n\nfunction addButtonEvents(){\n  const addBtn = document.getElementById('add');\n  addBtn.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('addNewProject');\n    if (document.getElementById('task-form')) {\n      _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('closeForm', document.getElementById('task-form'));\n    }\n  });\n}\n\nfunction projectFormEvents(button) {\n  button.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('checkInputs');\n  });\n}\n\nfunction tagBtnEvents(button) {\n  button.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('createTag');\n  });\n}\n\nfunction taskBtnEvents(button) {\n  button.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('createTask');\n  });\n}\n\nfunction taskInputEvents(input){\n  input.addEventListener('keyup', (e) => {\n    if (e.keyCode === 13) {\n      e.preventDefault();\n      _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('createTask');\n    }\n  });\n}\n\nfunction addTaskBtnEvents(button){\n  button.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('createTaskForm', button);\n  });\n}\n\nfunction addTaskEvents(checkbox) {\n  checkbox.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('taskComplete', checkbox);\n  })\n}\n\nfunction addTagEvents() {\n  const tags = Array.from(document.getElementsByClassName('delete-tag'));\n  tags.forEach(tag => {\n    tag.addEventListener('click', () => {\n      _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('removeTag', tag);\n    });\n  });\n}\n\nfunction closeFormEvents(button) {\n  button.addEventListener('click', () => {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('closeForm', button.parentNode);\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initEventHandlers);\n\n//# sourceURL=webpack://todo/./src/eventHandlers.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n/* harmony import */ var _eventHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventHandlers */ \"./src/eventHandlers.js\");\n/* harmony import */ var _projectHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectHandler */ \"./src/projectHandler.js\");\n/* harmony import */ var _projectFormController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectFormController */ \"./src/projectFormController.js\");\n/* harmony import */ var _projectDisplayController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectDisplayController */ \"./src/projectDisplayController.js\");\n/* harmony import */ var _tagController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tagController */ \"./src/tagController.js\");\n/* harmony import */ var _taskController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskController */ \"./src/taskController.js\");\n\n\n\n\n\n\n\n\n(0,_eventHandlers__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_projectHandler__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_projectFormController__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_projectDisplayController__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_tagController__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_taskController__WEBPACK_IMPORTED_MODULE_6__.default)();\n\n_eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('addButtonCreated');\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/projectDisplayController.js":
/*!*****************************************!*\
  !*** ./src/projectDisplayController.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n/* harmony import */ var _projectFormController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFormController */ \"./src/projectFormController.js\");\n\n\n\n\nfunction initProjectDisplay() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('newProject', drawProject);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('drawTask', displayTasks);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('taskStatusChanged', updateTaskClass);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('removeTag', removeTag);\n}\n\nfunction drawProject(object) {\n  _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.addBtn.classList.remove('disabled');\n  _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.projectsWindow.removeChild(_projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.createProject);\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.projectsWindow, object.id, {'class': 'project'});\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.cacheElements)([object.id]);\n\n  const target = _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache[`${object.id}`];\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('h2', target, 'none', {'class': 'project-title'}, object.title);\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', target, 'none', {'class': 'project-due-date'}, object.dueDate);\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', target, 'none', {'class': `priority-${object.priority}`}, object.priority);\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', target, 'none', {'class': 'project-decription'}, object.description);\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', target, 'none', {'class': 'project-notes'}, object.notes);\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', target, `${object.id}tasks-container`, {'class': 'tasks-container', 'type': 'text', 'placeholder': 'task'});\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.cacheElements)([`${object.id}tasks-container`]);\n  const container = _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache[`${object.id}tasksContainer`];\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', container, `${object.id}task-header`, {}, 'Tasks')\n  ;(0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', container, `${object.id}add-task`, {'type': 'button', 'class': 'task-btn'}, '+');\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.cacheElements)([`${object.id}add-task`]);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('addTaskBtnCreated', _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache[`${object.id}addTask`]);\n  displayTags(object.tags, target);\n}\n\nfunction displayTasks(data) {\n  const task = data[0];\n  const parent = document.getElementById(data[1].id);\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', parent, `${task.id}-container`, {'class': 'project-task-container'});\n  const container = document.getElementById(`${task.id}-container`);\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('input', container, `${task.id}`, {'type': 'checkbox', 'class': 'task', 'name': data[1].tasks.indexOf(task)});\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('label', container, `${task.id}label`, {'for': data[1].tasks.indexOf(task)}, task.task);\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.cacheElements)([task.id, `${task.id}label`]);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('addTaskEvents', _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache[createId(task.id)]);\n}\n\nfunction displayTags(tags, target) {\n  tags.forEach(tag => {\n    (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', target, `tag-${tags.indexOf(tag)}`, {'class': tag.classNum});\n    const container = document.getElementById(`tag-${tags.indexOf(tag)}`);\n    (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', container, 'none', {}, tag.content);\n    (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', container, 'none', {'class':'delete-tag'}, 'X');\n  });\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('addTagEvents');\n}\n\nfunction createId(id) {\n  let key = id.split('-');\n  let word = key[1].charAt(0).toUpperCase() + key[1].slice(1);\n  key.splice(1, 1, word);\n  return key.join('');\n}\n\nfunction updateTaskClass(data) {\n  const element = _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache[createId(`${data[0]}label`)];\n  data[1] === true ? element.classList.add('complete') : element.classList.remove('complete');\n}\n\nfunction removeTag(tag) {\n  tag.parentNode.parentNode.removeChild(tag.parentNode);\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProjectDisplay);\n\n//# sourceURL=webpack://todo/./src/projectDisplayController.js?");

/***/ }),

/***/ "./src/projectFormController.js":
/*!**************************************!*\
  !*** ./src/projectFormController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"domCache\": () => /* binding */ domCache,\n/* harmony export */   \"cacheElements\": () => /* binding */ cacheElements,\n/* harmony export */   \"createElement\": () => /* binding */ createElement,\n/* harmony export */   \"createInputFields\": () => /* binding */ createInputFields,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n\n\n\nfunction initProjectFormController() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('addNewProject', createProjectForm);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('checkInputs', batchFormInfo);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('closeForm', deleteForm);\n}\n\nconst domCache = {\n  main: document.getElementById('main'),\n  projectsWindow: document.getElementById('projects-window'),\n  addBtn: document.getElementById('add'),\n}\n\nfunction cacheElements(els) {\n  els.forEach(id => {\n    if (id.includes('-')) {\n      let key = id.split('-');\n      let word = key[1].charAt(0).toUpperCase() + key[1].slice(1);\n      key.splice(1, 1, word);\n      domCache[`${key.join('')}`] = document.getElementById(id);\n    } else {\n      domCache[`${id}`] = document.getElementById(id);\n    }\n  });\n}\n\nfunction createElement(type, target, id, attributes, content) {\n  const el = document.createElement(type);\n\n  if (attributes.hasOwnProperty('prepend')) {\n    target.prepend(el)\n  } else {\n    target.appendChild(el);\n  }\n  if (id !== 'none') {\n    el.setAttribute('id', id)\n  }\n\n  if (attributes) {\n    for (let key in attributes) {\n      if (key !== 'prepend') {\n        el.setAttribute(key, attributes[key]);\n      }\n    }\n  }\n\n  if(content) {\n    el.textContent = content;\n  }\n}\n\nfunction createSelect(target, id, options) {\n  const el = document.createElement('select');\n  target.appendChild(el);\n  el.setAttribute('id', id);\n  options.forEach(item => {\n    const option = document.createElement('option');\n    option.setAttribute('value', item);\n    option.textContent = item;\n    el.appendChild(option);\n  });\n}\n\nfunction createInputFields(fields, target) {\n  fields.forEach(field => {\n    const fieldName = field.split('-').join(' ');\n    const type = (field.includes('date')) ? 'date' : 'text';\n    createElement('label', target, 'none', {'for': field}, fieldName);\n    createElement('input', target, field, {'type': type, 'placeholder': fieldName});\n    });\n}\n\nfunction createProjectForm() {\n  domCache.addBtn.classList.add('disabled');\n  createElement('form', domCache.projectsWindow, 'create-project', {'prepend': true});\n\n  cacheElements(['create-project']);\n\n  const target = domCache.createProject;\n  createElement('button', target, 'close-form', {'type': 'button'}, 'X');\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('closeFormCreated', document.getElementById('close-form'));\n  createInputFields(['title', 'description', 'due-date'], target);\n  createElement('label', target, 'priority-label', {'for': 'priority'}, 'priority');\n\n  createSelect(target, 'priority', [1, 2, 3, 4, 5]);\n\n  createInputFields(['notes'], target);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('createTagsContainer', target);\n\n  createElement('button', target, 'create-btn', {'type': 'button'}, 'create');\n  cacheElements(['title', 'description', 'due-date', 'priority', 'notes', 'create-btn']);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('projectFormCreated', domCache.createBtn);\n}\n\nfunction deleteForm(node) {\n  if (node.id.includes('project')) {\n    domCache.addBtn.classList.remove('disabled');\n  } else {\n    const buttons = Array.from(node.parentElement.getElementsByTagName('button'));\n    buttons.forEach(button => {\n      if (button.classList.contains('disabled')) {\n        button.classList.remove('disabled');\n      }\n    });\n  }\n  node.parentElement.removeChild(node);\n  delete domCache.taskForm;\n}\n\n\n\nfunction batchFormInfo() {\n  let data = [];\n  let keys = ['title', 'description', 'dueDate', 'priority'];\n  for (let i = 0; i < keys.length; i++){\n      if (domCache[`${keys[i]}`].value !== '') {\n        data.push(domCache[`${keys[i]}`].value);\n      } else {\n        domCache[`${keys[i]}`].classList.add('empty');\n        return\n      }\n  }\n  data.push(domCache.notes.value);\n  data.push(domCache.currentTags);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('createProject', data);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProjectFormController);\n\n//# sourceURL=webpack://todo/./src/projectFormController.js?");

/***/ }),

/***/ "./src/projectHandler.js":
/*!*******************************!*\
  !*** ./src/projectHandler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNewProject\": () => /* binding */ createNewProject,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n\n\nfunction initProjectHandler() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('createProject', createNewProject);\n  getExistingProjects();\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('taskComplete', updateTaskStatus);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('addNewTask', addNewTask);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('removeTag', removeTag);\n}\n\nlet projects = [];\n\nfunction getExistingProjects() {\n  if (projects[0] !== undefined) {\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('createProject', projects);\n  }\n}\n\nclass Project {\n  constructor(title, description, dueDate, priority, notes, tags) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.notes = notes;\n    this.id = `proj${document.getElementsByClassName('project').length}`;\n    this.tasks = [];\n    this.tags = tags;\n  }\n\n}\n\nconst createNewProject = (data) => {\n  let newProject = new Project(data[0], data[1], data[2], data[3], data[4], data[5]);\n  projects.push(newProject);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('newProject', newProject);\n  console.log(newProject);\n}\n\nfunction addNewTask(task){\n  const project = projects.find(project => project.id === task.parent);\n  task.identifier = `${project.id}-task${project.tasks.length}`;\n  project.tasks.push(task);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('drawTask', [task, project]);\n}\n\nfunction updateTaskStatus(taskId) {\n  const data = taskId.id.split('-');\n  const project = projects.find(project => project.id === data[0])\n  const task = project.tasks.find(task => task.id === taskId.id);\n  task.status = !task.status;\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('taskStatusChanged', [taskId.id, task.status]);\n}\n\nfunction removeTag(tag) {\n  const id = tag.parentNode.parentNode.id;\n  const project = projects.find(project => project.id === id);\n  const tagToDelete= tag.parentNode.firstChild.textContent;\n  project.tags.splice(project.tags.indexOf(project.tags.find(item => item.content === tagToDelete)), 1);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initProjectHandler);\n\n//# sourceURL=webpack://todo/./src/projectHandler.js?");

/***/ }),

/***/ "./src/tagController.js":
/*!******************************!*\
  !*** ./src/tagController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n/* harmony import */ var _projectFormController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFormController */ \"./src/projectFormController.js\");\n\n\n\nfunction initTagController() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('createTagsContainer', createTagsContainer);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('createTag', createTag)\n}\n\nfunction createTagsContainer(target) {\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', target, 'tags-container', {'class': 'tags-container'});\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.cacheElements)(['tags-container']);\n  const container = _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.tagsContainer;\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('label', container, 'tags-label', {'for': 'tag-input'}, 'tags');\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('input', container,'tag-input', {'type': 'text',} )\n  ;(0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', container, 'tag-btn', {'type': 'button'}, '+');\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.cacheElements)(['tag-input', 'tag-btn']);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('tagBtnCreated', _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.tagBtn);\n  _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.currentTags = [];\n}\n\nclass Tag {\n  constructor(content){\n    this.content = content;\n  }\n  set class(num) {\n    this.classNum = num;\n  }\n}\n\nfunction createTag() {\n  let newTag = new Tag(_projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.tagInput.value);\n  _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.currentTags.push(newTag);\n  displayTags(newTag, _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.tagsContainer);\n  _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.tagInput.value = '';\n}\n\nfunction displayTags(tag, target) {\n  tag.class = `tag-${Math.floor(Math.random() * 11)}`;\n  (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('p', target, 'none', {'class': tag.class, 'prepend': true}, tag.content);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTagController);\n\n//# sourceURL=webpack://todo/./src/tagController.js?");

/***/ }),

/***/ "./src/taskController.js":
/*!*******************************!*\
  !*** ./src/taskController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _eventsBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventsBus */ \"./src/eventsBus.js\");\n/* harmony import */ var _projectFormController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectFormController */ \"./src/projectFormController.js\");\n\n\n\nfunction initTaskController() {\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('createTaskForm', createTaskForm);\n  _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.on('createTask', createTask);\n}\n\nfunction createTaskForm(button) {\n  const parent = button.parentNode;\n  button.classList.add('disabled');\n\n  if(!_projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.taskForm) {\n    (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('div', parent, 'task-form', {'class': 'task-form'});\n    (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.cacheElements)(['task-form']);\n\n    const container = _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.taskForm;\n    (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', container, 'close-form', {'type': 'button'}, 'X');\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('closeFormCreated', document.getElementById('close-form'));\n    (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createInputFields)(['task', 'due-date'], container);\n    (0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.createElement)('button', container, 'add-task', {'type': 'button'}, 'add task')\n    ;(0,_projectFormController__WEBPACK_IMPORTED_MODULE_1__.cacheElements)(['task', 'add-task']);\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('taskBtnCreated', _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.addTask);\n  }\n\n}\n\nclass Task {\n  constructor(task, parent) {\n    this.task = task;\n    this.parent = parent;\n    this.complete = false;\n  }\n\n  set identifier(id) {\n    this.id = id;\n  }\n}\n\nfunction createTask() {\n  const value = _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.task.value;\n  if (value) {\n    if (_projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.task.classList.contains('empty')) { _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.task.classList.remove('empty') }\n    const parent = _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.task.parentElement.parentElement.parentElement.id;\n    const newTask = new Task(value, parent);\n    console.log(newTask);\n    _eventsBus__WEBPACK_IMPORTED_MODULE_0__.default.emit('addNewTask', new Task(value, parent));\n    _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.task.value = '';\n  } else {\n    _projectFormController__WEBPACK_IMPORTED_MODULE_1__.domCache.task.classList.add('empty');\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initTaskController);\n\n//# sourceURL=webpack://todo/./src/taskController.js?");

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