export default class Car {
  constructor(carName, speed, positionX = 0, positionY = 0, rotation = 180) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.rotation = rotation;
    this.speed = speed;
    this.carName = carName;
    this.carName.style.display = 'block';
    this.controls = [];
    this.move = this.move.bind(this);

    this.render();

    addEventListener('keydown', this.move);

    addEventListener('keydown', e => {
      if (e.keyCode === 80) {
        this.pedalToTheMetal(document.body.children[0].clientWidth);
      }
    })
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

  move(e) {
    switch (e.keyCode) {
      case this.controls[0]:
        this.moveUp();
        break;
      case this.controls[1]:
        this.moveDown();
        break;
      case this.controls[2]:
        this.moveLeft();
        break;
      case this.controls[3]:
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
