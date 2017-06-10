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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(0);

var _main2 = _interopRequireDefault(_main);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Grab any element that has the 'js-toggle' class and add an event listner for the toggleClass function
var toggleBtns = document.getElementsByClassName('js-toggle');
for (var i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener('click', toggleClass, false);
}

function toggleClass() {
  // Define the data target via the dataset "target" (e.g. data-target=".docsmenu")
  var content = this.dataset.target.split(' '
  // Find any menu items that are open
  );var mobileCurrentlyOpen = document.querySelector('.mobilemenu:not(.dn)');
  var desktopCurrentlyOpen = document.querySelector('.desktopmenu:not(.dn)');
  var desktopActive = document.querySelector('.desktopmenu:not(.dn)'

  // Loop through the targets' divs
  );for (var i = 0; i < content.length; i++) {
    var matches = document.querySelectorAll(content[i]);
    //for each, if the div has the 'dn' class (which is "display:none;"), remove it, otherwise, add that class
    [].forEach.call(matches, function (dom) {
      dom.classList.contains('dn') ? dom.classList.remove('dn') : dom.classList.add('dn');
      return false;
    });
    // close the currently open menu items
    if (mobileCurrentlyOpen) mobileCurrentlyOpen.classList.add('dn');
    if (desktopCurrentlyOpen) desktopCurrentlyOpen.classList.add('dn');
    if (desktopActive) desktopActive.classList.remove('db');
  }
}

/***/ })
/******/ ]);