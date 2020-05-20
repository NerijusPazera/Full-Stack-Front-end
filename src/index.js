'use strict';

import {App} from "./App";
import {hyperscript} from "./hyperscript";
import {mount} from "./mount";

const h1 = hyperscript('h1', {class: 'title'}, 'Hello World');
const button = hyperscript('button', {class: 'btn'}, 'Press Me');
export const div = hyperscript('div', {class: 'container', style: 'height: 200px; border: 1px solid black;'}, h1, button);

mount(hyperscript(App), document.getElementById('app'));
