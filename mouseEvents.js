'use strict';

document.addEventListener('mouseleave', catchMouse);

let popupListener;
let popup;

function catchMouse() {
  showPopup();
  document.removeEventListener('mouseleave', catchMouse);
}

function showPopup() {
  popup = document.querySelector('.pop-up');

  popup.style.display = 'block';

  popupListener = document.addEventListener('click', (event) => {
    if (!event.target.closest('.pop-up')) {
      hidePopup();
    }
  });
};

function hidePopup() {
  popup.style.display= 'none';
  document.removeEventListener('click', popupListener);
}
