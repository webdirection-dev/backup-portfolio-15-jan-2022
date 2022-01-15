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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/competence/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/competence/index.js":
/*!************************************!*\
  !*** ./src/js/competence/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carousel */ "./src/js/competence/modules/carousel.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/js/competence/modules/menu.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/filter */ "./src/js/competence/modules/filter.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/competence/modules/scrolling.js");




document.addEventListener('DOMContentLoaded', () => {
  "use strict"; // передаем аргументы напрямую

  Object(_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])('btnHideMenu', '.hamburger', '.header__nav', '.navbar__link', '.navbar__items'); // Передаем аргументы через объект

  Object(_modules_carousel__WEBPACK_IMPORTED_MODULE_0__["default"])({
    carouselSelector: '.carousel',
    listSelector: '.carousel__list',
    itemsSelector: '.carousel__item',
    nextArrow: '#carouselBtnRight',
    prevArrow: '#carouselBtnLeft',
    markerWidth: '#markerForWidth',
    indicatorsSelector: 'ol'
  });
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_2__["default"])({
    btnSelector: '.filter__btn',
    cardsParentSelector: '.competenceCard__wrap',
    cardWrapSelector: '.cards',
    jsHeightSelector: '.js',
    jsWidthSelector: '.competenceCard__desc'
  });
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_3__["default"])('.pageup');
});

/***/ }),

/***/ "./src/js/competence/modules/carousel.js":
/*!***********************************************!*\
  !*** ./src/js/competence/modules/carousel.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _technical_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technical_functions */ "./src/js/competence/modules/technical_functions.js");


function carousel(_ref) {
  let {
    carouselSelector,
    listSelector,
    itemsSelector,
    nextArrow,
    prevArrow,
    markerWidth,
    indicatorsSelector
  } = _ref;
  let carouselIndex = 1;
  let carouselOffset = 0;
  let slideTo = 0;
  const carousel = document.querySelector(carouselSelector),
        carouseList = document.querySelector(listSelector),
        carouselItems = document.querySelectorAll(itemsSelector),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        markerForWidth = document.querySelector(markerWidth),
        indicators = document.createElement(indicatorsSelector),
        // Создаем элементы ТОЧКИ
  dots = []; // Создаём массив
  // Добавляем список с точками

  carousel.append(indicators); // Стилизуем и добавляем точки

  for (let i = 0; i < carouselItems.length - 4; i++) {
    const dot = document.createElement('li');
    dot.setAttribute('data-slide-to', i + 1);
    dot.style.cssText = `
         box-sizing: content-box;
         flex: 0 1 auto;
         width: 30px;
         height: 6px;
         margin: 0 .3rem;
         cursor: pointer;
         background-color: #e05926;
         background-clip: padding-box;
         border-top: 1.5rem solid transparent;
         border-bottom: 10px solid transparent;
         opacity: .5;
         transition: opacity .6s ease;
      `;

    if (i == 0) {
      dot.style.opacity = "1";
    }

    dots.push(dot);
    indicators.append(dot);
  }

  indicators.style.cssText = `
      position: absolute;
      width: auto;
      top: 0;
      display: flex;
      justify-content: center;
      list-style: none;
      z-index: 15;
    `; // Кликкер вправо

  next.addEventListener('click', () => {
    if (carouselOffset >= Object(_technical_functions__WEBPACK_IMPORTED_MODULE_0__["deleteNotDigits"])(widthCategoryCard) * (carouselItems.length - 4)) {
      carouselOffset = 0;
    } else {
      carouselOffset += Object(_technical_functions__WEBPACK_IMPORTED_MODULE_0__["deleteNotDigits"])(widthCategoryCard);
    }

    if (carouselOffset == 0) {
      carouselOffset = 0;
    } else {
      carouselOffset = carouselOffset + 30; //30px marginRight
    }

    moveSlides();

    if (carouselIndex == carouselItems.length - 4) {
      carouselIndex = 1;
    } else {
      carouselIndex++;
    }

    paintingDots();
  }); // Кликкер влево

  prev.addEventListener('click', () => {
    if (carouselOffset == 0) {
      carouselOffset = Object(_technical_functions__WEBPACK_IMPORTED_MODULE_0__["deleteNotDigits"])(widthCategoryCard) * (carouselItems.length - 5) + (carouselItems.length - 4) * 30; // 30px - margin left
    } else {
      carouselOffset -= Object(_technical_functions__WEBPACK_IMPORTED_MODULE_0__["deleteNotDigits"])(widthCategoryCard);
    }

    if (carouselOffset == 0) {
      carouselOffset = 0;
    } else {
      carouselOffset = carouselOffset - 30;
    }

    moveSlides();

    if (carouselIndex == 1) {
      carouselIndex = carouselItems.length - 4;
    } else {
      carouselIndex--;
    }

    paintingDots();
  }); //   Кликер по точам

  dots.forEach(dot => {
    dot.addEventListener('click', e => {
      slideTo = e.target.getAttribute('data-slide-to');
      carouselIndex = slideTo;
      carouselOffset = Object(_technical_functions__WEBPACK_IMPORTED_MODULE_0__["deleteNotDigits"])(widthCategoryCard) * (slideTo - 1);
      dotMoveRight();
      paintingDots();
      moveSlides();
    });
  }); //------------------------------------------------------
  // Стили

  carouseList.style.width = 100 * carouselItems.length + "%"; // Вычисляем ширину indicators чтобы центровать внитри блока

  let widthDots = window.getComputedStyle(indicators).width; // Центруем кнопки

  indicators.style.right = `calc(50% - ${Object(_technical_functions__WEBPACK_IMPORTED_MODULE_0__["deleteNotDigits"])(widthDots) / 2}px)`; // Вычисляем ширину окна просмотра

  const widthCategoryCard = window.getComputedStyle(markerForWidth).width; //------------------------------------------------------
  // Технические функции
  // Движение слайдов по стрелкам

  function moveSlides() {
    carouseList.style.transform = `translateX(-${carouselOffset}px)`;
  } // Движение слайдов по точкам


  function dotMoveRight() {
    if (carouselOffset == 0) {
      carouselOffset = 0;
    } else {
      carouselOffset = carouselOffset + (slideTo - 1) * 30;
    }
  } // Красим точки слайлов


  function paintingDots() {
    dots.forEach(dot => dot.style.opacity = '0.5');
    dots[carouselIndex - 1].style.opacity = '1';
  }
}

/* harmony default export */ __webpack_exports__["default"] = (carousel);

/***/ }),

/***/ "./src/js/competence/modules/filter.js":
/*!*********************************************!*\
  !*** ./src/js/competence/modules/filter.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function filter(_ref) {
  let {
    btnSelector,
    cardsParentSelector,
    cardWrapSelector,
    jsHeightSelector,
    jsWidthSelector
  } = _ref;
  let dataFilter;
  const btns = document.querySelectorAll(btnSelector),
        cards = document.querySelectorAll(cardsParentSelector),
        cardsWrap = document.querySelector(cardWrapSelector),
        heightJsCard = document.querySelectorAll(jsHeightSelector),
        widthInfoCard = document.querySelectorAll(jsWidthSelector),
        widthDesc = document.querySelectorAll('.competenceCard__main'); // onclick

  btns.forEach(item => {
    item.addEventListener('click', function () {
      dataFilter = this.dataset.filter;
      filterCards(dataFilter); // Это растояние от кнопки "Перейти" до текстового блока

      widthDesc.forEach(item => {
        if (dataFilter === 'js' || dataFilter === 'react') {
          item.classList.remove('competenceCard__main');
          item.classList.add('competenceCard__heightJsCard');
        } else {
          item.classList.remove('competenceCard__heightJsCard');
          item.classList.add('competenceCard__main');
        }
      });
    });
  });

  function filterCards(dataFilter) {
    let offset = 0;
    const all = dataFilter === 'all',
          js = dataFilter === 'js',
          react = dataFilter === 'react',
          bootstrap = dataFilter === 'bootstrap',
          cms = dataFilter === 'cms'; // Сброс стилей

    cardsWrap.style.height = 'auto';
    widthInfoCard.forEach(item => {
      item.style.cssText = `
            background: radial-gradient(circle at left,rgba(0,0,0,.6) 0,#000 25%);
        `;
    });
    cards.forEach(item => {
      let check = item.classList.contains(dataFilter);
      item.classList.remove('competenceCard__js');
      item.classList.remove('scale-up-hor-right');
      item.classList.remove('scale-up-top');
      item.style.cssText = `
                display: none;
            `;

      if (check && all || check && (bootstrap || cms)) {
        setTimeout(() => {
          item.style.display = "block";
          item.classList.add('scale-up-top');
        }, 0);
      }

      if (check && js || check && react) {
        setTimeout(() => {
          // cardsWrap.style.height = `${(heightJsCard.length * 336) + (heightJsCard.length * 30)}px`;
          item.style.display = "block";
          item.classList.add('scale-up-top'); // item.classList.add('scale-up-hor-right');
          // item.classList.add('competenceCard__js');
          //
          //
          // widthInfoCard.forEach(item => {
          //     item.style.cssText = `
          //         background: #000;
          //     `;
          // });
        }, 0 + offset); // offset += 500;
      }
    });
    btns.forEach(item => {
      if (item.dataset.filter === dataFilter) {
        item.classList.add('filter__link-active');
      } else {
        item.classList.remove('filter__link-active');
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/competence/modules/menu.js":
/*!*******************************************!*\
  !*** ./src/js/competence/modules/menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _technical_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./technical_functions */ "./src/js/competence/modules/technical_functions.js");
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

/***/ "./src/js/competence/modules/scrolling.js":
/*!************************************************!*\
  !*** ./src/js/competence/modules/scrolling.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 940) {
      upElem.classList.add('animated', 'fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }
  });
  const element = document.documentElement,
        body = document.body;

  const calcScroll = () => {
    upElem.addEventListener('click', function (event) {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (this.hash !== '') {
        event.preventDefault();
        let hashElement = document.querySelector(this.hash),
            hashElementTop = 0;

        while (hashElement.offsetParent) {
          hashElementTop += hashElement.offsetTop;
          hashElement = hashElement.offsetParent;
        }

        hashElementTop = Math.round(hashElementTop);
        smoothScroll(scrollTop, hashElementTop, this.hash);
      }
    });
  };

  const smoothScroll = (from, to, hash) => {
    let timeInterval = 1,
        prevScrollTop,
        speed;

    if (to > from) {
      speed = 20;
    } else {
      speed = -20;
    }

    let move = setInterval(function () {
      let scrollTop = Math.round(body.scrollTop || element.scrollTop);

      if (prevScrollTop === scrollTop || to > from && scrollTop >= to || to < from && scrollTop <= to) {
        clearInterval(move);
        history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash);
      } else {
        body.scrollTop += speed;
        element.scrollTop += speed;
        prevScrollTop = scrollTop;
      }
    }, timeInterval);
  };

  calcScroll();
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/competence/modules/technical_functions.js":
/*!**********************************************************!*\
  !*** ./src/js/competence/modules/technical_functions.js ***!
  \**********************************************************/
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
//# sourceMappingURL=bundle_competence.js.map