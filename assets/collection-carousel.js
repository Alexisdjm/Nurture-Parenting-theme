////////////////////////////////// collection carousel //////////////////////////////////////////////////////////

const carousel = document.querySelector('.carousel-container');
const slider = document.querySelector('.upper-carousel-container');

const arrownext = document.querySelector('.arrownext');
const arrowprev = document.querySelector('.arrowprev');
let direction;

arrownext.addEventListener('click', function() {
  direction = -1;
  carousel.style.justifyContent = 'flex-start';
  slider.style.transform = 'translate(-40%)';  
});

arrowprev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider.appendChild(slider.firstElementChild);
  }
  carousel.style.justifyContent = 'flex-end';    
  slider.style.transform = 'translate(40%)';  
  
});