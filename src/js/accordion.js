import Accordion from 'accordion-js';

export default function initAccordion() {
  const accordionEl = document.querySelector('[data-accordion]');

  if (!accordionEl) {
    return;
  }

  const accordion = new Accordion(accordionEl, {
    duration: 350,
    showMultiple: false,
  });

  accordion.open(0);
}
