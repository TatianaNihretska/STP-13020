import Accordion from 'accordion-js';

export default function initAccordion() {
 const accordion = new Accordion('.faq-accordion-container', {
    duration: 350,
    showMultiple: false,
  });

  accordion.open(0); 
}