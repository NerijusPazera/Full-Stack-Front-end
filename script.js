'use strict';

const shoppingCart = {
  beer: 5,
  nuts: 3
}

let answer;

do {
  let productName = prompt('Pasirinkite produkta:');
  let productQty = prompt('Pasirinkite produkto kieki:');

  shoppingCart[productName] = productQty;

  answer = prompt('Ar norite prideti kita produkta ? Y- taip, N- ne');
} while (answer === 'Y');

for (let key in shoppingCart) {
  alert(`${key} - ${shoppingCart[key]}`);
}
