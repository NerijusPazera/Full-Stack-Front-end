import {Component, h} from "../vdom/bootloader";
import Button from "./Button";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e) {
    const value = e.target.value.trim();

    if (e.keyCode === 13 && value !== '') {
      this.props.onUpdate(this.props.key, value);
    }
  }

  render() {
    return h(
        'li', {class: 'list-item'},
        h('input', {value: this.props.todo, keyup: this.handleUpdate}),
        h(Button, {
          name: 'Delete',
          handler: this.props.deleteHandler,
          key: this.props.key,
          class: 'delete-btn'
        })
    )
  }
}