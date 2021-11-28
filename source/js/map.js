
  //Map
const interactiveMap = document.querySelector('.contacts-map--interactive');
const imgMap = document.querySelector('.contacts-map--img');

if (imgMap) {
  imgMap.classList.remove('contacts-map--active');
  interactiveMap.classList.add('contacts-map--active');
}
