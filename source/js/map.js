//Map
const interactiveMap = document.querySelectorAll('.contacts-map--interactive');

const mapButton = document.querySelectorAll('.adress__map-input');
const mapIcon = document.querySelectorAll('.adress__map-icon');

const mapIvanCity = document.querySelector('.contacts__map-ivancity');
const mapKingisep = document.querySelector('.contacts__map-kingisep');
const mapBlock = document.querySelectorAll('.contacts__map-wrapper');



for (let i = 0; i < mapButton.length; i++) {

    interactiveMap[0].classList.add('contacts-map--active');

  mapButton[i].addEventListener('click', () => {

    for (let ind = 0; ind < mapIcon.length; ind++) {
      mapIcon[ind].classList.remove('adress__map-icon--active');
      mapBlock[ind].classList.remove('contacts__map-wrapper--active');
      interactiveMap[ind].classList.remove('contacts-map--active');
    }

    if (`${mapButton[i]}:checked`) {
      mapIcon[i].classList.add('adress__map-icon--active');
      mapBlock[i].classList.add('contacts__map-wrapper--active');
      interactiveMap[i].classList.add('contacts-map--active');
  }

  })
}
