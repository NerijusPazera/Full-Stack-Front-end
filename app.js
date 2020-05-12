'use strict';

const input = document.querySelector('input[name=name]');
const h1 = document.querySelector('h1')
const fullNameButton = document.querySelector('button[name=full]');
const vowelsButton = document.querySelector('button[name=vowels]');
const consonantsButton = document.querySelector('button[name=consonants]');
const vowels = ['a', 'e', 'i', 'y', 'o', 'u'];
let name;

input.addEventListener('keyup', event => {
  const value = input.value.trim();

  if (event.keyCode === 13 && value) {
    name = value;
    h1.innerHTML = value;
    input.style.display = 'none';
    fullNameButton.style.display = 'inline-block';
    vowelsButton.style.display = 'inline-block';
    consonantsButton.style.display = 'inline-block';

  }
});

fullNameButton.addEventListener('click', () => h1.innerHTML = name);

vowelsButton.addEventListener('click', () => {
  const filtered = name
    .split('')
    .filter(letter => vowels.find(vowel => letter.toLowerCase() === vowel))
    .join('');
  h1.innerHTML = filtered;
});

consonantsButton.addEventListener('click', () => {
  const filtered = name
    .split('')
    .filter(letter => !vowels.find(vowel => letter.toLowerCase() === vowel))
    .join('');
  h1.innerHTML = filtered;
});
