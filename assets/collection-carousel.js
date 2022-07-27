const carousel1 = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.container-items')

const arrownext = document.querySelector('.arrownext');
const arrowprev = document.querySelector('.arrowprev');
let direction1;

items.forEach((item) => {
    let containerdimensions = item.getBoundingClientRect();
    let containerwidth = containerdimensions.width;

    arrownext.addEventListener('click', function() {
        console.log("next")
        item.scrollLeft += containerwidth;
    });
    
    arrowprev.addEventListener('click', function() {
        console.log("prev")
        item.scrollLeft -= containerwidth;
    });
});
