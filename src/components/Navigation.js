import {Component, h} from "../vdom/bootloader";
import Burger from "./Burger";
import ListItem from "./ListItem";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return h(
        'Navigation',
        {
          class: 'navigation'
        },
        h('div', {class: 'nav-img'}),
        h(Burger, {}),
    )
  }
}