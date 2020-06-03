import {Component, h} from "../vdom/bootloader";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return h(
        'button',
        {
          class: this.props.class
        },
        this.props.name
    )
  }
}