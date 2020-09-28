/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/_memory_crossing.scss":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/_memory_crossing.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css?family=Montserrat:800&display=swap);\"]);\n// Module\nexports.push([module.i, \"*, *:before, *:after {\\n  box-sizing: border-box; }\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline; }\\n\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block; }\\n\\nbody {\\n  line-height: 1; }\\n\\nol, ul {\\n  list-style: none; }\\n\\nblockquote, q {\\n  quotes: none; }\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: '';\\n  content: none; }\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0; }\\n\\n.social-links {\\n  display: flex;\\n  justify-content: space-between;\\n  font-size: 1.5em;\\n  font-family: 'Montserrat', sans-serif;\\n  align-items: center; }\\n\\n.social-links > div {\\n  padding: 8px; }\\n\\n.coder-links > a, .artist-links > a {\\n  color: #6EC7BB;\\n  padding: 8px; }\\n\\n.social-links > a, .artist-links > a {\\n  cursor: pointer; }\\n\\n.social-text {\\n  font-size: 0.9em;\\n  color: #555; }\\n\\nbody {\\n  background-color: #F4F4F4; }\\n\\n.memory-game {\\n  margin-top: 25px; }\\n\\n.board {\\n  display: flex;\\n  flex-wrap: wrap;\\n  width: 90%;\\n  max-width: 1100px;\\n  justify-content: center;\\n  margin: 0 auto; }\\n\\n.board-row {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center; }\\n\\n@keyframes scale {\\n  0% {\\n    transform: scale(1); }\\n  100% {\\n    transform: scale(1.15); } }\\n\\n.board-row > .tile-container {\\n  max-width: 110px; }\\n\\n.tile-container {\\n  position: relative;\\n  padding: 4px;\\n  max-width: 125px;\\n  flex: 1 0 12.5%;\\n  cursor: pointer; }\\n\\n.tile {\\n  height: 100%; }\\n\\n.scale {\\n  transform: scale(1.05); }\\n\\n.tile-img {\\n  border-radius: 10px;\\n  border: 2px solid #6EC8BC;\\n  transition: all 200ms ease-in-out; }\\n\\n.responsive-img {\\n  width: 100%;\\n  height: auto; }\\n\\n@keyframes shake {\\n  10%, 90% {\\n    transform: translate3d(-1px, 0, 0); }\\n  20%, 80% {\\n    transform: translate3d(2px, 0, 0); }\\n  30%, 50%, 70% {\\n    transform: translate3d(-4px, 0, 0); }\\n  40%, 60% {\\n    transform: translate3d(4px, 0, 0); } }\\n\\n.shake {\\n  animation: shake 500ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;\\n  transform: translate3d(0, 0, 0);\\n  backface-visibility: hidden;\\n  perspective: 1000px; }\\n\\n.header {\\n  position: relative;\\n  width: 90%;\\n  margin: 25px auto 25px;\\n  box-sizing: content-box;\\n  text-align: center;\\n  max-width: 924px; }\\n\\n.header-content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  position: absolute;\\n  top: 0;\\n  left: 9%;\\n  width: 84%;\\n  margin: 0 auto;\\n  height: 98%;\\n  color: #f8f8f8;\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-size: 2.5em; }\\n\\n.header-row {\\n  display: flex;\\n  width: 100%;\\n  justify-content: space-between;\\n  align-items: center; }\\n\\n.header-bg {\\n  max-width: 1100px;\\n  max-height: 190px; }\\n\\n.bell-bag {\\n  width: 50px;\\n  height: auto; }\\n\\n.title {\\n  padding-left: 1.5em; }\\n\\n.timer {\\n  min-width: 100px; }\\n\\n.score {\\n  display: flex;\\n  align-items: center;\\n  white-space: nowrap;\\n  overflow: hidden;\\n  text-overflow: ellipsis; }\\n\\n.streak {\\n  padding-left: 0.25em;\\n  padding-right: 0.25em; }\\n\\n.header-music {\\n  padding-right: 0.15em;\\n  min-width: 56px; }\\n\\n.header-music, .header-question {\\n  cursor: pointer; }\\n\\n.modal {\\n  height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  transition: all 500ms ease-in-out;\\n  opacity: 0;\\n  transform: scale(0); }\\n\\n.modal-container {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  width: 100%;\\n  opacity: 0;\\n  background-color: rgba(0, 0, 0, 0.25);\\n  transition: all 500ms ease-in-out; }\\n\\n.modal-container.open {\\n  opacity: 1;\\n  z-index: 9000; }\\n\\n.modal-container.open > .modal {\\n  opacity: 1;\\n  transform: scale(1); }\\n\\n.modal-bg {\\n  max-width: 900px; }\\n\\n.modal-content {\\n  position: relative;\\n  max-width: 700px;\\n  width: 75%;\\n  height: 450px;\\n  background-color: #FEFAE9;\\n  border-radius: 10px;\\n  color: #A69F8A;\\n  font-family: 'Montserrat', sans-serif; }\\n\\n.modal-content > h1 {\\n  text-align: center;\\n  margin: 1em;\\n  font-size: 2em; }\\n\\n.modal-content > p {\\n  line-height: 1.75em;\\n  width: 80%;\\n  margin: 1.5em auto; }\\n\\n.modal-close {\\n  position: absolute;\\n  right: 2px;\\n  padding: 16px;\\n  font-size: 1.25em;\\n  cursor: pointer; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/assets/css/_memory_crossing.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/css/_memory_crossing.scss":
/*!**********************************************!*\
  !*** ./src/assets/css/_memory_crossing.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./_memory_crossing.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/css/_memory_crossing.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/assets/css/_memory_crossing.scss?");

/***/ }),

/***/ "./src/assets/imgs/bgs/header2.png":
/*!*****************************************!*\
  !*** ./src/assets/imgs/bgs/header2.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d6032fcbe558e039848a93260c4f3894.png\");\n\n//# sourceURL=webpack:///./src/assets/imgs/bgs/header2.png?");

/***/ }),

/***/ "./src/assets/imgs/card-facedown.png":
/*!*******************************************!*\
  !*** ./src/assets/imgs/card-facedown.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/547a60d1e6b177d0465b3d2e5c603509.png\");\n\n//# sourceURL=webpack:///./src/assets/imgs/card-facedown.png?");

/***/ }),

/***/ "./src/assets/imgs/misc/bell-bag.png":
/*!*******************************************!*\
  !*** ./src/assets/imgs/misc/bell-bag.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/1c34a2a3134bab26deec32c195b60c6e.png\");\n\n//# sourceURL=webpack:///./src/assets/imgs/misc/bell-bag.png?");

/***/ }),

/***/ "./src/assets/imgs/villagers sync \\.(png|jpe?g|svg)$":
/*!************************************************************************!*\
  !*** ./src/assets/imgs/villagers sync nonrecursive \.(png|jpe?g|svg)$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Ace.jpg\": \"./src/assets/imgs/villagers/Ace.jpg\",\n\t\"./Admiral.jpg\": \"./src/assets/imgs/villagers/Admiral.jpg\",\n\t\"./Agent S.jpg\": \"./src/assets/imgs/villagers/Agent S.jpg\",\n\t\"./Agnes.jpg\": \"./src/assets/imgs/villagers/Agnes.jpg\",\n\t\"./Aisle.jpg\": \"./src/assets/imgs/villagers/Aisle.jpg\",\n\t\"./Al.jpg\": \"./src/assets/imgs/villagers/Al.jpg\",\n\t\"./Alfonso.jpg\": \"./src/assets/imgs/villagers/Alfonso.jpg\",\n\t\"./Alice.jpg\": \"./src/assets/imgs/villagers/Alice.jpg\",\n\t\"./Alli.jpg\": \"./src/assets/imgs/villagers/Alli.jpg\",\n\t\"./Amelia.jpg\": \"./src/assets/imgs/villagers/Amelia.jpg\",\n\t\"./Anabelle.jpg\": \"./src/assets/imgs/villagers/Anabelle.jpg\",\n\t\"./Analogue.jpg\": \"./src/assets/imgs/villagers/Analogue.jpg\",\n\t\"./Anchovy.jpg\": \"./src/assets/imgs/villagers/Anchovy.jpg\",\n\t\"./Angus.jpg\": \"./src/assets/imgs/villagers/Angus.jpg\",\n\t\"./Anicotti.jpg\": \"./src/assets/imgs/villagers/Anicotti.jpg\",\n\t\"./Ankha.jpg\": \"./src/assets/imgs/villagers/Ankha.jpg\",\n\t\"./Annalisa.jpg\": \"./src/assets/imgs/villagers/Annalisa.jpg\",\n\t\"./Annalise.jpg\": \"./src/assets/imgs/villagers/Annalise.jpg\",\n\t\"./Antonio.jpg\": \"./src/assets/imgs/villagers/Antonio.jpg\",\n\t\"./Apollo.jpg\": \"./src/assets/imgs/villagers/Apollo.jpg\",\n\t\"./Apple.jpg\": \"./src/assets/imgs/villagers/Apple.jpg\",\n\t\"./Astrid.jpg\": \"./src/assets/imgs/villagers/Astrid.jpg\",\n\t\"./Aurora.jpg\": \"./src/assets/imgs/villagers/Aurora.jpg\",\n\t\"./Ava.jpg\": \"./src/assets/imgs/villagers/Ava.jpg\",\n\t\"./Avery.jpg\": \"./src/assets/imgs/villagers/Avery.jpg\",\n\t\"./Axel.jpg\": \"./src/assets/imgs/villagers/Axel.jpg\",\n\t\"./Aziz.jpg\": \"./src/assets/imgs/villagers/Aziz.jpg\",\n\t\"./Baabara.jpg\": \"./src/assets/imgs/villagers/Baabara.jpg\",\n\t\"./Bam.jpg\": \"./src/assets/imgs/villagers/Bam.jpg\",\n\t\"./Bangle.jpg\": \"./src/assets/imgs/villagers/Bangle.jpg\",\n\t\"./Barold.jpg\": \"./src/assets/imgs/villagers/Barold.jpg\",\n\t\"./Bea.jpg\": \"./src/assets/imgs/villagers/Bea.jpg\",\n\t\"./Beardo.jpg\": \"./src/assets/imgs/villagers/Beardo.jpg\",\n\t\"./Beau.jpg\": \"./src/assets/imgs/villagers/Beau.jpg\",\n\t\"./Becky.jpg\": \"./src/assets/imgs/villagers/Becky.jpg\",\n\t\"./Bella.jpg\": \"./src/assets/imgs/villagers/Bella.jpg\",\n\t\"./Belle.jpg\": \"./src/assets/imgs/villagers/Belle.jpg\",\n\t\"./Benedict.jpg\": \"./src/assets/imgs/villagers/Benedict.jpg\",\n\t\"./Benjamin.jpg\": \"./src/assets/imgs/villagers/Benjamin.jpg\",\n\t\"./Bertha.jpg\": \"./src/assets/imgs/villagers/Bertha.jpg\",\n\t\"./Bessie.jpg\": \"./src/assets/imgs/villagers/Bessie.jpg\",\n\t\"./Bettina.jpg\": \"./src/assets/imgs/villagers/Bettina.jpg\",\n\t\"./Betty.jpg\": \"./src/assets/imgs/villagers/Betty.jpg\",\n\t\"./Bianca.jpg\": \"./src/assets/imgs/villagers/Bianca.jpg\",\n\t\"./Biff.jpg\": \"./src/assets/imgs/villagers/Biff.jpg\",\n\t\"./Big Top.jpg\": \"./src/assets/imgs/villagers/Big Top.jpg\",\n\t\"./Bill.jpg\": \"./src/assets/imgs/villagers/Bill.jpg\",\n\t\"./Billy.jpg\": \"./src/assets/imgs/villagers/Billy.jpg\",\n\t\"./Biskit.jpg\": \"./src/assets/imgs/villagers/Biskit.jpg\",\n\t\"./Bitty.jpg\": \"./src/assets/imgs/villagers/Bitty.jpg\",\n\t\"./Blaire.jpg\": \"./src/assets/imgs/villagers/Blaire.jpg\",\n\t\"./Blanche.jpg\": \"./src/assets/imgs/villagers/Blanche.jpg\",\n\t\"./Blazel.jpg\": \"./src/assets/imgs/villagers/Blazel.jpg\",\n\t\"./Bliss.jpg\": \"./src/assets/imgs/villagers/Bliss.jpg\",\n\t\"./Bluebear.jpg\": \"./src/assets/imgs/villagers/Bluebear.jpg\",\n\t\"./Bob.jpg\": \"./src/assets/imgs/villagers/Bob.jpg\",\n\t\"./Bonbon.jpg\": \"./src/assets/imgs/villagers/Bonbon.jpg\",\n\t\"./Bones.jpg\": \"./src/assets/imgs/villagers/Bones.jpg\",\n\t\"./Boomer.jpg\": \"./src/assets/imgs/villagers/Boomer.jpg\",\n\t\"./Boone.jpg\": \"./src/assets/imgs/villagers/Boone.jpg\",\n\t\"./Boots.jpg\": \"./src/assets/imgs/villagers/Boots.jpg\",\n\t\"./Boris.jpg\": \"./src/assets/imgs/villagers/Boris.jpg\",\n\t\"./Bow.jpg\": \"./src/assets/imgs/villagers/Bow.jpg\",\n\t\"./Boyd.jpg\": \"./src/assets/imgs/villagers/Boyd.jpg\",\n\t\"./Bree.jpg\": \"./src/assets/imgs/villagers/Bree.jpg\",\n\t\"./Broccolo.jpg\": \"./src/assets/imgs/villagers/Broccolo.jpg\",\n\t\"./Broffina.jpg\": \"./src/assets/imgs/villagers/Broffina.jpg\",\n\t\"./Bruce.jpg\": \"./src/assets/imgs/villagers/Bruce.jpg\",\n\t\"./Bubbles.jpg\": \"./src/assets/imgs/villagers/Bubbles.jpg\",\n\t\"./Buck.jpg\": \"./src/assets/imgs/villagers/Buck.jpg\",\n\t\"./Bud.jpg\": \"./src/assets/imgs/villagers/Bud.jpg\",\n\t\"./Bunnie.jpg\": \"./src/assets/imgs/villagers/Bunnie.jpg\",\n\t\"./Butch.jpg\": \"./src/assets/imgs/villagers/Butch.jpg\",\n\t\"./Buzz.jpg\": \"./src/assets/imgs/villagers/Buzz.jpg\",\n\t\"./Camofrog.jpg\": \"./src/assets/imgs/villagers/Camofrog.jpg\",\n\t\"./Canberra.jpg\": \"./src/assets/imgs/villagers/Canberra.jpg\",\n\t\"./Candi.jpg\": \"./src/assets/imgs/villagers/Candi.jpg\",\n\t\"./Carmen.jpg\": \"./src/assets/imgs/villagers/Carmen.jpg\",\n\t\"./Carrie.jpg\": \"./src/assets/imgs/villagers/Carrie.jpg\",\n\t\"./Carrot.jpg\": \"./src/assets/imgs/villagers/Carrot.jpg\",\n\t\"./Cashmere.jpg\": \"./src/assets/imgs/villagers/Cashmere.jpg\",\n\t\"./Cece.jpg\": \"./src/assets/imgs/villagers/Cece.jpg\",\n\t\"./Celia.jpg\": \"./src/assets/imgs/villagers/Celia.jpg\",\n\t\"./Cesar.jpg\": \"./src/assets/imgs/villagers/Cesar.jpg\",\n\t\"./Chadder.jpg\": \"./src/assets/imgs/villagers/Chadder.jpg\",\n\t\"./Chai.jpg\": \"./src/assets/imgs/villagers/Chai.jpg\",\n\t\"./Champ.jpg\": \"./src/assets/imgs/villagers/Champ.jpg\",\n\t\"./Champagne.jpg\": \"./src/assets/imgs/villagers/Champagne.jpg\",\n\t\"./Charlise.jpg\": \"./src/assets/imgs/villagers/Charlise.jpg\",\n\t\"./Chelsea.jpg\": \"./src/assets/imgs/villagers/Chelsea.jpg\",\n\t\"./Cheri.jpg\": \"./src/assets/imgs/villagers/Cheri.jpg\",\n\t\"./Cherry.jpg\": \"./src/assets/imgs/villagers/Cherry.jpg\",\n\t\"./Chester.jpg\": \"./src/assets/imgs/villagers/Chester.jpg\",\n\t\"./Chevre.jpg\": \"./src/assets/imgs/villagers/Chevre.jpg\",\n\t\"./Chico.jpg\": \"./src/assets/imgs/villagers/Chico.jpg\",\n\t\"./Chief.jpg\": \"./src/assets/imgs/villagers/Chief.jpg\",\n\t\"./Chip Junior.jpg\": \"./src/assets/imgs/villagers/Chip Junior.jpg\",\n\t\"./Chops.jpg\": \"./src/assets/imgs/villagers/Chops.jpg\",\n\t\"./Chow.jpg\": \"./src/assets/imgs/villagers/Chow.jpg\",\n\t\"./Chrissy.jpg\": \"./src/assets/imgs/villagers/Chrissy.jpg\",\n\t\"./Chuck.jpg\": \"./src/assets/imgs/villagers/Chuck.jpg\",\n\t\"./Clara.jpg\": \"./src/assets/imgs/villagers/Clara.jpg\",\n\t\"./Claude.jpg\": \"./src/assets/imgs/villagers/Claude.jpg\",\n\t\"./Claudia.jpg\": \"./src/assets/imgs/villagers/Claudia.jpg\",\n\t\"./Clay.jpg\": \"./src/assets/imgs/villagers/Clay.jpg\",\n\t\"./Cleo.jpg\": \"./src/assets/imgs/villagers/Cleo.jpg\",\n\t\"./Clyde.jpg\": \"./src/assets/imgs/villagers/Clyde.jpg\",\n\t\"./Coach.jpg\": \"./src/assets/imgs/villagers/Coach.jpg\",\n\t\"./Cobb.jpg\": \"./src/assets/imgs/villagers/Cobb.jpg\",\n\t\"./Coco.jpg\": \"./src/assets/imgs/villagers/Coco.jpg\",\n\t\"./Cole.jpg\": \"./src/assets/imgs/villagers/Cole.jpg\",\n\t\"./Colton.jpg\": \"./src/assets/imgs/villagers/Colton.jpg\",\n\t\"./Cookie.jpg\": \"./src/assets/imgs/villagers/Cookie.jpg\",\n\t\"./Cousteau.jpg\": \"./src/assets/imgs/villagers/Cousteau.jpg\",\n\t\"./Cranston.jpg\": \"./src/assets/imgs/villagers/Cranston.jpg\",\n\t\"./Croque.jpg\": \"./src/assets/imgs/villagers/Croque.jpg\",\n\t\"./Cube.jpg\": \"./src/assets/imgs/villagers/Cube.jpg\",\n\t\"./Cupcake.jpg\": \"./src/assets/imgs/villagers/Cupcake.jpg\",\n\t\"./Curlos.jpg\": \"./src/assets/imgs/villagers/Curlos.jpg\",\n\t\"./Curly.jpg\": \"./src/assets/imgs/villagers/Curly.jpg\",\n\t\"./Curt.jpg\": \"./src/assets/imgs/villagers/Curt.jpg\",\n\t\"./Cyrano.jpg\": \"./src/assets/imgs/villagers/Cyrano.jpg\",\n\t\"./Daisy Mae.jpg\": \"./src/assets/imgs/villagers/Daisy Mae.jpg\",\n\t\"./Daisy.jpg\": \"./src/assets/imgs/villagers/Daisy.jpg\",\n\t\"./Deena.jpg\": \"./src/assets/imgs/villagers/Deena.jpg\",\n\t\"./Deirdre.jpg\": \"./src/assets/imgs/villagers/Deirdre.jpg\",\n\t\"./Del.jpg\": \"./src/assets/imgs/villagers/Del.jpg\",\n\t\"./Deli.jpg\": \"./src/assets/imgs/villagers/Deli.jpg\",\n\t\"./Derwin.jpg\": \"./src/assets/imgs/villagers/Derwin.jpg\",\n\t\"./Diana.jpg\": \"./src/assets/imgs/villagers/Diana.jpg\",\n\t\"./Diva.jpg\": \"./src/assets/imgs/villagers/Diva.jpg\",\n\t\"./Dizzy.jpg\": \"./src/assets/imgs/villagers/Dizzy.jpg\",\n\t\"./Dobie.jpg\": \"./src/assets/imgs/villagers/Dobie.jpg\",\n\t\"./Doc.jpg\": \"./src/assets/imgs/villagers/Doc.jpg\",\n\t\"./Dora.jpg\": \"./src/assets/imgs/villagers/Dora.jpg\",\n\t\"./Dotty.jpg\": \"./src/assets/imgs/villagers/Dotty.jpg\",\n\t\"./Dozer.jpg\": \"./src/assets/imgs/villagers/Dozer.jpg\",\n\t\"./Drago.jpg\": \"./src/assets/imgs/villagers/Drago.jpg\",\n\t\"./Drake.jpg\": \"./src/assets/imgs/villagers/Drake.jpg\",\n\t\"./Drift.jpg\": \"./src/assets/imgs/villagers/Drift.jpg\",\n\t\"./Egbert.jpg\": \"./src/assets/imgs/villagers/Egbert.jpg\",\n\t\"./Eloise.jpg\": \"./src/assets/imgs/villagers/Eloise.jpg\",\n\t\"./Elvis.jpg\": \"./src/assets/imgs/villagers/Elvis.jpg\",\n\t\"./Emerald.jpg\": \"./src/assets/imgs/villagers/Emerald.jpg\",\n\t\"./Erik.jpg\": \"./src/assets/imgs/villagers/Erik.jpg\",\n\t\"./Etoile.jpg\": \"./src/assets/imgs/villagers/Etoile.jpg\",\n\t\"./Fauna.jpg\": \"./src/assets/imgs/villagers/Fauna.jpg\",\n\t\"./Felicity.jpg\": \"./src/assets/imgs/villagers/Felicity.jpg\",\n\t\"./Filly.jpg\": \"./src/assets/imgs/villagers/Filly.jpg\",\n\t\"./Flip.jpg\": \"./src/assets/imgs/villagers/Flip.jpg\",\n\t\"./Flossie.jpg\": \"./src/assets/imgs/villagers/Flossie.jpg\",\n\t\"./Flurry.jpg\": \"./src/assets/imgs/villagers/Flurry.jpg\",\n\t\"./Francine.jpg\": \"./src/assets/imgs/villagers/Francine.jpg\",\n\t\"./Frank.jpg\": \"./src/assets/imgs/villagers/Frank.jpg\",\n\t\"./Freckles.jpg\": \"./src/assets/imgs/villagers/Freckles.jpg\",\n\t\"./Freya.jpg\": \"./src/assets/imgs/villagers/Freya.jpg\",\n\t\"./Friga.jpg\": \"./src/assets/imgs/villagers/Friga.jpg\",\n\t\"./Frita.jpg\": \"./src/assets/imgs/villagers/Frita.jpg\",\n\t\"./Frobert.jpg\": \"./src/assets/imgs/villagers/Frobert.jpg\",\n\t\"./Fruity.jpg\": \"./src/assets/imgs/villagers/Fruity.jpg\",\n\t\"./Isabelle.jpg\": \"./src/assets/imgs/villagers/Isabelle.jpg\",\n\t\"./KK Slider.jpg\": \"./src/assets/imgs/villagers/KK Slider.jpg\",\n\t\"./Marty.jpg\": \"./src/assets/imgs/villagers/Marty.jpg\",\n\t\"./Rilla.jpg\": \"./src/assets/imgs/villagers/Rilla.jpg\",\n\t\"./Toby.jpg\": \"./src/assets/imgs/villagers/Toby.jpg\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/assets/imgs/villagers sync \\\\.(png|jpe?g|svg)$\";\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers_sync_nonrecursive_\\.(png%7Cjpe?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Ace.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/villagers/Ace.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/1c64f32703463f1d3d78876377778eb1.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Ace.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Admiral.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Admiral.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/f78a67791db8df4705b07d91e61e2c1c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Admiral.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Agent S.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Agent S.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/cd1a6c33c14235c536fdf42520e5f8f9.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Agent_S.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Agnes.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Agnes.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/4cb282a8e2bd92444a5b7a345fd074d4.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Agnes.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Aisle.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Aisle.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6f467e6ca26f01f2ab263df9c598d7ae.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Aisle.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Al.jpg":
/*!******************************************!*\
  !*** ./src/assets/imgs/villagers/Al.jpg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/595c677e80a9a3b5404c4ed98da85a63.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Al.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Alfonso.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Alfonso.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/18be5d4c7cf3976e08fb947aefdbbf2a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Alfonso.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Alice.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Alice.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/2d155578b7942d997d9ebfc12a4da65b.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Alice.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Alli.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Alli.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/46c7256f4ec816c6290d0ad13628795f.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Alli.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Amelia.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Amelia.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/645acfa932e6a28729cc9b9f4963fa7d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Amelia.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Anabelle.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Anabelle.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e75906198bfc09bf0224275e08925d3b.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Anabelle.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Analogue.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Analogue.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/7514eb48bd5ef4d3677520d166eaceff.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Analogue.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Anchovy.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Anchovy.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/dd02f9137b912b28d07dd8d582780d02.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Anchovy.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Angus.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Angus.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/dc84a187493fca284c798f73249f0655.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Angus.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Anicotti.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Anicotti.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/f51e4f97115261c12d2f00996e195741.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Anicotti.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Ankha.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Ankha.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/b2332431f3000f035274516ca22b0c03.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Ankha.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Annalisa.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Annalisa.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/ca93c66bd02ddfdf8ed44ebef260bd3d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Annalisa.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Annalise.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Annalise.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/ec2411503416485cd46360dd1d7e9d8a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Annalise.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Antonio.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Antonio.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/aa3ffc00598619438b3139240d6a0f9d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Antonio.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Apollo.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Apollo.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6bca8071a6d6eba1b4729bf231d5e75f.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Apollo.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Apple.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Apple.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/953a4a154315c672f96cf2693159de81.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Apple.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Astrid.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Astrid.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/adc0a29d5abedbc5ed30dda4abcc6484.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Astrid.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Aurora.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Aurora.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/2ed7c46d5cdc751d4c668d2871bac19c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Aurora.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Ava.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/villagers/Ava.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/aa7360c04fdffe75fe8f1e297959cbc4.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Ava.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Avery.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Avery.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/c2ab1e88b0301faed1a8197d1decc0e1.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Avery.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Axel.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Axel.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/63e6806e1bc03f65161936cddf2bb5fa.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Axel.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Aziz.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Aziz.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/ac9efe2c05d40a8e6dd786bc1110f328.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Aziz.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Baabara.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Baabara.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/3da902246d6c21c56a8a46a79afafb16.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Baabara.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bam.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/villagers/Bam.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/29252d1412500775d4974efc768cf649.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bam.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bangle.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Bangle.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/ab00224f0823adaf1fbcf8b8baee5af6.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bangle.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Barold.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Barold.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/0cd29bd0bc93a964b2b38552b52078de.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Barold.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bea.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/villagers/Bea.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/757e755aeade74f065078d282492244a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bea.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Beardo.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Beardo.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fcba573f6fe7aeb5df4c3cf108c1df79.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Beardo.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Beau.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Beau.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/a934651012a0e697f51fb75480115270.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Beau.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Becky.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Becky.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/7a275ab8a38b27b2f96b1b2eaedec62b.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Becky.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bella.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Bella.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/c8cfcc2bd3b40427bab6a0ee921f08a9.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bella.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Belle.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Belle.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/822b99bad9081f2363a0f97ae1dd081c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Belle.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Benedict.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Benedict.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/2946ba2d46390d8ecc50a889e9a8a19e.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Benedict.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Benjamin.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Benjamin.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/846025b517ef080308167fae251ad6c3.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Benjamin.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bertha.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Bertha.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/3bddebb70aef3a137d02a418a228cffd.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bertha.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bessie.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Bessie.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e6cd5fbbcc36e521af1acad39df393ec.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bessie.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bettina.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Bettina.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/9666eca7e696782c8dda7d28d73be7a9.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bettina.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Betty.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Betty.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e7fe1990a4cab0e4c5ad65b35bb522e7.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Betty.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bianca.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Bianca.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/00a93279d8c2eaf480ce0f12d9a892c1.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bianca.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Biff.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Biff.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/c395b28b478ea944107c297613e3fd74.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Biff.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Big Top.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Big Top.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/b94c017ae9f7d8ad1a838eb307e37d35.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Big_Top.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bill.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Bill.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/861ff4b7b56e0cb7284c69d9cca6f5d3.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bill.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Billy.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Billy.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6180f8172f544a3eb4c280c50b5324f4.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Billy.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Biskit.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Biskit.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/769b26b1aa871bcc717d570011423108.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Biskit.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bitty.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Bitty.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/660a51f810e48bf56841ea10c36d415e.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bitty.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Blaire.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Blaire.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/be954ed96469aa991d8e351e70b67879.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Blaire.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Blanche.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Blanche.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/3798dfc6fe5a6723fd60a37412386c59.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Blanche.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Blazel.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Blazel.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/322cb16821b8b654a28ddc9da5844560.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Blazel.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bliss.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Bliss.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/acc2990ac514676e49b13cd1e85fa737.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bliss.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bluebear.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Bluebear.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/0a6275b58b431491339bbf1144ecd9bc.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bluebear.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bob.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/villagers/Bob.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d16da1c34d906d461cfbffed8bc660f8.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bob.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bonbon.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Bonbon.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/853a08bdabb275f37c7d9cdab75ddf90.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bonbon.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bones.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Bones.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/28dbbbb306da8c0ef8de2e17d7f49753.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bones.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Boomer.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Boomer.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6d0f2c9250b1f5a26288d84805a50179.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Boomer.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Boone.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Boone.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d58689b452da318787ae65ea2ba9f984.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Boone.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Boots.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Boots.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e7839338af804f9e6f1eb408da4b3570.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Boots.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Boris.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Boris.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/ff4831b80fb33f7bac36d1e68e264081.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Boris.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bow.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/villagers/Bow.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/f4a9832d39b068032b04a5cc550c6e48.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bow.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Boyd.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Boyd.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6ca608a3e32d681827815f7bff54dfca.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Boyd.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bree.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Bree.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/156e3847c0c49ef1bc367889053ada05.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bree.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Broccolo.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Broccolo.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/4c86ac2ec5083fc82c6f04cd693ef966.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Broccolo.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Broffina.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Broffina.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/a3b1be17ecaf304372e3dd1569ab91e0.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Broffina.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bruce.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Bruce.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6880c2bd001a34bf549b07c47acb514d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bruce.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bubbles.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Bubbles.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6699a21e973a7dab2ef42ddbcb7007bc.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bubbles.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Buck.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Buck.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/5764d11ec1bd5c4099cf3ce77b7df6da.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Buck.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bud.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/villagers/Bud.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/c10c5230c7a8cd5b171244a56bedeeeb.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bud.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Bunnie.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Bunnie.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/144179313fef30012737486ac8e0f768.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Bunnie.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Butch.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Butch.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/982b4d6c2bc83f6087bd4b2a23b30b8a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Butch.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Buzz.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Buzz.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d53fd3b2d92bd18d10125f70b4c26d17.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Buzz.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Camofrog.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Camofrog.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e5a36139bbdf7b93973ee0e7f799d00c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Camofrog.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Canberra.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Canberra.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/dc3acd1499715b03cc19f9631a98f894.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Canberra.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Candi.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Candi.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/58596e340cb44fab85217c8612280585.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Candi.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Carmen.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Carmen.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/f5d189e936bfbfa979bcaf608037080b.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Carmen.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Carrie.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Carrie.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/47aa9d129e791b8eaad6ad793f4abfa0.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Carrie.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Carrot.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Carrot.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e33a16f5d54b826aafb3a105f62224d4.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Carrot.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cashmere.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Cashmere.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/680425ccfebc9d674d852f6e1eedf657.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cashmere.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cece.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Cece.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/84212892ffe606f71e6a539757ab7bb9.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cece.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Celia.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Celia.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/cd260f010b9c4d8d23e9326bf088d293.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Celia.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cesar.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Cesar.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d862d1912c6df37c94087bb52a6901ab.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cesar.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chadder.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Chadder.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6642e004592b074b1b345018d84b4089.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chadder.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chai.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Chai.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/1f90107309f0885cc89ffc359c07a873.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chai.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Champ.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Champ.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/4620b9e813262d5de81e40bd9000eb92.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Champ.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Champagne.jpg":
/*!*************************************************!*\
  !*** ./src/assets/imgs/villagers/Champagne.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/4330a791f27ae6efc5dadce55612626e.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Champagne.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Charlise.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Charlise.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/0508ff44beed0505b26bf73836e5b163.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Charlise.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chelsea.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Chelsea.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/176abd380687273e0a01f5f12e0419a1.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chelsea.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cheri.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Cheri.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/a63717f0fbed0cfa47c473e2e2d42611.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cheri.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cherry.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Cherry.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/f5946c1bda0a4d3c77cfa65025ea9a2d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cherry.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chester.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Chester.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/0bcb1c8c51921c9c7379d7e3c2aa2243.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chester.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chevre.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Chevre.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e712bf482015c8894edc9049c59e2573.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chevre.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chico.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Chico.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6c1b6b078d6dea260ef8a7c9fa632ac5.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chico.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chief.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Chief.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/cbac5bbdc910a2567a8ea4558ae24e27.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chief.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chip Junior.jpg":
/*!***************************************************!*\
  !*** ./src/assets/imgs/villagers/Chip Junior.jpg ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6342f5228e500c5f70ed087bf66a33cf.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chip_Junior.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chops.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Chops.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6e140abb9c2814c8458d01dc5bd8c544.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chops.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chow.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Chow.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/165ebf8c98904bda8224cc422340734e.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chow.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chrissy.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Chrissy.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/5c3ed71939e867f51ee2457b2559b5ce.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chrissy.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Chuck.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Chuck.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/cf8de68e3e99c62c9a5c1510dc3bc8b3.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Chuck.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Clara.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Clara.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/9a1a156f869153c405a68108c54666a2.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Clara.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Claude.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Claude.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/81107d739d67f64ae3dfda809a302470.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Claude.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Claudia.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Claudia.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/9c1bcb438b3f184543db3596bdfcd98e.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Claudia.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Clay.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Clay.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/7e8f6950a92a7be446ea03e31e28344e.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Clay.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cleo.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Cleo.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/0da358b53641b4adf9fc02358baf59aa.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cleo.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Clyde.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Clyde.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fbb19556ede52843eda191d83cbc6228.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Clyde.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Coach.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Coach.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/5fe1878e049e7084f525e6df9bd019ae.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Coach.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cobb.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Cobb.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/84df476ed3602c4be040522600819101.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cobb.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Coco.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Coco.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/468697b33afcfc0259cb50667c51c59f.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Coco.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cole.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Cole.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/c9a421096458212ff4ccdc4789c0b2bd.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cole.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Colton.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Colton.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/a07ded60fb23ba002f0109949786d1b5.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Colton.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cookie.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Cookie.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6ed2516a1f28d2067a0f779299583ff7.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cookie.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cousteau.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Cousteau.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/115575bb1269db6fa6fc52e8b59aacf6.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cousteau.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cranston.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Cranston.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/c65016d2b4eda52770f7513818f691a0.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cranston.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Croque.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Croque.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/3e7c709729a69f10a93272edbc6eb56d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Croque.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cube.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Cube.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/767286616e51ab3d34aa5f2939ddf5b9.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cube.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cupcake.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Cupcake.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/eba154e3750a7636636c9a93a49258c5.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cupcake.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Curlos.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Curlos.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/90877fcf66b8fda95873730e6a0bcdd6.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Curlos.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Curly.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Curly.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/757635d618287c2f0746da864453f5c0.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Curly.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Curt.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Curt.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/be5032bc592a69f5703505f8a09da7e2.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Curt.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Cyrano.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Cyrano.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e1ecd5066ddecd106f2f5b185ad93a2f.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Cyrano.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Daisy Mae.jpg":
/*!*************************************************!*\
  !*** ./src/assets/imgs/villagers/Daisy Mae.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d18b29c02ce4c5bb810ada0fecac317f.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Daisy_Mae.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Daisy.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Daisy.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/91bdded9c30a347ab7955c75a36450c7.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Daisy.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Deena.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Deena.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/7188cb2bf3e5338ec8a8ab390bbfbff6.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Deena.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Deirdre.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Deirdre.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e3ab74caec7ee85cff4901b85df42d8d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Deirdre.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Del.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/villagers/Del.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e306b8b4fd7341886c80cefe55df96ef.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Del.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Deli.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Deli.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/afe0b7e83a8c13fd8add35a59c86bf66.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Deli.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Derwin.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Derwin.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/98a7d890fe6fe5da55d85addf71bcb34.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Derwin.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Diana.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Diana.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/304a5a5841955b724c0c1785c05a30fe.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Diana.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Diva.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Diva.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/185a13d940b66d755aba0672205c26f4.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Diva.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Dizzy.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Dizzy.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/f9f621d773368a76ee8d173bca6264ed.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Dizzy.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Dobie.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Dobie.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/7d19c616844f1539b110d7a2ae11abef.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Dobie.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Doc.jpg":
/*!*******************************************!*\
  !*** ./src/assets/imgs/villagers/Doc.jpg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/c5bf250d5a0de4530c4e14a1cac13156.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Doc.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Dora.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Dora.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/f6367e374cf5cfd35334e367b08d98e2.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Dora.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Dotty.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Dotty.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/b893c64f111170428e74077a1ea55e99.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Dotty.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Dozer.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Dozer.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/34ae89ccf5ea9ad7797ca35912e5e919.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Dozer.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Drago.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Drago.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/3d0d169d32bf8aaafafc703cd366e90c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Drago.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Drake.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Drake.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/c5899cc2279f4724b8064d8ca559b08b.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Drake.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Drift.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Drift.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6155ab6ff1bb37f5b729a533e6422513.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Drift.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Egbert.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Egbert.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/9f19a946e73dedd4e778416c5858b64f.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Egbert.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Eloise.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Eloise.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d03b1fa7a3b1cf08f9e6c8bba57874d0.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Eloise.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Elvis.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Elvis.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/f3da5e21dab685f2187834c5b27f8f25.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Elvis.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Emerald.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Emerald.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/aca81af977dfbc38cfcc65af0f1a2571.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Emerald.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Erik.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Erik.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/a75426d9ee0c601d840dac73ffa749e1.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Erik.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Etoile.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Etoile.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/eb4e2076366b2a84f65665abc3fa92a1.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Etoile.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Fauna.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Fauna.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/b835233cb061a434e6ae07fc9b862382.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Fauna.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Felicity.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Felicity.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/381b09f25c4db096128b9309b3e03d47.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Felicity.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Filly.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Filly.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/f1e893e757260574bfa78fbe1e9f23cc.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Filly.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Flip.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Flip.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/512584e4826fe33272c295340cf6b3e5.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Flip.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Flossie.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Flossie.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fb250c5bbfcb4f9bc80a53e63646d859.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Flossie.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Flurry.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Flurry.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6a370a8a00b7a1d2a74f9f70f75ff1fb.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Flurry.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Francine.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Francine.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/c43ab27c72f34a8d2c0aa3f07e46b55c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Francine.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Frank.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Frank.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/148ccb6ca0fdb2ba97c705409ddd7502.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Frank.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Freckles.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Freckles.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/d6d51b0e6b3fb8d4dbef4bf1100c43dc.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Freckles.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Freya.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Freya.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/1e49a62b6e1ff8e3a5bbc6a4deb390a5.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Freya.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Friga.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Friga.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/fe3f6c28ac3d9577cfe30faa15ad729d.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Friga.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Frita.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Frita.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/090c6f96af2dd3845ac661c9feda8b97.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Frita.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Frobert.jpg":
/*!***********************************************!*\
  !*** ./src/assets/imgs/villagers/Frobert.jpg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/3ca16e9f17ce20d87fddcdd9aa13c77c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Frobert.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Fruity.jpg":
/*!**********************************************!*\
  !*** ./src/assets/imgs/villagers/Fruity.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/3f3befaf57b9c36026726734852f6a9b.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Fruity.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Isabelle.jpg":
/*!************************************************!*\
  !*** ./src/assets/imgs/villagers/Isabelle.jpg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/1126817c6fca06315dec48ffcfcf874c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Isabelle.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/KK Slider.jpg":
/*!*************************************************!*\
  !*** ./src/assets/imgs/villagers/KK Slider.jpg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/e089c5644a36235d83853290b9a8b92a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/KK_Slider.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Marty.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Marty.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/75c376b27faae2106e4743c6dba5fd9a.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Marty.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Rilla.jpg":
/*!*********************************************!*\
  !*** ./src/assets/imgs/villagers/Rilla.jpg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6a0c02ab8c6771ee645c2cfa14f7767c.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Rilla.jpg?");

/***/ }),

/***/ "./src/assets/imgs/villagers/Toby.jpg":
/*!********************************************!*\
  !*** ./src/assets/imgs/villagers/Toby.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6f890f0fea507daa224860c4f732ac5e.jpg\");\n\n//# sourceURL=webpack:///./src/assets/imgs/villagers/Toby.jpg?");

/***/ }),

/***/ "./src/assets/sounds/background-music-edited.mp3":
/*!*******************************************************!*\
  !*** ./src/assets/sounds/background-music-edited.mp3 ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/252207ca61f36f6567a7b466642dfd71.mp3\");\n\n//# sourceURL=webpack:///./src/assets/sounds/background-music-edited.mp3?");

/***/ }),

/***/ "./src/assets/sounds/success.mp3":
/*!***************************************!*\
  !*** ./src/assets/sounds/success.mp3 ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/6ca8ac8ffd19d0ed19d0c41cd79f842a.mp3\");\n\n//# sourceURL=webpack:///./src/assets/sounds/success.mp3?");

/***/ }),

/***/ "./src/game/board.js":
/*!***************************!*\
  !*** ./src/game/board.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ \"./src/game/tile.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _assets_imgs_card_facedown_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/imgs/card-facedown.png */ \"./src/assets/imgs/card-facedown.png\");\n/* harmony import */ var _assets_sounds_success_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sounds/success.mp3 */ \"./src/assets/sounds/success.mp3\");\n\n\n\n\n\n\nlet images = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"importAll\"])(\n  __webpack_require__(\"./src/assets/imgs/villagers sync \\\\.(png|jpe?g|svg)$\")\n);\n\nwhile (Object.keys(images).length === 0)\n  images = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"importAll\"])(\n    __webpack_require__(\"./src/assets/imgs/villagers sync \\\\.(png|jpe?g|svg)$\")\n  );\n\nclass Board {\n  constructor(levelNum, tileNum, time, gameManager, score = 0) {\n    this.size = tileNum;\n    this.tilesThisTurn = [];\n    this.score = score;\n    this.flippedCount = 0;\n    this.firstClick = true;\n    this.time = time;\n    this.streak = 0;\n    this.gameOver = false;\n    this.timerInterval = null;\n    this.levelNum = levelNum;\n    this.gameManager = gameManager;\n    this.successSound = new Audio(_assets_sounds_success_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    this.tiles = this.newTileset(tileNum);\n  }\n\n  newTileset(size) {\n    const temp = [];\n    const villagers = Object.assign({}, images);\n\n    for (let i = 0; i < size / 2; i++) {\n      const villager = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"randomVillager\"])(villagers);\n      delete villagers[villager.key];\n      const tile = new _tile__WEBPACK_IMPORTED_MODULE_0__[\"default\"](villager);\n      temp.push(tile);\n      temp.push(tile);\n    }\n\n    Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"shuffle\"])(temp);\n    return temp.slice(0, size);\n  }\n\n  scale(el) {\n    el.classList.toggle(\"scale\");\n    setTimeout(() => el.classList.toggle(\"scale\"), 200);\n  }\n\n  shake(el) {\n    el.classList.toggle('shake');\n    setTimeout(() => el.classList.toggle('shake'), 500);\n  }\n\n  calculateScore() {\n    return this.score + 1000 + this.streak ** 10;\n  }\n\n  html() {\n    const container = document.createElement('div');\n    container.classList.add('board');\n\n    container.addEventListener('click', ({ target }) => {\n      if (this.gameOver) return;\n      if (!target.classList.contains('tile-img')) return;\n      if (target.classList.contains('flipped')) return;\n      if (this.tilesThisTurn.length === 2) return;\n\n      if (this.firstClick) {\n        const timer = document.querySelector(\"#timer\");\n        this.firstClick = false;\n        this.timerInterval = setInterval(() => {\n          this.time -= 1;\n          timer.innerText = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"formattedTime\"])(this.time);\n\n          if (this.time === 0) {\n            timer.innerText = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"formattedTime\"])(this.time);\n            this.gameManager.updateScore(0);\n            this.gameManager.resetStreak();\n            clearInterval(this.timerInterval);\n            this.gameOver = true;\n            this.gameManager.updateLevel(--this.levelNum);\n          }\n        }, 975)\n      }\n\n      target.src = target.getAttribute(\"data-villager-src\");\n      this.scale(target);\n      target.classList.toggle(\"flipped\");\n\n      this.tilesThisTurn.push(target);\n      if (this.tilesThisTurn.length === 2) {\n        const names = this.tilesThisTurn.map(tile => tile.getAttribute('data-villager-name'));\n        if (names[0] === names[1]) {\n\n          this.successSound.play();\n          this.scale(this.tilesThisTurn[0]);\n          this.streak++;\n          this.score = this.calculateScore();\n          this.gameManager.updateScore(this.score);\n          this.flippedCount += 2;\n          this.gameManager.updateStreak(this.streak);\n          if (this.flippedCount === this.size) {\n            clearInterval(this.timerInterval);\n            setTimeout(() => this.gameManager.updateLevel(++this.levelNum, this.score), 1000);\n          }\n          this.tilesThisTurn = [];\n        } else {\n          this.tilesThisTurn.forEach(tile => this.shake(tile));\n          this.streak = 0;\n          this.gameManager.resetStreak();\n          setTimeout(() => {\n            this.tilesThisTurn.forEach(tile => {\n              tile.src = _assets_imgs_card_facedown_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n              tile.classList.toggle(\"flipped\");\n            });\n            this.tilesThisTurn = [];\n          }, 650);\n        }\n      }\n    });\n\n\n    if (this.size === 16) {\n      let idx = 0;\n      for (let i = 0; i < 4; i++) {\n        const row = document.createElement('div');\n        row.classList.add('board-row');\n\n        for (let j = 0; j < 4; j++) {\n          row.appendChild(this.tiles[idx].html());\n          idx++;\n        }\n        container.appendChild(row);\n      }\n    } else {\n      this.tiles.forEach(tile => container.appendChild(tile.html()));\n    }\n\n    return container;\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n\n//# sourceURL=webpack:///./src/game/board.js?");

/***/ }),

/***/ "./src/game/game_manager.js":
/*!**********************************!*\
  !*** ./src/game/game_manager.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _memory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./memory */ \"./src/game/memory.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/game/header.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _level_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level_data.js */ \"./src/game/level_data.js\");\n/* harmony import */ var _level_data_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_level_data_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"./src/game/modal.js\");\n\n\n\n\n\n\n\nclass GameManager {\n  constructor(root) {\n    this.root = root;\n    this.level = 1;\n    this.streakCounter = null;\n    this.header = new _header__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.level, _level_data_js__WEBPACK_IMPORTED_MODULE_3___default.a[this.level].time);\n    this.game = new _memory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.level, _level_data_js__WEBPACK_IMPORTED_MODULE_3___default.a[this.level], this);\n    this.updateLevel = this.updateLevel.bind(this);\n  }\n\n  updateLevel(num, currentScore) {\n    const increment = this.level < num;\n    this.level = num < 1 ? 1 : num;\n\n    this.game = new _memory__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.level, _level_data_js__WEBPACK_IMPORTED_MODULE_3___default.a[this.level], this, currentScore);\n    this.updateHeaderLevel(increment);\n    this.resetStreak();\n    this.updateTimerText();\n    this.root.removeChild(document.querySelector('#memory-game'));\n    this.root.appendChild(this.game.html());\n  }\n\n  updateHeaderLevel(increment) {\n    if (increment) this.header.incrementLevel();\n    else this.header.decrementLevel();\n  }\n\n  updateTimerText() {\n    const timer = document.querySelector('#timer');\n    timer.innerText = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"formattedTime\"])(_level_data_js__WEBPACK_IMPORTED_MODULE_3___default.a[this.level].time)\n  }\n\n  updateScore(score) {\n    this.header.updateScore(score);\n  }\n\n  updateStreak(num) {\n    this.header.updateStreak(num);\n  }\n\n  resetStreak() {\n    this.header.resetStreak();\n  }\n\n  render() {\n    this.root.appendChild(new _modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"](true).html());\n    document.querySelector('#welcome-modal-container').classList.add('open');\n\n    this.root.appendChild(new _modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"]().html());\n    this.root.appendChild(this.header.html());\n    this.root.appendChild(this.game.html());\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameManager);\n\n\n//# sourceURL=webpack:///./src/game/game_manager.js?");

/***/ }),

/***/ "./src/game/header.js":
/*!****************************!*\
  !*** ./src/game/header.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_imgs_bgs_header2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/bgs/header2.png */ \"./src/assets/imgs/bgs/header2.png\");\n/* harmony import */ var _assets_imgs_misc_bell_bag_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/imgs/misc/bell-bag.png */ \"./src/assets/imgs/misc/bell-bag.png\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _assets_sounds_background_music_edited_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/sounds/background-music-edited.mp3 */ \"./src/assets/sounds/background-music-edited.mp3\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ \"./src/game/modal.js\");\n\n\n\n\n\n\nclass Header {\n  constructor(level, initialTime, gameManager, score = 0) {\n    this.gameManager = gameManager;\n    this.score = score;\n    this.level = level;\n    this.scoreHtml = null;\n    this.levelHtml = null;\n    this.streakHtml = null;\n    this.initialTime = initialTime;\n    this.bgMusic = new Audio(_assets_sounds_background_music_edited_mp3__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n    this.bgMusic.loop = true;\n    this.title = 'Card Remember!';\n  }\n\n\n  incrementStreak() {\n    this.streak++;\n    this.streakHtml.innerText = this.streak;\n  }\n\n  resetStreak() {\n    this.streakHtml.innerText = 0;\n  }\n\n  incrementLevel() {\n    this.level++;\n    this.levelHtml.innerText = `Level ${this.level}`;\n  }\n\n  updateStreak(num) {\n    this.streakHtml.innerText = num;\n  }\n\n  updateTimerText(time) {\n    this.timerHtml.innerHTML = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"formattedTime\"])(time);\n  }\n\n  decrementLevel() {\n    if (this.level > 1) this.level--;\n    this.levelHtml.innerText = `Level ${this.level}`;\n  }\n\n  updateScore(score) {\n    this.score = score;\n    this.scoreHtml.innerText = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"formatNumber\"])(score);\n  }\n\n  html() {\n    const container = document.createElement('div');\n    container.classList.add('header');\n\n    const img = new Image();\n    img.src = _assets_imgs_bgs_header2_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    img.classList.add('responsive-img');\n    img.classList.add('header-bg');\n\n    const content = document.createElement('div');\n    content.classList.add('header-content');\n\n    const upperRow = document.createElement('div');\n    upperRow.classList.add('header-row');\n    upperRow.classList.add('upper-row');\n\n    const timer = document.createElement('div');\n    timer.id = 'timer';\n    timer.classList.add('timer');\n    timer.innerText = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"formattedTime\"])(this.initialTime);\n    upperRow.appendChild(timer);\n\n    const title = document.createElement('div');\n    title.classList.add('title');\n    title.innerText = this.title;\n    upperRow.appendChild(title);\n\n    const helpContainer = document.createElement('div');\n    const musicIcon = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"createElementFromHTML\"])('<i class=\"header-music fas fa-microphone-alt-slash\"></i>');\n\n    musicIcon.addEventListener('click', () => {\n      musicIcon.classList.toggle('fa-microphone-alt-slash');\n      musicIcon.classList.toggle('fa-microphone-alt');\n\n      if (this.bgMusic.paused) this.bgMusic.play();\n      else this.bgMusic.pause();\n    });\n\n    helpContainer.appendChild(musicIcon);\n\n    const helpIcon = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__[\"createElementFromHTML\"])('<i class=\"header-question fas fa-question-circle\"></i>');\n    helpContainer.appendChild(helpIcon);\n    helpIcon.addEventListener('click', () => document.querySelector('#modal-container').classList.toggle('open'));\n\n    upperRow.appendChild(helpContainer);\n\n    content.appendChild(upperRow);\n\n    const lowerRow = document.createElement('div');\n    lowerRow.classList.add('header-row');\n\n    const level = document.createElement('div');\n    level.id = 'level';\n    level.classList.add('level');\n    level.innerText = `Level ${this.level}`;\n    lowerRow.appendChild(level);\n    this.levelHtml = level;\n\n    const scoreContainer = document.createElement('div');\n    scoreContainer.classList.add('score');\n\n    const bagContainer = document.createElement('span');\n    bagContainer.classList.add('bag-container');\n\n    const bellBag = new Image();\n    bellBag.src = _assets_imgs_misc_bell_bag_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    bellBag.classList.add('bell-bag');\n\n    bagContainer.appendChild(bellBag);\n    scoreContainer.appendChild(bagContainer);\n\n    const score = document.createElement('span');\n    score.id = \"score\";\n    score.innerText = '0';\n    scoreContainer.appendChild(score);\n    lowerRow.appendChild(scoreContainer);\n    this.scoreHtml = score;\n\n    const streakContainer = document.createElement('div');\n    streakContainer.classList.add('streak-container');\n\n    const streak = document.createElement('span');\n    streak.id = 'streak';\n    streak.classList.add('streak');\n    streak.innerText = '0';\n    streakContainer.appendChild(streak);\n    this.streakHtml = streak;\n\n    const streakIconContainer = document.createElement('span');\n    streakIconContainer.classList.add('streak-icon-container');\n    streakIconContainer.innerHTML = '<i class=\"streak-icon fas fa-fire-alt\"></i>';\n\n    streakContainer.appendChild(streakIconContainer);\n\n    lowerRow.appendChild(streakContainer);\n\n    content.appendChild(lowerRow);\n\n    container.appendChild(img);\n    container.appendChild(content);\n    return container;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n\n//# sourceURL=webpack:///./src/game/header.js?");

/***/ }),

/***/ "./src/game/level_data.js":
/*!********************************!*\
  !*** ./src/game/level_data.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  \"1\": {\n    \"time\": 180,\n    \"tileNum\": 16\n  },\n  \"2\": {\n    \"time\": 240,\n    \"tileNum\": 24\n  },\n  \"3\": {\n    \"time\": 300,\n    \"tileNum\": 32\n  }\n}\n\n\n//# sourceURL=webpack:///./src/game/level_data.js?");

/***/ }),

/***/ "./src/game/memory.js":
/*!****************************!*\
  !*** ./src/game/memory.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/game/board.js\");\n\n\nclass Memory {\n  constructor(levelNum, levelData, gameManager, score = 0) {\n    this.level = levelNum;\n    this.gameManager = gameManager;\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](levelNum, levelData.tileNum, levelData.time, gameManager, score);\n  }\n\n  html() {\n    const container = document.createElement(\"div\");\n    container.id = 'memory-game';\n    container.classList.add(\"memory-game\");\n    container.appendChild(this.board.html());\n\n    return container;\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Memory);\n\n\n//# sourceURL=webpack:///./src/game/memory.js?");

/***/ }),

/***/ "./src/game/modal.js":
/*!***************************!*\
  !*** ./src/game/modal.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/utils/utils.js\");\n\n\nclass Modal {\n  constructor(isIntro = false) {\n    this.isIntro = isIntro;\n  }\n\n  html() {\n    const container = document.createElement('div');\n    if (this.isIntro) container.id = 'welcome-modal-container';\n    else container.id = 'modal-container';\n    container.classList.add('modal-container');\n\n    const modal = document.createElement('div');\n    if (this.isIntro) modal.id = 'welcome-modal';\n    else modal.id = 'modal';\n    modal.classList.add('modal');\n\n    const content = document.createElement('div');\n    content.classList.add('modal-content');\n\n    const close = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElementFromHTML\"])('<i id=\"modal-close\" class=\"modal-close fas fa-times\"></i>');\n    close.addEventListener('click', () => container.classList.toggle('open'));\n\n    content.appendChild(close);\n\n    const header = document.createElement('h1');\n    if (this.isIntro) header.innerText = 'Welcome to Card Remember!';\n    else header.innerText = 'How to Play';\n    content.appendChild(header);\n\n    const p1 = document.createElement('p');\n    p1.innerText = \"Flip cards over by clicking on them two at a time.\\nIf those cards are a pair, then you will earn bells (points) and they will stay up. If not, then they will go back down.\\nKeep flipping until you find all the matching pairs before time runs out!\";\n\n    content.appendChild(p1);\n\n    const p2 = document.createElement('p');\n    p2.innerText = \"Earn bonus points by flipping matching pairs over consecutively.\\nYour score will skyrocket the higher your streak goes!\";\n\n    content.appendChild(p2);\n\n    modal.appendChild(content);\n    container.appendChild(modal);\n    return container;\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n\n//# sourceURL=webpack:///./src/game/modal.js?");

/***/ }),

/***/ "./src/game/tile.js":
/*!**************************!*\
  !*** ./src/game/tile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_imgs_card_facedown_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/imgs/card-facedown.png */ \"./src/assets/imgs/card-facedown.png\");\n\n\nclass Tile {\n  constructor({ name, src }) {\n    this.name = name;\n    this.src = src;\n    this.found = false;\n  }\n\n  html() {\n    const container = document.createElement('div');\n    container.classList.add('tile-container');\n\n    const tile = document.createElement('div');\n    tile.classList.add('tile');\n\n    container.appendChild(tile);\n\n    const img = new Image();\n    img.classList.add('responsive-img');\n    img.classList.add('tile-img');\n    img.src = _assets_imgs_card_facedown_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n    img.setAttribute('data-villager-src', this.src);\n    img.setAttribute('data-villager-name', this.name);\n    tile.appendChild(img);\n    container.appendChild(tile);\n\n\n    return container;\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n\n//# sourceURL=webpack:///./src/game/tile.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_css_memory_crossing_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/_memory_crossing.scss */ \"./src/assets/css/_memory_crossing.scss\");\n/* harmony import */ var _assets_css_memory_crossing_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_css_memory_crossing_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _game_game_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game_manager */ \"./src/game/game_manager.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const root = document.querySelector('#root');\n  const gameManager = new _game_game_manager__WEBPACK_IMPORTED_MODULE_1__[\"default\"](root);\n  gameManager.render();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/*! exports provided: shuffle, randomColor, importAll, randomVillager, formattedTime, formatNumber, createElementFromHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomColor\", function() { return randomColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"importAll\", function() { return importAll; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomVillager\", function() { return randomVillager; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formattedTime\", function() { return formattedTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatNumber\", function() { return formatNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElementFromHTML\", function() { return createElementFromHTML; });\nconst shuffle = arr => {\n  let currentIndex = arr.length;\n  let tempVal, randIndex;\n\n  while (0 !== currentIndex) {\n    randIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1;\n\n    tempVal = arr[currentIndex];\n    arr[currentIndex] = arr[randIndex];\n    arr[randIndex] = tempVal;\n  }\n\n  return arr;\n}\n\nconst randomColor = () => (\n  '#' + Math.floor(Math.random() * 16777215).toString(16)\n);\n\nconst importAll = r => {\n  let images = {};\n  r.keys().map((item, _) => {\n    images[item.replace(\"./\", \"\")] = r(item);\n  });\n  return images;\n}\n\nconst randomVillager = villagers => {\n  const keys = Object.keys(villagers);\n  const i = Math.round(keys.length * Math.random());\n  const key = keys[i];\n  const name = key.split('.')[0];\n  const src = villagers[keys[i]].default;\n\n  return { name, src, key };\n}\n\nconst formattedTime = time => {\n  const min = (Math.floor(time / 60)).toString();\n  let seconds = (time % 60).toString();\n\n  if (seconds.length < 2) seconds = '0' + seconds;\n\n  return `${min}:${seconds}`;\n}\n\nconst formatNumber = num => (\n  num.toString().replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,')\n)\n\nconst createElementFromHTML = htmlString => {\n  var div = document.createElement('div');\n  div.innerHTML = htmlString.trim();\n\n  return div.firstChild;\n}\n\n\n\n//# sourceURL=webpack:///./src/utils/utils.js?");

/***/ })

/******/ });