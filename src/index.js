'use strict';

import {mount, h} from "./vdom/bootloader";
import Navigation from "./components/Navigation";

const nav = document.getElementById('navigation-container');
const main = document.getElementById('main');

mount(h(Navigation), nav);
