const slider = tns({
  container: '.education-slider__sliders',
  prevButton: '.education-slider__button-back',
  nextButton: '.education-slider__button-next',
  item: 3,
  fixedWidth: 485,
  gutter: 40,
  center: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  mouseDrag: true,
  swipeAngle: false,
  speed: 1500,
  preventScrollOnTouch: 'force'
});




const lala = document.querySelector('.education-slider__button-back');
lala.addEventListener('click', (evt) => {
  evt.preventDefault();
  console.log('lala')
})
