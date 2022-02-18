/* eslint-disable no-plusplus */
let slidePosition = 0;
const slides = document.querySelectorAll('carousel_item');
const totalSlides = slides.length;
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  }
}
function moveToPrevSlide() {
  if (slidePosition === totalSlides) {
    slidePosition = 0;
  } else {
    slidePosition--;
  }
}
document.querySelector('carousel_button--next').addEventListener('click', () => {
  moveToNextSlide();
});
document.querySelector('carousel_button--prev').addEventListener('click', () => {
  moveToPrevSlide();
});

