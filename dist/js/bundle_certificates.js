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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/certificates/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/certificates/index.js":
/*!**************************************!*\
  !*** ./src/js/certificates/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ "./src/js/certificates/modules/menu.js");
/* harmony import */ var _modules_gallery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gallery */ "./src/js/certificates/modules/gallery.js");


document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_0__["default"])('btnHideMenu', '.hamburger', '.header__nav', '.navbar__link', '.navbar__items');
  Object(_modules_gallery__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/certificates/modules/gallery.js":
/*!************************************************!*\
  !*** ./src/js/certificates/modules/gallery.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const gallery = () => {
  let popupIndex = 0;
  const imgPopup = document.createElement('div'),
        workSection = document.querySelectorAll('.certificates__items'),
        cards = document.querySelectorAll('.certificates__item'),
        popup = document.querySelectorAll('.certificates__popup'),
        bigImage = document.createElement('img'); // рендерим слайдер в html

  imgPopup.classList.add('popup');
  workSection.forEach(item => {
    item.appendChild(imgPopup);
  });
  imgPopup.appendChild(bigImage); // стили для слайдера

  imgPopup.style.display = 'none';
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  workSection.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault(); // отключаем стандартное поведение браузера

      const target = event.target;

      if (target && target.classList.contains('certificates__img')) {
        imgPopup.classList.remove('fadeIn-opacity');
        popup[popupIndex].style.display = 'none';
        imgPopup.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        bigImage.classList.remove('scale-down-center');
        bigImage.classList.add('imgCertificate', 'scale-up-center');
        const path = target.attributes.src.nodeValue;
        bigImage.setAttribute('src', path);
      } // matches() - метод ищущий совпадения. Передаем селектор div с классом popup


      if (target && target.matches('div.popup')) {
        bigImage.classList.remove('scale-up-center');
        bigImage.classList.add('scale-down-center');
        imgPopup.classList.add('fadeIn-opacity');
        setTimeout(function () {
          imgPopup.style.display = 'none';
          document.body.style.overflow = '';
        }, 250);
      }
    });
  });
  cards.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
      popupIndex = index;
      popup[index].style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
      popup[index].style.display = 'none';
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (gallery);

/***/ }),

/***/ "./src/js/certificates/modules/menu.js":
/*!*********************************************!*\
  !*** ./src/js/certificates/modules/menu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _technical_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technical_functions */ "./src/js/certificates/modules/technical_functions.js");
 // Основное Меню

function menu(btnHideMenuSelector, hamburgerSelector, navBarSelector, navLincksSelector, opacitiNavbarItemSelector) {
  const btnHideMenu = document.getElementById(btnHideMenuSelector),
        hamburger = document.querySelectorAll(hamburgerSelector),
        navBar = document.querySelector(navBarSelector),
        navLincks = document.querySelectorAll(navLincksSelector),
        opacitiNavbarItem = document.querySelector(opacitiNavbarItemSelector);
  btnHideMenu.addEventListener('click', () => {
    navBar.classList.remove('hideMenu');

    if (!navBar.classList.contains('showMenu')) {
      navBar.classList.add('showMenu');
    } else {
      navBar.classList.remove('showMenu');
      navBar.classList.add('hideMenu');
    }

    navBar.style.display = 'flex';
    navBar.classList.add('competenceBorder');
    btnHideMenu.classList.toggle('change');
    btnHideMenu.classList.toggle('hideBtnCloseMenu');
    opacitiNavbarItem.classList.toggle('opacityShow');
  }); // Красим ссылки главного меню  и гамбургер

  Object(_technical_functions__WEBPACK_IMPORTED_MODULE_0__["addClassesToArrayElements"])(navLincks, 'competenceLinks');
  Object(_technical_functions__WEBPACK_IMPORTED_MODULE_0__["addClassesToArrayElements"])(hamburger, 'competenceHamburger');
}

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./src/js/certificates/modules/technical_functions.js":
/*!************************************************************!*\
  !*** ./src/js/certificates/modules/technical_functions.js ***!
  \************************************************************/
/*! exports provided: addClassesToArrayElements, deleteNotDigits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClassesToArrayElements", function() { return addClassesToArrayElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNotDigits", function() { return deleteNotDigits; });
// Красим ссылки главного меню  и гамбургер
function addClassesToArrayElements(arr, classElem) {
  arr.forEach(i => {
    i.classList.add(classElem);
  });
} // Проверяем строки и оставляет в них только цифры


function deleteNotDigits(str) {
  return +str.replace(/\D/g, '');
}



/***/ })

/******/ });
//# sourceMappingURL=bundle_certificates.js.map