import {renderNode} from "./renderNode";

export function updateComponent(obj) {
  const vNode = obj.render();
  const $newNode = renderNode(vNode);
  const $oldNode = obj.$node;

  $oldNode.replaceWith($newNode);
  obj.$node = $newNode;
}