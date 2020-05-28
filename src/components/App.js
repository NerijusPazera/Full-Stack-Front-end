import {Component, h} from "../vdom/bootloader";
import Input from "./Input";
import Button from "./Button";

export default class App extends Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state.title = 'To-Do';
    this.state.todos = ['Learn JS'];
  }

  handleInput(e) {
    let value = e.target.value;

    if (e.keyCode === 13 && value !== '') {
      this.state.todos.push(e.target.value);
      this.setState({todos: this.state.todos});
    }
  }

  handleDelete(id) {
    this.state.todos.splice(id, 1);
    this.setState({todos: this.state.todos});
  }

  render() {
    const array = this.state.todos.map((todo, id) => h('li', {},
        todo,
        h(Button, {name: 'delete', handler: this.handleDelete, key: id})
    ));

    return h(
        'main', {},
        h('h1', {}, this.state.title),
        h(Input, {handler: this.handleInput}),
        h('ul', {class: 'to-do-list'}, ...array)
    );
  }
}