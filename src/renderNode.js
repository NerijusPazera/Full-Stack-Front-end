import {mount} from "./mount";
import {App} from "./App";

/**
 * f-cija sukurianti DOM node.
 * @param vNode
 * @returns {Text|any}
 */
export function renderNode(vNode) {
    if (typeof vNode === 'string') {
        return document.createTextNode(vNode);
    }

    const {nodeName, attributes, children} = vNode;
    let $node;

    if (typeof nodeName === 'function') {
        $node = renderComponent(nodeName);
    } else {
        $node = document.createElement(nodeName);

        for (let key in attributes) {
            $node.setAttribute(key, attributes[key]);
        }
    }

    children.forEach(child => mount(child, $node));

    return $node;
}

function renderComponent(Component) {
    const component = new Component();
    const vNode = component.render();
    const $node = renderNode(vNode);

    component.$node = $node;

    return $node;
}