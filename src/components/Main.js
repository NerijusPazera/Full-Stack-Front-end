import {h, Component} from "../vdom/bootloader";
import {NewPost} from "./NewPost";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state.articles = [];
    this.fetchData();
    this.addPost = this.addPost.bind(this);
    this.postData = this.postData.bind(this);
  }

  fetchData() {
    fetch('http://rest.stecenka.lt/api/posts')
        .then(response => response.json())
        .then(data => this.setData(data));
  }

  setData(data) {
    this.setState({articles: data});
  }

  postData(myData) {
    fetch('http://rest.stecenka.lt/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myData)
    })
        .then(response => response.json())
        .then(jsonData => this.addPost(jsonData));
  }

  addPost(newPost) {
    const updatedState = this.state.articles;
    updatedState.push({...newPost});
    this.setState({articles: updatedState});
  }

  render() {
    const articlesArray = this.state.articles.map(artc => {
      return h('article', {},
          h('h2', {}, artc.title),
          h('p', {}, artc.body)
      )
    });

    if (articlesArray.length !== 0) {
      return h('div', {class: 'articles-container'},
          ...articlesArray,
          h(NewPost, {handler: this.postData}));
    } else {
      return h('div', {class: 'spinner-container'},
          h('div', {class: 'spinner'}));
    }
  }
}