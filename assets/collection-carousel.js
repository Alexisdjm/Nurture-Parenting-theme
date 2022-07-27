////////////////////////////////// collection carousel //////////////////////////////////////////////////////////

const productcontainer = [...document.querySelectorAll('.carousel-element')];

const arrownext = [...document.querySelectorAll('.arrownext')];
const arrowprev = [...document.querySelectorAll('.arrowprev')];

productcontainer.forEach((item, i) => {
  let containerdimensions = item.getBoundingClientRect();
  let containerwidth = containerdimensions.width;
    console.log(arrownext[i])
  arrownext[i].addEventListener('click', () => {
    console.log("funciona")
  });

  arrowprev[i].addEventListener('click', () => {
    item.scrollLeft -= containerwidth;
  });
}) 