import Swiper, { Navigation } from 'swiper';

Swiper.use(Navigation)

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    grabCursor: true,
    slidesPerView: 2,
    spaceBetween: 28,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1440: {
            slidesPerView: 3,
            spaceBetween: 35,
        }
    }
  });