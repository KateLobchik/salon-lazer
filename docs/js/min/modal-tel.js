const telButtons=document.querySelectorAll(".button-tel__desktop"),modal=document.querySelector(".modal-tel"),modalContent=document.querySelector(".modal-tel__main-wrapper"),closeButton=document.querySelector(".modal-tel__close-button"),isEscEvent=e=>"Escape"===e.key||"Esc"===e.key;for(let e=0;e<telButtons.length;e++)telButtons[e].addEventListener("click",()=>{modal.classList.add("modal-tel--active"),modalContent.classList.add("modal-tel__main-wrapper--active");const e=e=>{isEscEvent(e)&&(e.preventDefault(),t())},t=()=>{modal.classList.remove("modal-tel--active"),modalContent.classList.remove("modal-tel__main-wrapper--active"),document.removeEventListener("keydown",e)};document.addEventListener("keydown",e),closeButton.addEventListener("click",e=>{e.target.closest(".modal-order__container")||t()})});