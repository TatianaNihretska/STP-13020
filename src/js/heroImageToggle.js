import heroDefaultSrc from '../img/toy-room/hero.png';
import heroClickSrc from '../img/toy-room/hero_click.png';

const heroImageEl = document.querySelector('[data-hero-image]');

if (heroImageEl) {
  let isClickedImage = false;
  let isAnimating = false;

  const switchHeroImage = () => {
    if (isAnimating) {
      return;
    }

    isAnimating = true;
    heroImageEl.dataset.switching = 'true';

    window.setTimeout(() => {
      isClickedImage = !isClickedImage;
      heroImageEl.src = isClickedImage ? heroClickSrc : heroDefaultSrc;

      window.setTimeout(() => {
        heroImageEl.dataset.switching = 'false';
        isAnimating = false;
      }, 80);
    }, 180);
  };

  heroImageEl.addEventListener('click', switchHeroImage);

  heroImageEl.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    switchHeroImage();
  });
}
