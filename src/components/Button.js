import {Component, h} from "../vdom/bootloader";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state.className = 'btn';
    this.state.buttonName = this.props.name;
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.props.name === 'Don\'t click here') {
      this.setState(
          {
            className: 'ne-btn',
            style: 'background-color: red',
            buttonName: 'CLICKED'
          }
      )
    }
  }

  render() {
    return h(
        'button',
        {
          click: this.clickHandler,
          class: this.state.className,
          style: this.state.style
        },
        this.state.buttonName
    );
  }
}