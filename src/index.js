'use strict';

import {mount, h} from "./vdom/bootloader";
import Navigation from "./components/Navigation";
import {Main} from "./components/Main";

const header = document.querySelector('header');
const main = document.getElementById('main');

mount(h(Navigation), header);
mount(h(Main), main);