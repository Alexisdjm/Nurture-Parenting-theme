////////////////////////////////// collection carousel //////////////////////////////////////////////////////////

const productcontainer = [...document.querySelectorAll('.carousel-element')];

const arrownext = [...document.querySelector('.arrownext')];
const arrowprev = [...document.querySelector('.arrowprev')];

productcontainer.forEach((item) => {
  let containerdimensions = item.getBoundingClientRect();
  let containerwidth = containerdimensions.width;

  arrownext.addEventListener('click', () => {
    console.log("funciona")
    item.scrollLeft += containerwidth;
  });

  arrowprev.addEventListener('click', () => {
    console.log("funciona")
    item.scrollLeft -= containerwidth;
  });
}) 