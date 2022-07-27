const carousel1 = document.querySelector('.carousel-container');
const slider1 = document.querySelector('.upper-carousel-container');

const arrownext = document.querySelector('.arrownext');
const arrowprev = document.querySelector('.arrowprev');
let direction;

arrownext.addEventListener('click', function() {
  direction = -1;
  carousel1.style.justifyContent = 'flex-start';
  slider1.style.transform = 'translate(-40%)';  
});

arrowprev.addEventListener('click', function() {
  if (direction === -1) {
    direction = 1;
    slider1.appendChild(slider.firstElementChild);
  }
  carousel1.style.justifyContent = 'flex-end';    
  slider1.style.transform = 'translate(40%)';  
  
});