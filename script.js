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
  const buttonDelete = createButton('Delete', removeLi);
  const buttonEdit = createButton('Edit', editItem);

  li.appendChild(textNode);
  li.appendChild(buttonDelete);
  li.appendChild(buttonEdit);

  return li;
}

function createButton(text, handler) {
  const button = document.createElement('button');
  const textNode = document.createTextNode(text);

  button.appendChild(textNode);
  button.addEventListener('click', handler);

  return button;
}

function editItem() {
  console.log('Works !');
}

const input = document.querySelector('input[name=name]');

input.addEventListener('keyup', onKey);
