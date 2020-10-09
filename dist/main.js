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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\src\\js\\main.js: Identifier 'closeMenu' has already been declared (119:9)\n\n\u001b[0m \u001b[90m 117 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 118 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 119 | \u001b[39m\u001b[36mfunction\u001b[39m closeMenu() {\t\t\u001b[90m// fa scomparire l'hamburger menu\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 120 | \u001b[39m\t\u001b[36mvar\u001b[39m cardNav \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mgetElementById(\u001b[32m\"card__nav\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 121 | \u001b[39m\tcardNav\u001b[33m.\u001b[39mclassList\u001b[33m.\u001b[39mremove(\u001b[32m\"visible-flex\"\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 122 | \u001b[39m\u001b[0m\n    at Parser._raise (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:766:17)\n    at Parser.raiseWithData (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:759:17)\n    at Parser.raise (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:753:17)\n    at ScopeHandler.checkRedeclarationInScope (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:4873:12)\n    at ScopeHandler.declareName (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:4839:12)\n    at Parser.registerFunctionStatementId (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:12183:16)\n    at Parser.parseFunction (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:12159:12)\n    at Parser.parseFunctionStatement (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:11779:17)\n    at Parser.parseStatementContent (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:11469:21)\n    at Parser.parseStatement (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:11431:17)\n    at Parser.parseBlockOrModuleBlockBody (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:12013:25)\n    at Parser.parseBlockBody (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:11999:10)\n    at Parser.parseTopLevel (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:11362:10)\n    at Parser.parse (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:13045:10)\n    at parse (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\parser\\lib\\index.js:13098:38)\n    at parser (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:99:38)\n    at normalizeFile.next (<anonymous>)\n    at run (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\gensync\\index.js:254:32)\n    at D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\gensync\\index.js:266:13\n    at async.call.result.err.err (D:\\Users\\Gianluigi\\Desktop\\BooleanLezioniEdEsercizi\\repo-github\\WipItalia-esercizio\\WipItalia-esercizio\\node_modules\\gensync\\index.js:216:11)");

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/js/main.js ./src/css/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! D:\Users\Gianluigi\Desktop\BooleanLezioniEdEsercizi\repo-github\WipItalia-esercizio\WipItalia-esercizio\src\js\main.js */"./src/js/main.js");
module.exports = __webpack_require__(/*! D:\Users\Gianluigi\Desktop\BooleanLezioniEdEsercizi\repo-github\WipItalia-esercizio\WipItalia-esercizio\src\css\style.scss */"./src/css/style.scss");


/***/ })

/******/ });