//     emoji  intersecting observer part    
$(document).ready(function(){
  $('.carousel').carousel();
});

//intersecting observer for cards
const emojiCards = document.querySelectorAll('.emoji-card');
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible', 'animated');
    }
  });
}, {
  threshold: 0.5
});

emojiCards.forEach(card => observer.observe(card));

// Disconnecting observer after all elements hav animated
window.addEventListener('scroll', () => {
  const visibleElements = document.querySelectorAll('.emoji-card.visible');
  if (visibleElements.length === emojiCards.length) {
    observer.disconnect();
  }
});

// Hover Effect for Play Game Button
const playGameBtn = document.querySelector('.play-game');

playGameBtn.addEventListener('mouseenter', () => {
  playGameBtn.classList.add('hovered');
});

playGameBtn.addEventListener('mouseleave', () => {
  playGameBtn.classList.remove('hovered');
});
