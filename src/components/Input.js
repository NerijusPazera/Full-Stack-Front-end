import {Component, h} from "../vdom/bootloader";

export default class Input extends Component {

  render() {
    return h('input', {keyup: this.props.handler});
  }
}