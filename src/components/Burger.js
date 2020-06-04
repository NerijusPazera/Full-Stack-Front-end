import {Component, h} from "../vdom/bootloader";

export default class Burger extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return h(
        'div',
        {
          class: 'burger'
        },
        h('div', {class: 'burger-line'}),
        h('div', {class: 'burger-line'}),
        h('div', {class: 'burger-line'})
    )
  }
}

// .burger {
//   height: 30px;
//   width: 30px;
//   position: relative;
//   cursor: pointer;
// }
//
// .burger-line {
//   height: 5px;
//   width: 100%;
//   background-color: black;
//   border-radius: 5px;
//   position: absolute;
// }
//
// .burger-line:nth-child(1) {
//   transition: 0.3s;
//   top: 0;
// }
//
// .burger-line:nth-child(2) {
//   transition: 0.1s;
//   top: 50%;
//   transform: translateY(-50%);
// }
//
// .burger-line:nth-child(3) {
//   transition: 0.5s;
//   bottom: 0;
// }
