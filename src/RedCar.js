import Car from "./Car";
import {redCarControls} from "./index";

export default class RedCar extends Car {
  constructor() {
    const redCar = document.querySelector('.red-car');
    super(redCar, 30, 0, 120);
    this.controls = redCarControls;
  }
}
