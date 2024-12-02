import { Swiper } from '../vendor';

import { Navigation, Pagination } from 'swiper/modules';

export function initSlider() {
  const catalogSwiper = new Swiper('.catalog__swiper', {
    modules: [Navigation, Pagination],

    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    speed: 500,
    autoHeight: true,
    watchSlidesProgress: true,
    observer: true,
    observeParents: true,

    pagination: {
      el: '.catalog__pagination',
      clickable: true,
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        initialSlide: 0,
      },
    },
  });

  return catalogSwiper;

}
