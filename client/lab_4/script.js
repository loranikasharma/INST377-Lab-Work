/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */

let slidePosition = 0;
const slides = document.querySelectorAll('.carousel_item');
const totalSlides = slides.length;
document.querySelector('.Next').addEventListener('click', () => {
  moveToNextSlide();
});
document.querySelector('.Previous').addEventListener('click', () => {
  moveToPrevSlide();
});
function updateSlidePosition() {
  for (const slide of slides) {
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item--hidden');
  }

  slides[slidePosition].classList.add('carousel_item--visible');
}
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
}
function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
}
