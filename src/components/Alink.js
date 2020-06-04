import {Component, h} from "../vdom/bootloader";

export default class Alink extends Component {
  constructor(props) {
    super(props);

    this.handleId = this.handleId.bind(this);
  }

  handleId() {
    this.props.handler(this.props.id)
  }

  render() {
    return h('a', {click: this.handleId, href: this.props.href});
  }
}
