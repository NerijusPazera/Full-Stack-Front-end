'use strict';

const speed = {
  SLOW: 10,
  MEDIUM: 20,
  FAST: 30
};

const whiteCar = new CarConstructor('white-car', speed.MEDIUM);
const anotherCar = new CarConstructor('another-car', speed.FAST, 0, 110);

function CarConstructor(carName, speed, positionX = 0, positionY = 0, rotation = 180) {
  this.positionX = positionX,
  this.positionY = positionY,
  this.rotation = rotation,
  this.carName = document.querySelector(`.${carName}`),
  this.carName.style.display = 'block';

  this.moveLeft = function() {
    this.positionX -= speed;
    this.rotation = 0;
  },
  this.moveRight = function() {
    this.positionX += speed;
    this.rotation = 180;
  },
  this.moveDown = function() {
    this.positionY += speed;
    this.rotation = 270;
  },
  this.moveUp = function() {
    this.positionY -= speed;
    this.rotation = 90;
  },
  this.render = function() {
    this.carName.style.top = `${this.positionY}px`;
    this.carName.style.left = `${this.positionX}px`;
    this.carName.style.transform = `rotate(${this.rotation}deg)`;
  },
  this.move = function(e) {
    switch (e.keyCode) {
      case 38:
        this.moveUp();
        break;
      case 40:
        this.moveDown();
        break;
      case 37:
        this.moveLeft();
        break;
      case 39:
        this.moveRight();
        break;
    }
    this.render();
  },
  this.render();

  this.pedalToTheMetal = function (distance) {
    while (this.positionX < distance) {
      this.moveRight();
      this.pedalToTheMetal(distance);
    }
  }

  addEventListener('keydown', e => {
    if (e.keyCode === 80) {
      this.pedalToTheMetal(document.body.children[0].clientWidth);
    }
  })

  addEventListener('keydown', e => {this.move(e)});
};
