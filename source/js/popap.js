const pricesContent = document.querySelectorAll('.price__item');
const pricesButtons = document.querySelectorAll('.item-multi__button-price');

const questionsContents = document.querySelectorAll('.question__item');
const questionsButtons = document.querySelectorAll('.item-multi__question-button');

if (pricesContent) {

  for (let i = 0; i < pricesButtons.length; i++) {
    pricesButtons[i].addEventListener('click', () => {
      pricesButtons[i].classList.toggle('item-multi__button--close');
      pricesContent[i].classList.toggle('item-multi--price-close');
    })
  }

  for (let i = 0; i < questionsButtons.length; i++) {
    questionsButtons[i].addEventListener('click', () => {
      questionsButtons[i].classList.toggle('item-multi__button--close');
      questionsContents[i].classList.toggle('item-multi--close');
    })
  }
}
