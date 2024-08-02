import { Swiper } from '../vendor';

import { Navigation } from 'swiper/modules';

export function initSlider() {
  const juriSwiper = new Swiper('.juri__swiper', {
    modules: [Navigation],

    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 500,
    autoHeight: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,

    navigation: {
      nextEl: '.juri__button--next',
      prevEl: '.juri__button--prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // when window width is >= 1366px
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        simulateTouch: false,
      },
    },
  });

  return juriSwiper;

}
export function initSwiper() {
  const reviewsSlider = new Swiper('.reviews__slider', {
    modules: [Navigation],
    direction: 'horizontal',
    initialSlide: 0,
    slidesPerView: 1,
    spaceBetween: 33,
    centeredSlides: true,
    grabCursor: true,
    focusableElements: '.juri__item',

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },

    breakpoints: {
      1366: {
        simulateTouch: false,
      }
    }
  });

  return reviewsSlider;

}
