const initRevealSections = () => {
  const sections = document.querySelectorAll('main > section');

  if (!sections.length) {
    return;
  }

  if (!('IntersectionObserver' in window)) {
    sections.forEach(section => section.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  sections.forEach(section => {
    section.classList.add('reveal-section');
    observer.observe(section);
  });
};

export default initRevealSections;
