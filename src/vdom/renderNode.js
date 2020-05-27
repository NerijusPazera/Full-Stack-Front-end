import {mount} from "./mount";

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
    $node = renderComponent(nodeName, attributes);
  } else {
    $node = renderElement(nodeName, attributes);
  }

  children.forEach(child => mount(child, $node));

  return $node;
}

function renderComponent(Component, props) {
  const component = new Component(props);
  const vNode = component.render();
  const $node = renderNode(vNode);

  component.$node = $node;

  return $node;
}

function renderElement(nodeName, attributes) {
  const $node = document.createElement(nodeName);

  for (let key in attributes) {
    if (typeof attributes[key] === 'function') {
      $node.addEventListener(key, attributes[key]);
    } else {
      $node.setAttribute(key, attributes[key]);
    }
  }

  return $node;
}