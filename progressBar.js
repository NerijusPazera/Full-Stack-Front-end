'use strict';

const button = document.querySelector('button');

button.addEventListener('click', e => {
  scrollTo({top: 0, left: 0, behavior: 'smooth'});
})

document.addEventListener('scroll', () => {
  const percentage = getScrollPercentage();
  const progress = document.querySelector('.progress-bar');

  progress.style.width = `${percentage}%`;

  showButton(pageYOffset > innerHeight);
  colorBody(Math.round(255 / 100 * percentage));
});

function getScrollPercentage() {
  const bodyHeight = document.body.scrollHeight;
  const maxScroll = bodyHeight - innerHeight;
  return Math.round(pageYOffset * 100 / maxScroll);
}

function showButton(show) {
  button.style.display = show ? 'block' : 'none';
}

function colorBody(number) {
  document.body.style.backgroundColor = `rgb(${number}, ${number}, ${number})`;
}
