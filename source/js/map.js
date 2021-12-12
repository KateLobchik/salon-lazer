
  //Map
const interactiveMap = document.querySelector('.contacts-map--interactive');
const imgMap = document.querySelector('.contacts-map--img');

if (imgMap) {
  imgMap.classList.remove('contacts-map--active');
  interactiveMap.classList.add('contacts-map--active');
}



const mapButton = document.querySelectorAll('.adress__adress-item');
const mapIcon = document.querySelectorAll('.adress__map-icon');
const mapBlock = document.querySelectorAll('.contacts__map-wrapper');

for (let i = 0; i < mapButton.length; i++) {
  mapButton[i].addEventListener('click', () => {
    console.log('vnkjv')
    mapIcon[i].classList.toggle('adress__map-icon--active');
    mapBlock[i].classList.toggle('contacts__map-wrapper--active');
  })
}
