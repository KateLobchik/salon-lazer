const telButtons = document.querySelectorAll('.button-tel__desktop');
const modal = document.querySelector('.modal-tel');
const modalContent = document.querySelector('.modal-tel__main-wrapper');
const closeButton = document.querySelector('.modal-tel__close-button');

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

for (let i = 0; i < telButtons.length; i++) {
  telButtons[i].addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.add('modal-tel--active');
    modalContent.classList.add('modal-tel__main-wrapper--active');

    const onModalEscKeydown = (evt) => {
      if (isEscEvent(evt)) {
        evt.preventDefault();
        closeModal();
      }
    };

    const closeModal = () => {
      modal.classList.remove('modal-tel--active');
      modalContent.classList.remove('modal-tel__main-wrapper--active');
      document.removeEventListener('keydown', onModalEscKeydown);
    };

    document.addEventListener('keydown', onModalEscKeydown);

    modal.addEventListener('click', (evt) => {
      if (!evt.target.closest('.modal-order__container')) {
        closeModal();
      }
    });
  })
}
