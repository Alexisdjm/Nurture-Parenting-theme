const carousel1 = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.container-items')

const arrownext = document.querySelector('.arrownext');
const arrowprev = document.querySelector('.arrowprev');
let direction1;

console.log(items.length());

arrownext.addEventListener('click', function() {
    console.log("next")
    
});

arrowprev.addEventListener('click', function() {
    console.log("prev")
    
});
