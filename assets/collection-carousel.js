////////////////////////////////// collection carousel //////////////////////////////////////////////////////////

const productcontainer = [...document.querySelectorAll('.carousel-element')];

const arrownext = [...document.querySelectorAll('.arrownext')];
const arrowprev = [...document.querySelectorAll('.arrowprev')];

if (productcontainer) {
  productcontainer.forEach((item, i) => {
    let containerdimensions = item.getBoundingClientRect();
    let containerwidth = containerdimensions.width;
  
    arrownext[i].addEventListener('click', () => {
      item.scrollLeft += containerwidth;
    });
  
    arrowprev[i].addEventListener('click', () => {
      item.scrollLeft -= containerwidth;
    });
  }) 
}