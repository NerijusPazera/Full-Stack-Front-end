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

function createListElement(value) {
  const li = document.createElement('li');
  let textNode = document.createTextNode(value);
  const buttonDelete = createButton('Delete', deleteItem);
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

function deleteItem(event) {
  const closestLi = event.target.closest('li');

  function removeLi() {
    closestLi.remove();
  }

  setTimeout(removeLi, 1000);
  closestLi.style.opacity = '0';
  closestLi.style.transition = '1s';
  closestLi.style.transform = 'translateX(250%)';
}

function editItem(event) {
  const listItem = event.target.closest('li').firstChild;

  function getEditInput(event) {
    const value = edit.value.trim();

    if (event.keyCode === 13 && value) {
      listItem.textContent = value;
      edit.style.display = 'none';
      edit.removeEventListener('keyup', getEditInput);
    }
  }

  edit.addEventListener('keyup', getEditInput);
  edit.style.display = 'block';
  edit.value = listItem.nodeValue;
  edit.focus();
  edit.select();
}


const input = document.querySelector('input[name=todo]');
const edit = document.querySelector('input[name=edit]');

input.addEventListener('keyup', onKey);
