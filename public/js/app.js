!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e){const n=s(t);e.appendChild(n)}function s(t){if("string"==typeof t)return document.createTextNode(t);const{nodeName:e,attributes:n,children:o}=t;let i;return i="function"==typeof e?function(t,e){const n=new t(e),r=s(n.render());return n.$node=r,r}(e,n):function(t,e){const n=document.createElement(t);for(let t in e)"function"==typeof e[t]?n.addEventListener(t,e[t]):n.setAttribute(t,e[t]);return n}(e,n),o.forEach(t=>r(t,i)),i}n.r(e);class o{constructor(t){this.$node=null,this.props=t,this.state={}}setState(t){this.state={...this.state,...t},function(t){const e=s(t.render());t.$node.replaceWith(e),t.$node=e}(this)}}function i(t,e={},...n){return{nodeName:t,attributes:e,children:n}}class u extends o{render(){return i("input",{keyup:this.props.handler})}}class a extends o{constructor(t){super(t),this.state.buttonName=this.props.name,this.idHandler=this.idHandler.bind(this)}idHandler(){this.props.handler(this.props.key)}render(){return i("button",{click:this.idHandler},this.state.buttonName)}}r(i(class extends o{constructor(){super(),this.handleInput=this.handleInput.bind(this),this.handleDelete=this.handleDelete.bind(this),this.state.title="To-Do",this.state.todos=["Learn JS"]}handleInput(t){let e=t.target.value;13===t.keyCode&&""!==e&&(this.state.todos.push(t.target.value),this.setState({todos:this.state.todos}))}handleDelete(t){this.state.todos.splice(t,1),this.setState({todos:this.state.todos})}render(){const t=this.state.todos.map((t,e)=>i("div",{},t,i(a,{name:"delete",handler:this.handleDelete,key:e})));return i("main",{},i("h1",{},this.state.title),i(u,{handler:this.handleInput}),...t)}}),document.querySelector("body"))}]);