'use strict';

const popUp = document.querySelector('.pop-up');
const body = document.querySelector('body');
const main = document.querySelector('main');

function showPopUp() {
  popUp.style.display = 'block';
  body.removeEventListener('mouseleave', showPopUp);
};

function hidePopUp() {
  popUp.style.display= 'none';
};

body.addEventListener('mouseleave', showPopUp);
main.addEventListener('click', hidePopUp);
