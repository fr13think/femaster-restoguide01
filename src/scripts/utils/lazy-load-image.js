const createLazyImageTemplate = (imageSrc, altText) => `
  <img 
    class="lazyload" 
    data-src="${imageSrc}"
    data-srcset="${imageSrc}-small.jpg 480w, ${imageSrc}-large.jpg 800w, ${imageSrc}-xl.jpg 1200w"
    data-sizes="(max-width: 600px) 480px, (max-width: 1000px) 800px, 1200px"
    alt="${altText}"
  >
  <noscript>
    <img src="${imageSrc}" alt="${altText}">
  </noscript>
`;

const observeImages = () => {
  const imgTargets = document.querySelectorAll('img[data-src]');
  const loadImg = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const img = entry.target;
      img.src = img.dataset.src;
      img.srcset = img.dataset.srcset;
      img.sizes = img.dataset.sizes;
      img.classList.remove('lazy');
      observer.unobserve(img);
    });
  };

  const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '50px',
  });

  imgTargets.forEach(img => imgObserver.observe(img));
};

export { createLazyImageTemplate, observeImages };