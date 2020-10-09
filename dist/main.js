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

var posts = document.querySelectorAll('#card-trigger li a');
posts.forEach(function (post) {
  post.addEventListener('click', function (e) {
    // console.log(post.dataset.sku);
    var dataSku = post.dataset.sku;
    ajaxCall(dataSku);
  });
}); // per rimuovere tutte le cards

var cardsRemoverBtn = document.getElementById("remover");
cardsRemoverBtn.addEventListener("click", removeAllCards); // funzioni

function ajaxCall(dataSku) {
  // ajax che recupera le info della card, se non e' gia presente la inserisce
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/".concat(dataSku), true);
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var post = JSON.parse(xhttp.responseText); // prima di inserire la card controllo che non sia gia' presente

      var cardPresente = false;
      var cards = document.querySelectorAll('#cards-holder div');
      cards.forEach(function (card) {
        var cardData = card.dataset.sku;

        if (cardData == dataSku) {
          cardPresente = true;
        }
      }); // inserisco la card

      if (!cardPresente) {
        var divCard = document.createElement("div");
        divCard.setAttribute('data-sku', dataSku);
        divCard.setAttribute('class', 'card');
        var cardButton = document.createElement("i");
        cardButton.setAttribute('class', 'fas fa-times delete-button');
        divCard.appendChild(cardButton);
        cardElement(divCard, "h2", post.title);
        cardElement(divCard, "p", post.body);
        var cardHolder = document.getElementById("cards-holder");
        cardHolder.appendChild(divCard);
      } // per la singola card


      var removeCards = document.querySelectorAll('.card');
      removeCards.forEach(function (removeCard) {
        removeCard.addEventListener('click', function (e) {
          removeCard.remove();
        });
      });
    }
  };
}

function cardElement(divCard, tag, titleBody) {
  // crea un tag con all'interno il testo e lo appende al div
  var cardTag = document.createElement(tag);
  var cardContent = document.createTextNode(titleBody);
  cardTag.appendChild(cardContent);
  divCard.appendChild(cardTag);
}

function removeAllCards() {
  // rimuove tutte le cards
  document.getElementById("cards-holder").innerHTML = "";
}

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