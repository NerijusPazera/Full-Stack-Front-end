import {h, Component} from "../vdom/bootloader";
import {NewPost} from "./NewPost";
import {Article} from "./Article";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state.articles = [];
    this.fetchData();
    this.state.isLoading = true;

    this.addPost = this.addPost.bind(this);
    this.postData = this.postData.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.setData = this.setData.bind(this);
  }

  fetchData() {
    fetch('http://rest.stecenka.lt/api/posts')
        .then(response => response.json())
        .then(data => this.setData(data));
  }

  setData(data) {
    this.setState({articles: data, isLoading: false});
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

  showDelete(e) {
    e.target.lastChild.style = 'display: block';
  }

  hideDelete(e) {
    e.target.lastChild.style = 'display: none';
  }

  async deletePost(id) {
    const response = await fetch(`http://rest.stecenka.lt/api/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();
    if (result) {
      const foundId = this.state.articles.findIndex(article => article.id === id);
      this.state.articles.splice(foundId, 1);
      this.setData(this.state.articles);
    }
  }

  render() {
    const articlesArray = this.state.articles.map(artc => {
      return h(Article,
          {
            handleShow: this.showDelete,
            handleHide: this.hideDelete,
            handleDelete: this.deletePost,
            title: artc.title,
            body: artc.body,
            id: artc.id
          }
      )
    });

    if (!this.state.isLoading) {
      return h('div', {class: 'articles-container'},
          ...articlesArray,
          h(NewPost, {handler: this.postData})
      );
    } else {
      return h('div', {class: 'spinner-container'},
          h('div', {class: 'spinner'})
      );
    }
  }
}