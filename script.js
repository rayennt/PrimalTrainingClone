document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.menu');
  const nav = document.querySelector('.hidden-nav');
  const overlay = document.querySelector('.overlay');
  const header = document.querySelector('header');

  menuButton.addEventListener('click', function() {
    nav.classList.toggle('open');
    menuButton.classList.toggle('active');
    
    if (nav.classList.contains('open')) {
      header.style.backgroundColor = 'white';
    } else {
      header.style.backgroundColor = 'rgb(233,236,255)'; // Original color
    }
  });

  overlay.addEventListener('click', function() {
    nav.classList.remove('open');
    menuButton.classList.remove('active');
    header.style.backgroundColor = 'rgb(233,236,255)'; // Revert to original
  });
});