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