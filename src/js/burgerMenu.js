const openBtnEl = document.querySelector('[data-action="open-menu"]');
const closeMenuEls = document.querySelectorAll('[data-action="close-menu"]');
const burgerMenuEl = document.querySelector('[data-menu]');
const headerEl = document.querySelector('[data-site-header]');
const isLegalPage = Boolean(document.querySelector('.legal-page'));

const setMenuState = state => {
  if (!burgerMenuEl || !openBtnEl) {
    return;
  }

  burgerMenuEl.dataset.visible = state;
  openBtnEl.setAttribute('aria-expanded', String(state === 'open'));
  document.body.dataset.menu = state;
};

openBtnEl?.addEventListener('click', () => {
  setMenuState('open');
});

closeMenuEls.forEach(element => {
  element.addEventListener('click', () => {
    setMenuState('close');
  });
});

window.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    setMenuState('close');
  }
});

const syncHeader = () => {
  if (headerEl) {
    headerEl.dataset.scrolled = String(isLegalPage || window.scrollY > 8);
  }
};

syncHeader();
window.addEventListener('scroll', syncHeader, { passive: true });
