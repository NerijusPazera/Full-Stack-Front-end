import {Component, h} from "../vdom/bootloader";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state.buttonName = this.props.name;
    this.idHandler = this.idHandler.bind(this);
  }

  idHandler() {
    this.props.handler(this.props.key);
  }

  render() {
      return h(
          'button',
          {
            click: this.idHandler,
            class: this.props.class
          },
          this.state.buttonName
      )
  }
}