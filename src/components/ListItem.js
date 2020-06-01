import {Component, h} from "../vdom/bootloader";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return h('li', {class: 'list-item'}, 'home'
    )
  }
}