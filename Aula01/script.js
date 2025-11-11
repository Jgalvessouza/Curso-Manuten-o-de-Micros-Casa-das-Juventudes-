// Carousel manual — slides textuais (Colossus + 1ª → 5ª geração)
// Navegação por botões, por indicadores (dots) e por teclas ← e →

(function () {
  const slides = Array.from(document.querySelectorAll('.slide'));
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsContainer = document.getElementById('dots');
  const slidesWrapper = document.getElementById('slides');

  let current = 0;

  // cria dots
  slides.forEach((s, i) => {
    const btn = document.createElement('button');
    btn.className = 'dot';
    btn.setAttribute('aria-label', `Ir para slide ${i + 1}`);
    btn.setAttribute('data-index', i);
    btn.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(btn);
  });

  const dots = Array.from(dotsContainer.children);

  function updateUI() {
    slides.forEach((s, i) => {
      s.setAttribute('aria-hidden', i === current ? 'false' : 'true');
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    // manter foco visual no wrapper para a navegação por teclado
    slidesWrapper.focus();
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    updateUI();
  }

  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));

  // teclas ← e →
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowLeft') {
      ev.preventDefault();
      goTo(current - 1);
    } else if (ev.key === 'ArrowRight') {
      ev.preventDefault();
      goTo(current + 1);
    }
  });

  // inicializa
  goTo(0);
})();
