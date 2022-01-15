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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/start/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/start/index.js":
/*!*******************************!*\
  !*** ./src/js/start/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_start__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/start */ "./src/js/start/modules/start.js");
/* harmony import */ var _modules_technical__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/technical */ "./src/js/start/modules/technical.js");
/* harmony import */ var _modules_slidersPugCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slidersPugCards */ "./src/js/start/modules/slidersPugCards.js");



document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  Object(_modules_start__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Основное Меню

  const btnHideMenu = document.getElementById('btnHideMenu'),
        navBar = document.querySelector('.header__nav'),
        opacitiNavbarItem = document.querySelector('.navbar__items'); // Кнопка основного меню. Свернуть/развернуь меню

  btnHideMenu.addEventListener('click', () => {
    navBar.classList.remove('hideMenu');

    if (!navBar.classList.contains('showMenu')) {
      navBar.classList.add('showMenu');
    } else {
      navBar.classList.remove('showMenu');
      navBar.classList.add('hideMenu');
    }

    navBar.style.display = 'flex';
    btnHideMenu.classList.toggle('change');
    btnHideMenu.classList.toggle('hideBtnCloseMenu');
    opacitiNavbarItem.classList.toggle('opacityShow');
  }); // Интерактив
  // Кнопка раскрывающая интерактивный блок

  const closeInteractive = document.querySelectorAll('.interactive__header'),
        iconInteractive = document.querySelectorAll('.interactive__icon');

  function switchIconIneractive() {
    iconInteractive.forEach(i => {
      i.classList.remove('rotate-anti-90');

      if (!i.classList.contains('rotate-90-ccw')) {
        i.classList.add('rotate-90-ccw');
      } else {
        i.classList.remove('rotate-90-ccw');
        i.classList.add('rotate-anti-90');
      }
    });
  } // Показать/скрыть блок Интерактив


  const showInteractive = document.querySelectorAll('.interactive__content'),
        opacityTextInteractive = document.querySelectorAll('.interactive__desc');
  closeInteractive.forEach(item => {
    item.addEventListener('click', () => {
      showHideInteractive();
      cololrTextInteractive();
      switchIconIneractive();
    });
  });

  function showHideInteractive() {
    showInteractive.forEach(item => {
      item.classList.remove('hideInteractive');

      if (!item.classList.contains('showInteractive')) {
        item.classList.add('showInteractive');
      } else {
        setTimeout(function () {
          item.classList.remove('showInteractive');
        }, 400);
        item.classList.add('hideInteractive');
      }
    });
  }

  function cololrTextInteractive() {
    opacityTextInteractive.forEach(item => {
      item.classList.remove('toWhiteText22');

      if (!item.classList.contains('toBlackText')) {
        item.classList.add('toBlackText');
      } else {
        item.classList.remove('toBlackText');
        item.classList.add('toWhiteText22');
      }
    });
  }

  function allInteractiveForNextSlide() {
    iconInteractive.forEach(i => {
      i.classList.remove('rotate-90-ccw');
      i.classList.remove('rotate-anti-90');
    });
    showInteractive.forEach(item => {
      item.classList.remove('showInteractive');
      item.classList.add('hideInteractive');
    });
    opacityTextInteractive.forEach(item => {
      item.classList.remove('toWhiteText22');
      item.classList.remove('toBlackText');
    });
  }

  Object(_modules_technical__WEBPACK_IMPORTED_MODULE_1__["default"])(); // Слайдер. Перелистываем содержание Презентации

  const nextSlidePresentation = document.querySelectorAll('.nextSlidePresentation');
  let nextSlidePresentationIndex = 0; // Скрываем лишние призентации

  function hideNextSlidePresentation() {
    nextSlidePresentation.forEach(item => {
      item.style.display = "none";
    });
  } // Показать нужную призентацию


  function showNextSlidePresentation() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    nextSlidePresentation[i].style.display = "block";
  }

  hideNextSlidePresentation();
  showNextSlidePresentation(); // зациклить Презентацию

  function counterPresentsSlidesIndex() {
    if (nextSlidePresentationIndex >= nextSlidePresentation.length) {
      nextSlidePresentationIndex = 0;
    } else if (nextSlidePresentationIndex < 0) {
      nextSlidePresentationIndex = nextSlidePresentation.length - 1;
    }
  } // Блоки призентации


  const btnLeft = document.querySelector('#leftPresentSlide'),
        btnRight = document.querySelector('#rightPresentSlide'),
        presentContent = document.querySelectorAll('.pages__desktop .pages__desc');
  let presentIndex = 0;
  let indexColorNavLincks = 0; // Скрываем лишние блоки

  function hidePresentContent() {
    presentContent.forEach(item => {
      item.style.display = "none";
    });
  } // Показать нужный блок


  function showPresentContent() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    presentContent[i].style.display = "block";
  }

  hidePresentContent();
  showPresentContent(); // Зацикливает слайдер

  function counterPresentsSlides() {
    if (presentIndex >= presentContent.length) {
      presentIndex = 0;
    } else if (presentIndex < 0) {
      presentIndex = presentContent.length - 1;
    }
  } // Кнопки переключатили блоков


  btnLeft.addEventListener('click', () => {
    indexColorNavLincks -= 1;
    counterColorNavLincks();
    removeColorNavLincks();
    addColorNavLincks();
    hideCardJs();
    showFirstCardJs();
    clearCounterCardJs();
    hidePresentContent();
    allInteractiveForNextSlide();
    hideNextSlidePresentation();
    presentIndex = presentIndex - 1;
    nextSlidePresentationIndex = nextSlidePresentationIndex - 1;
    counterPresentsSlides();
    counterPresentsSlidesIndex();
    actualNumberSlide();
    presentContent[presentIndex].style.display = "block";
    nextSlidePresentation[nextSlidePresentationIndex].style.display = "block";
  });
  btnRight.addEventListener('click', () => {
    indexColorNavLincks += 1;
    counterColorNavLincks();
    removeColorNavLincks();
    addColorNavLincks();
    hideCardJs();
    showFirstCardJs();
    clearCounterCardJs();
    hidePresentContent();
    allInteractiveForNextSlide();
    hideNextSlidePresentation();
    presentIndex = presentIndex + 1;
    nextSlidePresentationIndex = nextSlidePresentationIndex + 1;
    counterPresentsSlides();
    counterPresentsSlidesIndex();
    actualNumberSlide();
    presentContent[presentIndex].style.display = "block";
    nextSlidePresentation[nextSlidePresentationIndex].style.display = "block";
  }); // Счетчики

  const totalPages = document.querySelector('#totalPages'),
        currentPage = document.querySelector('#currentPage'); // Счетчик общего кол-ва слайдов

  totalPages.innerHTML = presentContent.length; // Отображение текущего слайда

  function actualNumberSlide() {
    currentPage.innerHTML = presentIndex + 1;
  } // КРАСИМ
  // Красим ссылки главного меню


  const navLincks = document.querySelectorAll('.navbar__link'),
        pagesTitle = document.querySelectorAll('.pages__title'),
        hamburger = document.querySelectorAll('.hamburger'),
        moreLink = document.querySelectorAll('.interactive__link'),
        borderButtonHide = document.querySelector('.hide-menu'); // Массив с классами для покраски

  const classesForPaintArr = ['htmlColor', 'jsColor', 'cmsColor', 'devOpsColor'],
        hambArr = ['htmlHamburger', 'jsHamburger', 'cmsHamburger', 'devOpsHamburger'],
        borderForNavMenuArr = ['htmlBorder', 'jsBorder', 'cmsBorder', 'devOpsBorder'],
        borderForNavButtonArr = ['htmlBtn', 'jsBtn', 'cmsBtn', 'devOpsBtn']; // удаляем все классы покраски / обнуляем цвета у ССЫЛОК МЕНЮ

  function removeColorNavLincks() {
    navLincks.forEach(removeClassesToNav);
    moreLink.forEach(removeClassesToNav);
    pagesTitle.forEach(removeClassesToNav);
    hamburger.forEach(removeBackgruondHamburger);
    removeBorderToNav();
  } //Добавляем цвета / красим у ССЫЛОК МЕНЮ


  function addColorNavLincks() {
    navLincks.forEach(addClassesToNav);
    moreLink.forEach(addClassesToNav);
    pagesTitle.forEach(addClassesToNav);
    hamburger.forEach(addBackgruondHamburger);
    addBorderToNav();
  } // Функция для удаления классов покраски


  function removeClassesToNav(item) {
    item.classList.remove(classesForPaintArr[0], classesForPaintArr[1], classesForPaintArr[2], classesForPaintArr[3]);
  } // Функция для покраски элементов меню


  function addClassesToNav(item) {
    item.classList.add(`${classesForPaintArr[indexColorNavLincks]}`);
  } // Функция для удаления нижнего бордера


  function removeBorderToNav() {
    navBar.classList.remove(borderForNavMenuArr[0], borderForNavMenuArr[1], borderForNavMenuArr[2], borderForNavMenuArr[3]);
    borderButtonHide.classList.remove(borderForNavButtonArr[0], borderForNavButtonArr[1], borderForNavButtonArr[2], borderForNavButtonArr[3]);
  } // Функция для покраски нижнего бордера


  function addBorderToNav() {
    navBar.classList.add(`${borderForNavMenuArr[indexColorNavLincks]}`);
    borderButtonHide.classList.add(`${borderForNavButtonArr[indexColorNavLincks]}`);
  } // Функция для удаления бэкграунда гамбургера


  function removeBackgruondHamburger(item) {
    item.classList.remove(hambArr[0], hambArr[1], hambArr[2], hambArr[3]);
  } // Функция для покраски бэкграунда гамбургера


  function addBackgruondHamburger(item) {
    item.classList.add(`${hambArr[indexColorNavLincks]}`);
  } // Зацикливает indexColorNavLincks


  function counterColorNavLincks() {
    if (indexColorNavLincks >= classesForPaintArr.length) {
      indexColorNavLincks = 0;
    } else if (indexColorNavLincks < 0) {
      indexColorNavLincks = classesForPaintArr.length - 1;
    }
  }

  removeColorNavLincks();
  addColorNavLincks(); // Диначическое создание карточек
  // Используем классы для карточек меню
  // ...classes - rest оператор который позволит добалять различные css стили через css классы

  class CardForJs {
    constructor(src, alt, title, lableClass, lableClass2, lableTxt, subtitle, position, desc, statistic, link1, link2) {
      this.parentSelectorJs = document.querySelector('.sliderWidthJsCard');

      for (var _len = arguments.length, classes = new Array(_len > 12 ? _len - 12 : 0), _key = 12; _key < _len; _key++) {
        classes[_key - 12] = arguments[_key];
      }

      this.classes = classes; //здесь будет массив классов css

      this.src = src;
      this.alt = alt;
      this.title = title;
      this.lableClass = lableClass;
      this.lableClass2 = lableClass2;
      this.lableTxt = lableTxt;
      this.subtitle = subtitle;
      this.position = position;
      this.desc = desc;
      this.statistic = statistic;
      this.link1 = link1;
      this.link2 = link2;
    } // метод создающий верстку для карточки и помещающий верстку на страницу


    render() {
      const elem = document.createElement('div');

      if (this.classes.length === 0) {
        this.elem = 'nextSlidePresentation__card';
        elem.classes.add(this.elem);
      } else {
        // вытащим классы из верстки через forEach
        this.classes.forEach(className => {
          elem.classList.add(className);
        });
      }

      elem.innerHTML = `
            <img class="nextSlidePresentation__img" src=${this.src} alt=${this.alt}>
            <div class="nextSlidePresentation__desc">
               <div class="nextSlidePresentation__main">
                  <h3 class="nextSlidePresentation__title">${this.title}</h3>
                  <div class="nextSlidePresentation__lable">
                        <div class="nextSlidePresentation__icon ${this.lableClass}">
                           <div class="nextSlidePresentation__iconTxt ${this.lableClass2}">${this.lableTxt}</div>
                        </div>
                        <div class="nextSlidePresentation__lableDesc">
                           <h4 class="nextSlidePresentation__subtitle">${this.subtitle}</h4>
                           <div class="nextSlidePresentation__position">${this.position}</div>
                        </div>
                     </div>
                     <div class="nextSlidePresentation__txt">${this.desc}</div>
                     <div class="nextSlidePresentation__statistic">${this.statistic}</div>
               </div>
               <div class="nextSlidePresentation__footer">
                  <a target='_blank' class="nextSlidePresentation__link" href=${this.link1}>Перейти к проекту</a>
                  <a target='_blank' class="nextSlidePresentation__link nextSlidePresentation__link-lightColor" href=${this.link2}>Больше примеров</a>
               </div>
            </div>
         `;
      this.parentSelectorJs.append(elem);
    }

  } // Карточка JS


  new CardForJs("./img/jsCard.jpg", "...", "Java Script", "nextSlidePresentation__icon-js", "nextSlidePresentation__iconTxt-js", "JS", "Лендинг", "Классический стиль", "Модальные окна. Отправка данных на сервер. Табы. Форма-калькулятор. Таймер. Галерея изображений", "Нативный JS", "./modules/windows/index.html", "./competence.html", 'nextSlidePresentation__card', //Дефолтный css класс Родитель для обвертки карточки
  'slide-left').render(); // Карточка React

  new CardForJs("./img/reactCard.jpg", "...", "Advanced React Patterns", "nextSlidePresentation__icon-ra", "nextSlidePresentation__iconTxt-ra", "Ra", "React", "Junior", "Simplify large React applications by separating your component logic, state and display properties to make React components more flexible and usable!", "3 hours, 46 minutes", "#", "#", 'nextSlidePresentation__card', //Дефолтный css класс Родитель для обвертки карточки
  'slide-left').render(); // Карточка Angular

  new CardForJs("./img/angularCard.jpg", "...", "Angular Core", "nextSlidePresentation__icon-an", "nextSlidePresentation__iconTxt-an", "A", "Angular", "Junior", "Use the Angular CLI to quickstart our app and then build components, templates, routes, forms, and use ajax in Angular.", "4 hours, 59 minutes", "#", "#", 'nextSlidePresentation__card', //Дефолтный css класс Родитель для обвертки карточки
  'slide-left').render(); // Слайды для карточек JS

  const cardJs = document.querySelectorAll('.nextSlidePresentation__card'),
        cardJsPrev = document.querySelector('#prevCardJs'),
        cardJsNext = document.querySelector('#nextCardJs');
  let cardJsIndex = 0; // Отлючаем все карточки

  function hideCardJs() {
    cardJs.forEach(item => {
      item.style.display = "none";
    });
  } //Включаем первую карточку


  function showFirstCardJs() {
    let i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    cardJs[0].style.display = "block";
  }

  hideCardJs();
  showFirstCardJs(); // ФункцияЗацикливает слайдер карточек

  function counterCardJs() {
    if (cardJsIndex >= cardJs.length) {
      cardJsIndex = 0;
    } else if (cardJsIndex < 0) {
      cardJsIndex = cardJs.length - 1;
    }
  } // Кнопки переключатили карточек JS


  cardJsPrev.addEventListener('click', () => {
    hideCardJs();
    cardJsIndex = cardJsIndex - 1;
    counterCardJs();
    actualNumberCardJs();
    cardJs[cardJsIndex].style.display = "block";
  });
  cardJsNext.addEventListener('click', () => {
    hideCardJs();
    cardJsIndex = cardJsIndex + 1;
    counterCardJs();
    actualNumberCardJs();
    cardJs[cardJsIndex].style.display = "block";
  }); // Счетчики карточек JS

  const totalCards = document.querySelector('#totalCards'),
        currentCard = document.querySelector('#currentCard'); // Счетчик общего кол-ва слайдов

  totalCards.innerHTML = cardJs.length; // Отображение текущего слайда

  function actualNumberCardJs() {
    currentCard.innerHTML = cardJsIndex + 1;
  } // Обнулим счетчик показа карточек JS


  function clearCounterCardJs() {
    cardJsIndex = 0;
    currentCard.innerHTML = cardJsIndex + 1;
  } // Слайдер для карточек из Pug (Csm, etc)


  Object(_modules_slidersPugCards__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

/***/ }),

/***/ "./src/js/start/modules/slidersPugCards.js":
/*!*************************************************!*\
  !*** ./src/js/start/modules/slidersPugCards.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slidersPugCards = () => {
  // Для карточек, собранных из Pug (Csm)
  let indexCsmCard = 0;
  const sldesCms = document.querySelectorAll('.nextSlidePresentation__csm'),
        prevCsm = document.querySelector('#prevCardCsm'),
        nextCsm = document.querySelector('#nextCardCsm'),
        currentCsm = document.querySelector('#currentCardCsm'),
        totalCsm = document.querySelector('#totalCardsCsm'); // Для карточек, собранных из Pug (DevOps)

  let indexDevOpsCard = 0;
  const sldesDevOps = document.querySelectorAll('.nextSlidePresentation__devOps'),
        prevDevOps = document.querySelector('#prevDevOps'),
        nextDevOps = document.querySelector('#nextDevOps'),
        currentDevOps = document.querySelector('#currentCardDevOps'),
        totalDevOps = document.querySelector('#totalCardsDevOps');
  showSlidesCms(indexCsmCard);
  showSlidesDevOps(indexDevOpsCard);
  addZeroToTotal(sldesCms, totalCsm);
  addZeroToTotal(sldesDevOps, totalDevOps);

  function showSlidesCms(n) {
    if (n > sldesCms.length - 1) {
      indexCsmCard = 0;
    } else if (n < 0) {
      indexCsmCard = sldesCms.length - 1;
    }

    showSlides(sldesCms, indexCsmCard, currentCsm);
  }

  function showSlidesDevOps(n) {
    if (n > sldesDevOps.length - 1) {
      indexDevOpsCard = 0;
    } else if (n < 0) {
      indexDevOpsCard = sldesDevOps.length - 1;
    }

    showSlides(sldesDevOps, indexDevOpsCard, currentDevOps);
  } // Кнопками CMS


  prevCsm.addEventListener('click', () => {
    showSlidesCms(indexCsmCard -= 1);
  });
  nextCsm.addEventListener('click', () => {
    showSlidesCms(indexCsmCard += 1);
  }); // Кнопками DevOps

  prevDevOps.addEventListener('click', () => {
    showSlidesDevOps(indexDevOpsCard -= 1);
  });
  nextDevOps.addEventListener('click', () => {
    showSlidesDevOps(indexDevOpsCard += 1);
  }); // Технические
  // Добавляем нолик к счетчикам не 1, 2.. а 01, 02...

  function addZeroToTotal(elem, totalCounter) {
    if (elem.length < 10) {
      totalCounter.textContent = `0${elem.length}`;
    } else {
      totalCounter.textContent = elem.length;
    }
  } // Листает слайды


  function showSlides(elem, indexCard, currentCounter) {
    elem.forEach(item => {
      item.style.display = "none";
    });
    elem[indexCard].style.display = "block";

    if (elem.length < 10) {
      currentCounter.textContent = `0${indexCard + 1}`;
    } else {
      currentCounter.textContent = indexCard + 1;
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (slidersPugCards);

/***/ }),

/***/ "./src/js/start/modules/start.js":
/*!***************************************!*\
  !*** ./src/js/start/modules/start.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const start = () => {
  // Появление стартовой страницы
  setTimeout(function startAvatarAnimation() {
    const avatar = document.querySelector('.start__avatar');
    let opacityAvatarCount = 0;
    const opacityAvatarId = setInterval(frameOpacity, 50); //500 - время работы setInterval

    function frameOpacity() {
      if (opacityAvatarCount == 1) {
        clearInterval(opacityAvatarId);
      } else {
        opacityAvatarCount = opacityAvatarCount + 0.1;
        avatar.style.opacity = opacityAvatarCount;
      }
    }
  }, 500); // Скрытие стартовой страницв

  const startPage = document.querySelector('.start'),
        headMenu = document.querySelector('.header'),
        page = document.querySelector('.pages'),
        mainPage = document.querySelector('.mainPage');
  setTimeout(function () {
    startPage.style.display = 'none';
    headMenu.style.display = 'block';
    page.style.marginTop = '0';
    mainPage.style.marginTop = '0';
  }, 6000);
};

/* harmony default export */ __webpack_exports__["default"] = (start);

/***/ }),

/***/ "./src/js/start/modules/technical.js":
/*!*******************************************!*\
  !*** ./src/js/start/modules/technical.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const technical = () => {
  // мониторим высоту экрана и располагаем кнопки управления относительно такой высоты
  const windiwHeight = document.documentElement.clientHeight,
        heghtSpacer = document.querySelector('.pages__container');
  let standardHeght = 0;

  function heightMyPage(heightAllElem, measure) {
    let height = windiwHeight - heightAllElem;
    standardHeght = height + measure;
    heghtSpacer.style.height = standardHeght;
  }

  heightMyPage(125, "px");
};

/* harmony default export */ __webpack_exports__["default"] = (technical);

/***/ })

/******/ });
//# sourceMappingURL=bundle_start.js.map