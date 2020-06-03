import {h, Component} from "../vdom/bootloader";
import {NewPost} from "./NewPost";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state.articles = [];
    this.fetchData();
    this.addPost = this.addPost.bind(this);
    this.postData = this.postData.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.fetchData = this.fetchData.bind(this);
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

  deletePost(e) {
    const postId = e.target.attributes.postId.value;

    fetch(`http://rest.stecenka.lt/api/posts/${postId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
        .then(this.fetchData);
  }

  render() {
    const articlesArray = this.state.articles.map(artc => {
      return h('article', {},
          h('h2', {}, artc.title),
          h('p', {}, artc.body),
          h('i',
              {
                class: 'fas fa-trash-alt',
                click: this.deletePost,
                postId: artc.id
              }
          )
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