import {Component, h} from "../vdom/bootloader";
import Alink from "./Alink";

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state.links = [
      'home',
      'login',
      'register'
    ];

    this.state.active = 0;
    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    this.setState({active: id});
  }

  render() {
    const active = this.state.active;
    const navArray = this.state.links.map((link, index) => {
      const isActive = active === index;
      return h('li', {class: isActive ? 'active' : ''},
          h(Alink, {handler: this.onClick, id: index, href: '#'}, link)
      );
    });

    return h('nav', {},
        h('div', {class: 'nav-img'}),
        h('ul', {class: 'nav-links'}, ...navArray)
    );
  }
}