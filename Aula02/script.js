const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dotsContainer = document.getElementById('dots');
let current = 0;
slides.forEach((s, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot';
    dot.dataset.index = i;
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll('.dot');
function updateUI() {
    slides.forEach((s, i) => s.setAttribute('aria-hidden', i !== current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
}
function goTo(i) {
    current = (i + slides.length) % slides.length;
    updateUI();
}
prev.addEventListener('click', () => goTo(current - 1));
next.addEventListener('click', () => goTo(current + 1));
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') goTo(current - 1);
    else if (e.key === 'ArrowRight') goTo(current + 1);
});
goTo(0);