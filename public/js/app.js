!function(t){var e={};function s(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";function n(t,e){const s=r(t);e.appendChild(s)}function r(t){if("string"==typeof t)return document.createTextNode(t);const{nodeName:e,attributes:s,children:a}=t;let i;return i="function"==typeof e?function(t,e){const s=new t(e),n=r(s.render());return s.$node=n,n}(e,s):function(t,e){const s=document.createElement(t);for(let t in e)"function"==typeof e[t]?s.addEventListener(t,e[t]):s.setAttribute(t,e[t]);return s}(e,s),a.forEach(t=>n(t,i)),i}s.r(e);class a{constructor(t){this.$node=null,this.props=t,this.state={}}setState(t){this.state={...this.state,...t},function(t){const e=r(t.render());t.$node.replaceWith(e),t.$node=e}(this)}}function i(t,e={},...s){return{nodeName:t,attributes:e,children:s}}class o extends a{constructor(t){super(t)}render(){return i("div",{class:"burger"},i("div",{class:"burger-line"}),i("div",{class:"burger-line"}),i("div",{class:"burger-line"}))}}class c extends a{constructor(t){super(t)}render(){return i("button",{class:this.props.class},this.props.name)}}class l extends a{render(){return i("input",{keyup:this.props.handler,class:this.props.class,placeholder:this.props.placeholder})}}class d extends a{constructor(t){super(t),this.state.post={title:"",body:""},this.handleSubmit=this.handleSubmit.bind(this),this.handleTopic=this.handleTopic.bind(this),this.handlePara=this.handlePara.bind(this)}handleTopic(t){this.state.post.title=t.target.value}handlePara(t){this.state.post.body=t.target.value}handleSubmit(t){t.preventDefault();for(let t in this.state.post){if(""===this.state.post[t].trim())return!1}this.props.handler(this.state.post)}render(){return i("form",{class:"form",submit:this.handleSubmit},i("h3",{},"Enter New"),i(l,{class:"topic",placeholder:"Topic",handler:this.handleTopic}),i(l,{class:"para",placeholder:"Your Story...",handler:this.handlePara}),i(c,{class:"submit-btn",name:"submit"}))}}const h=document.querySelector("header"),u=document.getElementById("main");n(i(class extends a{constructor(t){super(t)}render(){return i("div",{class:"wrapper nav"},i("div",{class:"nav-img"}),i(o))}}),h),n(i(class extends a{constructor(t){super(t),this.state.articles=[],this.fetchData(),this.addPost=this.addPost.bind(this),this.postData=this.postData.bind(this),this.deletePost=this.deletePost.bind(this),this.fetchData=this.fetchData.bind(this)}fetchData(){fetch("http://rest.stecenka.lt/api/posts").then(t=>t.json()).then(t=>this.setData(t))}setData(t){this.setState({articles:t})}postData(t){fetch("http://rest.stecenka.lt/api/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(t=>t.json()).then(t=>this.addPost(t))}addPost(t){const e=this.state.articles;e.push({...t}),this.setState({articles:e})}deletePost(t){const e=t.target.attributes.postId.value;fetch("http://rest.stecenka.lt/api/posts/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then(this.fetchData)}render(){const t=this.state.articles.map(t=>i("article",{},i("h2",{},t.title),i("p",{},t.body),i("i",{class:"fas fa-trash-alt",click:this.deletePost,postId:t.id})));return 0!==t.length?i("div",{class:"articles-container"},...t,i(d,{handler:this.postData})):i("div",{class:"spinner-container"},i("div",{class:"spinner"}))}}),u)}]);