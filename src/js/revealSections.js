const initRevealSections = () => {
  const sections = document.querySelectorAll('main > section');

  if (!sections.length) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    sections.forEach(section => {
      section.dataset.reveal = 'visible';
    });
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.dataset.reveal = 'visible';
        } else {
          entry.target.dataset.reveal = 'hidden';
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  sections.forEach(section => {
    section.dataset.reveal = 'hidden';
    observer.observe(section);
  });
};

export default initRevealSections;
