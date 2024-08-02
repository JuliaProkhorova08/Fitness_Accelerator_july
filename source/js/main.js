import { initVideo } from './init-video';
import { initPrice } from './init-price';
import { priceHover } from './price-hover';
import { initSlider, initSwiper } from './modules/slider';
import { initTabsAndAccordions } from './init-faq';
import { initialAccordion } from './init-accordion';
import { validateForm } from './modules/form-valid/form';


document.addEventListener('DOMContentLoaded', () => {
  initVideo();
  initPrice();
  priceHover();
  initSlider();
  initSwiper();
  validateForm('.form__contacts');
  initTabsAndAccordions();
  initialAccordion();

});
