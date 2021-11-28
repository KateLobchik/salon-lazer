const slider = document.querySelector('.education-slider__sliders');

if (slider) {
  
  const slider = tns({
    container: '.education-slider__sliders',
    prevButton: '.education-slider__button-back',
    nextButton: '.education-slider__button-next',
    item: 3,
    fixedWidth: 485,
    gutter: 40,
    center: true,
    nav: false,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    // autoplayButtonOutput: false,
    speed: 1500,
    mouseDrag: true,
    swipeAngle: false,
    preventScrollOnTouch: 'force',
  });

}
