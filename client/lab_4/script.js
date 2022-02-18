/* eslint-disable no-plusplus */
let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;
function updateSlidePosition() {
  // eslint-disable-next-line no-restricted-syntax
  for (const slide of slides) {
    slide.classList.remove('.carousel_item--visible');
    slide.classList.add('.carousel_item--hidden');
  }
  // eslint-disable-next-line no-unused-expressions
  slides[slidePosition].classList.add('.carousel_item--visible');
}
function moveToNextSlide() {
  if (slidePosition === totalSlides) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}
function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides-1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
document.querySelector('.test2').addEventListener('click', () => {
  moveToNextSlide();
});
document.querySelector('.test1').addEventListener('click', () => {
  moveToPrevSlide();
});
