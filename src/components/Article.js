import {h, Component} from "../vdom/bootloader";

export class Article extends Component {
  constructor(props) {
    super(props);

    this.idHandler = this.idHandler.bind(this);
  }

  idHandler() {
    this.props.handleDelete(this.props.id);
  }

  render() {
    return h('article',
        {
          mouseenter: this.props.handleShow,
          mouseleave: this.props.handleHide,
        },
        h('h2', {}, this.props.title),
        h('p', {}, this.props.body),
        h('i',
            {
              class: 'fas fa-trash-alt',
              click: this.idHandler,
              style: 'display: none'
            }
        )
    )
  }
}

