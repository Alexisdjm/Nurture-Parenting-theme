const carousel1 = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.container-items')

const arrownext = document.querySelector('.arrownext');
const arrowprev = document.querySelector('.arrowprev');
let direction1;

items.forEach((i) => {
    console.log(i);
});

arrownext.addEventListener('click', function() {
    console.log("next")
    
});

arrowprev.addEventListener('click', function() {
    console.log("prev")
    
});
