!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(e,t){const n=o(e);t.appendChild(n)}function o(e){if("string"==typeof e)return document.createTextNode(e);const{nodeName:t,attributes:n,children:i}=e;let u;return u="function"==typeof t?function(e,t){const n=new e(t),r=o(n.render());return n.$node=r,r}(t,n):function(e,t){const n=document.createElement(e);for(let e in t)"function"==typeof t[e]?n.addEventListener(e,t[e]):n.setAttribute(e,t[e]);return n}(t,n),i.forEach(e=>r(e,u)),u}n.r(t);class i{constructor(e){this.$node=null,this.props=e,this.state={}}setState(e){this.state={...this.state,...e},function(e){const t=o(e.render());e.$node.replaceWith(t),e.$node=t}(this)}}function u(e,t={},...n){return{nodeName:e,attributes:t,children:n}}class c extends i{constructor(e){super(e)}render(){return u("div",{class:"burger"},u("div",{class:"burger-line"}),u("div",{class:"burger-line"}),u("div",{class:"burger-line"}))}}const s=document.getElementById("navigation-container");document.getElementById("main");r(u(class extends i{constructor(e){super(e)}render(){return u("Navigation",{class:"navigation"},u("div",{class:"nav-img"}),u(c,{}))}}),s)}]);