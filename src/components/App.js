import {Component, h} from "../vdom/bootloader";
import Button from "./Button";


export default class App extends Component {
  constructor() {
    super();
    this.buttonName = 'Click here';
    this.title = 'Hello World';
  }

  render() {
    return h(
        'div',
        {
          class: 'container',
          style: 'height: 200px; border: 1px solid black;'
        },
        h('h1', {}, this.title),
        h(Button, {name: this.buttonName}),
        h(Button, {name: 'Don\'t click here'})
    );
  }
}