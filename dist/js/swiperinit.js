const mySwiper = new Swiper('.swiper-container', {
    effect: 'cube',
    // Optional parameters
    speed: 1000,
    // spaceBetween: 100,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.sliderPreviewSites__pagination',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.goNext',
        prevEl: '.goPrev',
    },

    autoplay: {
        delay: 10000,
    },

    // BREAKPOINTS!!!
// // Default parameters
// slidesPerView: 1,
// spaceBetween: 10,
// // Responsive breakpoints
// breakpoints: {
//   // when window width is >= 320px
//   320: {
//     slidesPerView: 2,
//     spaceBetween: 20
//   },
//   // when window width is >= 480px
//   480: {
//     slidesPerView: 3,
//     spaceBetween: 30
//   },
//   // when window width is >= 640px
//   640: {
//     slidesPerView: 4,
//     spaceBetween: 40
//   }
// }

});