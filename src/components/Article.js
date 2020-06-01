import {Component, h} from "../vdom/bootloader";
import {articles} from "./articleContent";

export default class Article extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const articlesArray = articles.map()
    return h('Article', {class: 'article'},
        h('h3', {}, this.state.title),

    )
  }
}