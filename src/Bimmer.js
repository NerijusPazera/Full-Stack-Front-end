import Car from "./Car";
import {bimmerControls} from "./index";

export default class Bimmer extends Car {
  constructor() {
    const bimmer = document.querySelector('.bimmer');
    super(bimmer, 30);
    this.controls = bimmerControls;
  }
}