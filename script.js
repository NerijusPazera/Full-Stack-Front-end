'use strict';

const rapLyrics = [
  {
    word: 'dirty',
    naughty: false
  },
  {
    word: 'bitch',
    naughty: true
  },
  {
    word: 'money',
    naughty: false
  },
  {
    word: 'guns',
    naughty: false
  },
  {
    word: 'coke',
    naughty: true
  }
]

const input = prompt('Enter your age:');
const result = Number(input) < 18 ? rapLyrics.filter(censor):
rapLyrics;

function censor(value) {
  return !value.naughty;
}

function getWords(value) {
  return value.word;
}

const lyrics = result.map(getWords);

const p = document.createElement('p');
const text = document.createTextNode(lyrics.join(' '));

p.appendChild(text);
document.body.appendChild(p);
