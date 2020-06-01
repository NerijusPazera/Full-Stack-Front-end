import {Component, h} from "../vdom/bootloader";
import Input from "./Input";
import ListItem from "./ListItem";
import Button from "./Button";

export default class App extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.state.title = 'To-Do';
    this.state.todos = ['Learn JS', 'Clean Up'];
  }

  handleInput(e) {
    let value = e.target.value.trim();

    if (e.keyCode === 13 && value !== '') {
      this.state.todos.push(value);
      this.setState({todos: this.state.todos});
    }
  }

  deleteItem(id) {
    this.state.todos.splice(id, 1);
    this.setState({todos: this.state.todos});

  }

  updateItem(id, value) {
    this.state.todos.splice(id, 1, value);
    this.setState({todos: this.state.todos});
  }

  render() {
    const array = this.state.todos.map((todo, id) =>
        h(ListItem, {
          todo: todo,
          key: id,
          deleteHandler: this.deleteItem,
          onUpdate: this.updateItem
        }));

    return h(
        'main', {},
        h('h1', {}, this.state.title),
        h(Input, {handler: this.handleInput}),
        h('ul', {class: 'to-do-list'}, ...array),
    )
  }
}