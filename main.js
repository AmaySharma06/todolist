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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    --bg-color1: #fefcfe;\n    --bg-color2: #dddddd;\n    --bg-color3: #f2f3f5;\n    --bgColorPopUp: #f3f1f3;\n    --text-color: #374958;\n    --accent-color: #2a59bd;\n    --accent-color-light: #eef4ff;\n}\n\nul {\n    list-style-type: none;\n}\n\nbody {\n    font-size: 16px;\n    min-height: 100vh;\n    background-color: var(--bg-color2);\n    color: var(--text-color);\n}\n\nheader {\n    background-color: var(--bg-color3);\n    color: var(--accent-color);\n    height: 10vh;\n    display: flex;\n    width: 100%;\n    align-items: center; \n    justify-content: left;\n    border-bottom: 2px solid var(--accent-color);\n}\n\nnav {\n    width: 20%;\n    font-size: 1.8rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    \n    h2 {\n        align-items: center;\n        gap: 4px;\n        display: flex;\n    }\n\n    h2 span {\n        color: var(--text-color);\n    }\n\n    h2 img{\n        height: 3rem;\n    }\n}\n\n#body-container {\n    display: flex;\n    min-height: 90vh;\n}\n\naside {\n    flex: 1;\n    /* border-right: solid 2px var(--accent-color); */\n    background-color: var(--bg-color3);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\naside > div {\n    height: 70%;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n#project-title {\n    font-size: 2rem;\n    color: var(--text-color);\n    width: 80%;\n    border-bottom: 2px solid grey;\n    text-align: center;\n    margin-top: 1rem;\n    margin-bottom: 3rem;\n}\n\n#projects-container {\n    background-color: var(--bg-color1);\n    border-radius: 20px;\n    padding: 1.5rem;\n    width: 80%;\n    align-items: center;\n    min-height: 100%;\n\n}\n\n#new-project-button {\n    width: 100%;\n    font-size: 1.2rem;\n    height: 2rem;\n}\n\n.add-btn {\n    color: var(--accent-color);\n    background-color: var(--bg-color1);\n    border: none;\n    border-radius: 10px;\n}\n\n.add-btn:hover {\n    cursor: pointer;\n    background-color: var(--accent-color-light);\n}\n\n#project-list {\n    width: 100%;\n    margin-top: 1rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#project-list li {\n    width: 100%;\n    height: 2rem;\n    font-size: 1.2rem;\n    margin: 0.4rem;\n    display: flex;\n    overflow: hidden;\n    border-radius: 5px;\n}\n\n#project-list li:hover {\n    outline: 2px solid var(--bg-color2);\n}\n\n#project-list button {\n    background-color: rgb(255, 101, 101);\n    border: none;\n    outline: none;\n    color: white;\n    width: 15%;\n}\n\n#project-list input {\n    height: 100%;\n    width: 85%;\n    border: none;\n    color: var(--text-color);\n    font-size: 1rem;\n    background-color: var(--bg-color3);\n    padding: 1ch;\n}\n\n#project-list input:focus {\n    outline: none;\n    border: none;\n    border-bottom: 2px solid var(--accent-color);\n    background-color: var(--accent-color-light);\n}\n\nmain {\n    flex: 4;\n    display: flex;\n    justify-content: center;\n}\n\n.todolist-container {\n    margin-top: 1rem;\n    padding: 1rem 0;\n    height: 95%;\n    background-color: var(--bg-color1);\n    border-radius: 20px;\n    width: 50%;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n.todolist-heading {\n    display: flex;\n    padding: 0 2ch;\n    border-bottom: 2px solid var(--text-color);\n    text-align: center;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n}\n\n#new-todo-button {\n    font-size: 1.25rem;\n    height: 2rem;\n    display: flex;\n    justify-content: space-between;\n    outline: 2px solid var(--accent-color);\n    border-radius: 20px;\n    width: 90%;\n    padding: 0.75rem;\n    align-items: center;\n    margin-top: 1rem;\n}\n\n.todolist-list {\n    width: 90%;\n}\n\n.todolist-list li {\n    display: flex;\n    flex-direction: column;\n    margin-top: 1rem;\n    outline: 1px solid grey;\n    border-radius: 5px;\n    padding: 1ch;\n}\n\n.todolist-list input:focus {\n    border-bottom: 1px solid var(--bg-color2) !important;\n    outline: none;\n}\n\n.todolist-list > li > div {\n    display: flex;\n    width: 100%;\n\n    div {\n        flex: 1;\n        display: flex;\n    }\n}\n\n.todolist-list > li > div > div {\n    flex: 1;\n    display: flex;\n\n    button {\n        background-color: var(--accent-color);\n        color: white;\n        border: 1px solid white;\n        border-radius: 20px;\n        width: 5ch;\n        height: 5ch;\n        font-size: 0.75rem;\n    }\n\n    border: none;\n}\n\n.todolist-list > li > div > input:not([type=\"date\"]) {\n    width: 100%;\n    border: none;\n    border-bottom: 1px solid transparent;\n    outline: none;\n    transition: border-bottom 0.2s;\n}\n\n\n.todolist-list > li > div > div> input[type=\"date\"] {\n    order: -1;\n    margin-right: 1ch;\n    width: 16ch;\n}\n\ntextarea {\n    border: none;\n    border-radius: 5px;\n    font-size: 0.75rem;\n    color: grey;\n    resize: none;\n    padding: 1ch;\n    margin-top: 0.5rem;\n}\n\ntextarea:focus {\n    outline: none;\n    background-color: var(--bg-color3);\n}\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes.js":
/*!************************!*\
  !*** ./src/classes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    title = \"\";\n    desc = \"\";\n    dueDate = \"\";\n\n    constructor (title, desc, dueDate) {\n        this.title = title;\n        this.desc = desc;\n        this.dueDate = dueDate;\n    }\n\n    set data(obj) {\n        this.title = obj.title;\n        this.desc = obj.desc;\n        this.dueDate = obj.dueDate;\n    }\n\n    get data() {\n        return {title: this.title, desc: this.desc, dueDate: this.dueDate};\n    }\n}\n\nclass Project {\n    #todoList;\n\n    constructor (name) {\n        this.name = name;\n        this.#todoList = [];\n    }\n\n    get todoList() {\n        return this.#todoList;\n    }\n\n    get data() {\n        return {name: this.name, todoList: this.#todoList.map((obj) => obj.data)};\n    }\n\n    set data(obj) {\n        this.name = obj.name;\n        this.#todoList = obj.todoList;\n    }\n\n    addTodo(todo) {\n        this.#todoList.unshift(todo);\n    }\n\n    getTodo(index) {\n        return this.#todoList[index];\n    }\n\n    updateTodo(index, todo) {\n        this.#todoList[index] = todo;\n    }\n\n    deleteTodo(index) {\n        this.#todoList.splice(index, 1);\n    }\n\n    #push(index, offset) {\n        if ((index == 0 && offset < 0) || (index == this.#todoList.length-1 && offset > 0)) return;\n\n        let temp = this.#todoList[index];\n        this.#todoList[index] = this.#todoList[index+offset];\n        this.#todoList[index+offset] = temp;\n    }\n\n    pushUp(index) {\n        this.#push(index, -1);\n    }\n\n    pushDown(index) {\n        this.#push(index, 1);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/classes.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ProjectList: () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./src/classes.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\nclass Base {\n\n    constructor (objectListObject, object) {\n        this.objectList = [];\n        this.objectListObject = objectListObject;\n        this.object = object;\n    }\n\n    createObjectListElement(object) {\n        const objectListElement = this.createBaseObjectListElement(object);\n        \n        const name = objectListElement.querySelector(\"input\");\n        name.addEventListener(\"blur\", (event) => this.renameObject(event));\n        name.addEventListener(\"keydown\", (event) => {\n            if (event.key === \"Enter\") {\n                this.renameObject(event);\n                name.blur();\n            }\n        });\n\n\n        return objectListElement;\n    }\n\n    showObject(object) {\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) {\n            this.objectList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)();\n        }\n        const objectListElement = this.createObjectListElement(object);\n        this.objectListObject.appendChild(objectListElement);\n        \n        return objectListElement;\n    }\n\n    updateObjectDisplay() {\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) {\n            this.objectList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)();\n        }\n        this.objectListObject.innerHTML = \"\";\n        for (let i=0;i<this.objectList.length;i++) {\n            const element = this.showObject(this.objectList[i]);\n            element.setAttribute(\"index\", i);\n        }\n    }\n\n    newObject() {\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) {\n            this.objectList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)();\n        }\n        this.objectList.push(new this.object(\"Untitled\"));\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(this.objectList);\n        else {\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(this.projectListReference);\n        }\n        this.updateObjectDisplay();\n    }\n\n    renameObject(event) {\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) {\n            this.objectList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)();\n        }\n        const li = event.currentTarget.closest(\"li\");\n        const index = Number(li.getAttribute(\"index\"));\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo) {\n            this.objectList[index].title = li.querySelector(\"input[type='text']\") ? li.querySelector(\"input[type='text']\").value : li.querySelector(\"input\").value;\n            this.objectList[index].desc = li.querySelector(\"textarea\").value;\n            this.objectList[index].dueDate = li.querySelector(\"input[type='date']\").value;\n        }\n        else {\n            this.objectList[index].name = event.currentTarget.value;\n        }\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(this.objectList);\n        else {\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(this.projectListReference);\n        }\n        this.updateObjectDisplay();\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) {\n            const li = event.currentTarget.closest(\"li\");\n            const customEvent = {\n                currentTarget: li\n            };\n            this.showTodos(customEvent);\n        }\n    }\n\n    removeObject(event) {\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) {\n            this.objectList = (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)();\n        }\n        const li = event.currentTarget.closest(\"li\");\n        const index = Number(li.getAttribute(\"index\"));\n        this.objectList.splice(index, 1);\n        if (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(this.objectList);\n        else {\n            (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(this.projectListReference);\n        }\n        this.updateObjectDisplay();\n    }\n}\n\nclass TodoList extends Base {\n\n    constructor (todoListObject, Todo, parentProject, projectListReference) {\n        super(todoListObject, Todo);\n        this.parentProject = parentProject;\n        this.objectList = parentProject.todoList;\n        this.projectListReference = projectListReference;\n    }\n\n    createBaseObjectListElement(object) {\n        const objectListElement = document.createElement(\"li\");\n        const name = document.createElement(\"input\");\n        name.value = object.title;\n\n        const desc = document.createElement(\"textarea\");\n        desc.value = object.desc;\n        desc.addEventListener(\"blur\", (event) => this.renameObject(event));\n\n        // Date input\n        const dateInput = document.createElement(\"input\");\n        dateInput.type = \"date\";\n        dateInput.value = object.dueDate || \"\";\n        dateInput.addEventListener(\"change\", (event) => this.renameObject(event));\n\n        const buttons = document.createElement(\"div\");\n\n        const upButton = document.createElement(\"button\");\n        upButton.innerHTML = '<i class=\"fa-solid fa-arrow-up\"></i>';\n        upButton.addEventListener(\"click\", (event) => {\n            const li = event.currentTarget.closest(\"li\");\n            const index = Number(li.getAttribute(\"index\"));\n            this.parentProject.pushUp(index);\n            this.updateObjectDisplay();\n\n        })\n\n        const downButton = document.createElement(\"button\");\n        downButton.innerHTML = '<i class=\"fa-solid fa-arrow-down\"></i>';\n        downButton.addEventListener(\"click\", (event) => {\n            const li = event.currentTarget.closest(\"li\");\n            const index = Number(li.getAttribute(\"index\"));\n            this.parentProject.pushDown(index);\n            this.updateObjectDisplay();\n        })\n\n        const delButton = document.createElement(\"button\");\n        delButton.innerHTML = '<i class=\"fas fa-check\"></i>';\n        delButton.addEventListener(\"click\", (event) => this.removeObject(event));\n    \n\n        buttons.appendChild(upButton);\n        buttons.appendChild(downButton);\n        buttons.appendChild(delButton);\n\n        const topContainer = document.createElement(\"div\");\n        topContainer.appendChild(name);\n        topContainer.appendChild(buttons);\n\n        objectListElement.appendChild(topContainer);\n        objectListElement.appendChild(desc);\n        buttons.appendChild(dateInput);\n\n        return objectListElement;\n    }\n\n    newObject() {\n        this.objectList = this.parentProject.todoList;\n        const newTodo = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(\"New Task\", \"\", \"\");\n        this.objectList.push(newTodo);\n        (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.updateStorage)(this.projectListReference);\n        this.updateObjectDisplay();\n    }\n}\n\n\nclass ProjectList extends Base {\n\n    constructor(projectListObject, todoListObject,todoListHeading, object) {\n        super(projectListObject, object);\n        this.todoListObject = todoListObject;\n        this.todoListHeading = todoListHeading;\n        this.currentProject = -1;\n    }\n\n    showTodos(event) {\n        this.objectList = (this.object == _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project) ? (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)() : (0,_storage_js__WEBPACK_IMPORTED_MODULE_1__.loadStorage)()[this.projectListReference.indexOf(this.parentProject)];\n        try {\n            document.querySelector(\"#new-todo-button\").remove();\n        }\n        catch {\n\n        }\n        try {\n            // If the project list is empty, would prevent bugging out\n            this.currentProject = Number(event.currentTarget.getAttribute(\"index\"));\n            const project = this.objectList[this.currentProject];\n            this.todoListHeading.innerText = project.name;\n            const todoList = new TodoList(this.todoListObject, _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo, project, this.objectList);\n\n            if (document.querySelector(\"#new-todo-button\") === null) {\n                const newTodoButton = document.createElement(\"button\");\n                newTodoButton.innerHTML = '<span class=\"material-symbols-outlined\">add_task</span> New Task'; \n                newTodoButton.id = \"new-todo-button\";\n                newTodoButton.classList.add(\"add-btn\");\n                document.querySelector(\".todolist-container\").insertBefore(newTodoButton, document.querySelector(\".todolist-list\"));\n                newTodoButton.addEventListener(\"click\", () => todoList.newObject());\n            }\n            \n            todoList.updateObjectDisplay();\n        }\n        catch {\n            document.querySelector(\".todolist-heading\").innerHTML = \"\";\n            document.querySelector(\".todolist-list\").innerHTML = \"\";\n        }\n    }\n\n    createBaseObjectListElement(object) {\n        const projectListElement = document.createElement(\"li\");\n        const name = document.createElement(\"input\");\n        name.value = object.name || \"\";\n        const delButton = document.createElement(\"button\");\n        delButton.innerHTML = '<i class=\"fas fa-trash\"></i>';\n        delButton.addEventListener(\"click\", (event) => {\n            try {\n                if (event.currentTarget.closest(\"li\").index == this.currentProject) this.currentProject--;\n                this.removeObject(event)\n            }\n            catch {\n                this.currentProject--;\n            }\n        }\n        );\n\n        projectListElement.appendChild(name);\n        projectListElement.appendChild(delButton);\n\n        projectListElement.addEventListener(\"click\", (event) => this.showTodos(event));\n\n        return projectListElement;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ \"./src/classes.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\nconst newProjectButton = document.querySelector(\"#new-project-button\");\nconst projectListObject = document.querySelector(\"#project-list\"); \nconst todoListObject = document.querySelector(\".todolist-list\");\nconst todoListHeading = document.querySelector(\".todolist-heading\");\n\nconst projectList = new _dom_js__WEBPACK_IMPORTED_MODULE_0__.ProjectList(projectListObject, todoListObject, todoListHeading, _classes_js__WEBPACK_IMPORTED_MODULE_1__.Project);\n\nnewProjectButton.addEventListener(\"click\", () => projectList.newObject());\nprojectList.updateObjectDisplay();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadStorage: () => (/* binding */ loadStorage),\n/* harmony export */   updateStorage: () => (/* binding */ updateStorage)\n/* harmony export */ });\n/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes.js */ \"./src/classes.js\");\n\n\nfunction updateStorage (obj) {\n    localStorage.setItem(\"data\", JSON.stringify(obj.map((o)=>o.data )));\n    // console.log(JSON.stringify(obj.map((o)=>o.data )));\n}\n\nfunction loadStorage () {\n    let data = localStorage.getItem(\"data\");\n    if (data == undefined) return [];\n    data = JSON.parse(data);\n\n    const returnData = [];\n\n    for (let project of data) {\n        const newProject = new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Project(project.name);\n        for (let todo of project.todoList) {\n            newProject.addTodo(new _classes_js__WEBPACK_IMPORTED_MODULE_0__.Todo(todo.title, todo.desc, todo.dueDate));\n        }\n\n        returnData.push(newProject);\n    }\n\n    console.log(returnData);\n\n    return returnData;\n}\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/storage.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/styles.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;