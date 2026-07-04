import Accordion from 'accordion-js';

export default function initAccordion() {
 const accordion = new Accordion('[data-accordion]', {
    duration: 350,
    showMultiple: false,
  });

  accordion.open(0); 
}
