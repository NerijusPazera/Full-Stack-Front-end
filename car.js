'use strict';

class Car {
  constructor(carName, speed, positionX = 0, positionY = 0, rotation = 180) {
    this.positionX = positionX,
    this.positionY = positionY,
    this.rotation = rotation,
    this.speed = speed;
    this.carName = carName,
    this.carName.style.display = 'block';

    this.render();

    addEventListener('keydown', e => {
      if (e.keyCode === 80) {
        this.pedalToTheMetal(document.body.children[0].clientWidth);
      }
    })

    addEventListener('keydown', this.move);
  }

  moveLeft() {
    this.positionX -= this.speed;
    this.rotation = 0;
  }

  moveRight() {
    this.positionX += this.speed;
    this.rotation = 180;
  }

  moveDown() {
    this.positionY += this.speed;
    this.rotation = 270;
  }

  moveUp() {
    this.positionY -= this.speed;
    this.rotation = 90;
  }

  render() {
    this.carName.style.top = `${this.positionY}px`;
    this.carName.style.left = `${this.positionX}px`;
    this.carName.style.transform = `rotate(${this.rotation}deg)`;
  }

  move = (e) => {
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
  }

  pedalToTheMetal(distance) {
    while (this.positionX < distance) {
      this.moveRight();
      this.pedalToTheMetal(distance);
    }
  }
};
