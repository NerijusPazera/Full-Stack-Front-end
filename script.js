'use strict';

function onKey() {
  const value = event.target.value.trim();
  const ul = document.querySelector('ul');

  if (event.keyCode === 13 && value) {
    const li = createListElement(value);

    ul.appendChild(li);
    input.value = '';
  }
}

function removeLi() {
  event.target.closest('li').remove();
}

function createListElement(value) {
  const li = document.createElement('li');
  const textNode = document.createTextNode(value + ' ');
  const button = createButton();

  li.appendChild(textNode);
  li.appendChild(button);

  return li;
}

function createButton() {
  const button = document.createElement('button');
  const textNode = document.createTextNode('Delete');

  button.appendChild(textNode);
  button.addEventListener('click', removeLi);

  return button;
}

const input = document.querySelector('input[name=name]');

input.addEventListener('keyup', onKey);
