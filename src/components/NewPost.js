import {h, Component} from "../vdom/bootloader";
import Button from "./Button";
import Input from "./Input";

export class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state.post = {
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTopic = this.handleTopic.bind(this);
    this.handlePara = this.handlePara.bind(this);
  }

  handleTopic(e) {
    this.state.post.title = e.target.value;
  }

  handlePara(e) {
    this.state.post.body = e.target.value;
  }

  handleSubmit(e) {
    e.preventDefault();

    for (let key in this.state.post) {
      const postValue = this.state.post[key];

      if (postValue.trim() === '') {
        return false;
      }
    }

    this.props.handler(this.state.post);
  }

  render() {
    return h('form', {class: 'form', submit: this.handleSubmit},
        h('h3', {}, 'Enter New'),
        h(Input, {class: 'topic', placeholder: 'Topic', handler: this.handleTopic}),
        h(Input, {class: 'para', placeholder: 'Your Story...', handler: this.handlePara}),
        h(Button, {class: 'submit-btn', name: 'submit'})
    );
  }
}