

// Intersection Observer for Feature Cards
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});

featureCards.forEach(card => {
  observer.observe(card);
});

// Hover Effect for Play Game Button
const playGameBtn = document.querySelector('.play-game');

playGameBtn.addEventListener('mouseenter', () => {
  playGameBtn.classList.add('hovered');
});

playGameBtn.addEventListener('mouseleave', () => {
  playGameBtn.classList.remove('hovered');
});
