/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: '#app',
  data: {
    /* Navbar */
    navLinks: [{
      pgName: 'Home',
      url: '#'
    }, {
      pgName: 'Pages',
      url: '/pages'
    }, {
      pgName: 'Courses',
      url: '/courses'
    }, {
      pgName: 'Features',
      url: '/features'
    }, {
      pgName: 'Blog',
      url: '/blog'
    }, {
      pgName: 'Shop',
      url: '/shop'
    }],

    /* Slide */
    counter: 0,
    courseList: [{
      title: 'Learning to Write as a Professional Author',
      imgSource: './dist/img/course-01.jpg',
      price: 40.00,
      lessons: '20',
      students: 50,
      url: '/learning-to-write'
    }, {
      title: 'Customer-centric Info-Tech Strategies',
      imgSource: './dist/img/course-02.jpg',
      price: 0.00,
      lessons: '20',
      students: 769,
      url: '/customer-centric-strategies'
    }, {
      title: 'Open Programming Courses for Everyone: Python',
      imgSource: './dist/img/course-03.jpg',
      price: 19.00,
      lessons: '20',
      students: 62,
      url: '/python-programming'
    }, {
      title: 'Course 4',
      imgSource: './dist/img/course-03.jpg',
      price: 19.00,
      lessons: '20',
      students: 62,
      url: '/course-4'
    }, {
      title: 'Course 5',
      imgSource: './dist/img/course-03.jpg',
      price: 19.00,
      lessons: '20',
      students: 62,
      url: '/course-4'
    }],

    /* Blog */
    blogPosts: [{
      title: 'Connection Between Self-Portraits and Identity',
      imgSource: './dist/img/artist-blog-02.jpg',
      date: '05-15-2020',

      get formattedDate() {
        return dayjs(this.date).format("MMM DD, YYYY");
      },

      views: 397,
      url: '/pages'
    }, {
      title: 'Pocket-Sized Notebooks hold Miniature Paintings',
      imgSource: './dist/img/artist-blog-01.jpg',
      date: '05-15-2020',

      get formattedDate() {
        return dayjs(this.date).format("MMM DD, YYYY");
      },

      views: 603,
      url: '#'
    }, {
      title: 'Brush Strokes Energize Trees in Paintings',
      imgSource: './dist/img/artist-blog-03.jpeg',
      date: '05-15-2020',

      get formattedDate() {
        return dayjs(this.date).format("MMM DD, YYYY");
      },

      views: 688,
      url: '/courses'
    }],

    /* Footer */
    footerExplore: [{
      pgName: "Start here",
      url: "/start-here"
    }, {
      pgName: "Success story",
      url: "/success-story"
    }, {
      pgName: "Blog",
      url: "/blog"
    }, {
      pgName: "Courses",
      url: "/courses"
    }, {
      pgName: "About us",
      url: "/about-us"
    }, {
      pgName: "Contact us",
      url: "/contact-us"
    }],
    footerInformation: [{
      pgName: "Membership",
      url: "/membership"
    }, {
      pgName: "Purchase guide",
      url: "/purchase-guide"
    }, {
      pgName: "Privacy policy",
      url: "/privacy-policy"
    }, {
      pgName: "Terms of service",
      url: "/terms-of-service"
    }]
  },
  methods: {
    scrollSlide: function scrollSlide(i) {}
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;