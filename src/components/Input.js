import {Component, h} from "../vdom/bootloader";

export default class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return h('input', {
      keyup: this.props.handler,
      class: this.props.class,
      placeholder: this.props.placeholder
    });
  }
}