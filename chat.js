'use strict'

const chat = document.querySelector('.chat-container');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const input = document.querySelector('textarea');

  chat.appendChild(createMessage(input.value));

  input.value = '';
});

function createMessage(text) {

  const article = document.createElement('article');
  const image = document.createElement('section');
  const chatBubble = document.createElement('section');

  article.classList.add('message', 'self');
  chatBubble.classList.add('chat-bubble');
  image.classList.add('image');

  const arrayOfParagraphs = text.split('\n');

  arrayOfParagraphs.forEach(para => {
    const paragraph = document.createElement('p');
    const textNode = document.createTextNode(para);
    paragraph.appendChild(textNode);
    chatBubble.appendChild(paragraph);
  });

  article.appendChild(image);
  article.appendChild(chatBubble);

  return article;
}
