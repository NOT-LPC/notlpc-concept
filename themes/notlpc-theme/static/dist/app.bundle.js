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

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(10);

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var scrollDir = __webpack_require__(9);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// query selector targets Hugo TOC 
(function () {

  'use strict';

  // Feature Test

  if ('querySelector' in document && 'addEventListener' in window && Array.prototype.forEach) {

    // Function to animate the scroll
    var smoothScroll = function smoothScroll(anchor, duration) {

      // Calculate how far and how fast to scroll
      var startLocation = window.pageYOffset;
      var endLocation = anchor.offsetTop;
      var distance = endLocation - startLocation;
      var increments = distance / (duration / 16);
      var stopAnimation;

      // Scroll the page by an increment, and check if it's time to stop
      var animateScroll = function animateScroll() {
        window.scrollBy(0, increments);
        stopAnimation();
      };

      // If scrolling down
      if (increments >= 0) {
        // Stop animation when you reach the anchor OR the bottom of the page
        stopAnimation = function stopAnimation() {
          var travelled = window.pageYOffset;
          if (travelled >= endLocation - increments || window.innerHeight + travelled >= document.body.offsetHeight) {
            clearInterval(runAnimation);
          }
        };
      }
      // If scrolling up
      else {
          // Stop animation when you reach the anchor OR the top of the page
          stopAnimation = function stopAnimation() {
            var travelled = window.pageYOffset;
            if (travelled <= (endLocation || 0)) {
              clearInterval(runAnimation);
            }
          };
        }

      // Loop the animation function
      var runAnimation = setInterval(animateScroll, 16);
    };

    // Define smooth scroll links
    var scrollToggle = document.querySelectorAll('#TableOfContents ul li a');

    // For each smooth scroll link
    [].forEach.call(scrollToggle, function (toggle) {

      // When the smooth scroll link is clicked
      toggle.addEventListener('click', function (e) {

        // Prevent the default link behavior
        e.preventDefault();

        // Get anchor link and calculate distance from the top
        var dataID = toggle.getAttribute('href');
        var dataTarget = document.querySelector(dataID);
        var dataSpeed = toggle.getAttribute('data-speed');

        // If the anchor exists
        if (dataTarget) {
          // Scroll to the anchor
          smoothScroll(dataTarget, dataSpeed || 500);
        }
      }, false);
    });
  }
})();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * scrolldir - Vertical scroll direction in CSS
 * @version v1.2.8
 * @link https://github.com/dollarshaveclub/scrolldir.git
 * @author Patrick Fisher <patrick@pwfisher.com>
 * @license MIT
**/
!function(t,e){ true?e():"function"==typeof define&&define.amd?define(e):e()}(0,function(){"use strict";!function(){var t=document.documentElement,e=window,n=document.body,o=Array(32),i="down",d=void 0,r=void 0,a=0,f=function(){var f=e.scrollY,u=d.timeStamp,c="down"===i?Math.max:Math.min,s=n.offsetHeight-e.innerHeight;if(f=Math.max(0,f),f=Math.min(s,f),o.unshift({y:f,t:u}),o.pop(),f===c(r,f))return a=u,void(r=f);var m=u-512;if(m>a){r=f;for(var l=0;l<32&&o[l]&&!(o[l].t<m);l+=1)r=c(r,o[l].y)}Math.abs(f-r)>64&&(r=f,a=u,i="down"===i?"up":"down",t.setAttribute("data-scrolldir",i))},u=function(t){d=t,e.requestAnimationFrame(f)};r=e.scrollY,t.setAttribute("data-scrolldir",i),e.addEventListener("scroll",u)}()});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/, 'js');

/***/ })
/******/ ]);