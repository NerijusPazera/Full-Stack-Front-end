'use strict';

import {mount, h} from "./vdom/bootloader";
import Navigation from "./components/Navigation";
import {Main} from "./components/Main";

const nav = document.getElementById('nav-container');
const main = document.getElementById('main');

mount(h(Navigation), nav);
mount(h(Main), main);