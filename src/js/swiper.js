
import Swiper from 'swiper';
import 'swiper/css';

const gallerySwiperEl = document.querySelector('[data-gallery-swiper]');

if (gallerySwiperEl) {
  const swiper = new Swiper(gallerySwiperEl, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    allowTouchMove: true,
  });

  document.querySelectorAll('[data-gallery-card]').forEach(card => {
    card.addEventListener('click', e => {
      if (swiper.touches.diff !== 0) return;

      const rect = card.getBoundingClientRect();
      const clickX = e.clientX - rect.left;

      if (clickX < rect.width / 2) {
        swiper.slidePrev();
      } else {
        swiper.slideNext();
      }
    });
  });
}
