const tri = document.querySelector('.tri');
const tc = document.querySelector('.tc');
const tk = document.querySelector('.tk');
const photo1 = document.querySelector('.photo1');
const photo2 = document.querySelector('.photo2');

let moved = false;

tri.addEventListener('click', () => {
    if (!moved) {
        photo1.style.zIndex = '0';
        photo2.style.zIndex = '0';
        photo1.style.transform = 'translateX(10vw) translateY(1vh) scale(0.9)'; 
        photo2.style.transform = 'translateX(-10vw)';
    } else {
        photo1.style.zIndex = '1';
        photo2.style.zIndex = '0';
        photo1.style.transform = 'translateX(0) translateY(0)';
        photo2.style.transform = 'translateX(0)';
    }
    moved = !moved;
});

// Fade in on scroll
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in-on-scroll').forEach(el => observer.observe(el));
});
