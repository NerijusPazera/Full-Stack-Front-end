import {Component, h} from "../vdom/bootloader";
import Burger from "./Burger";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return h('div', {class: 'wrapper nav'},
      h('div',{class: 'nav-img'}),
        h(Burger));
  }
}