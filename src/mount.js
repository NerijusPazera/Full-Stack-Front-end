import {renderNode} from "./renderNode";

/**
 *F-cija priskirianti DOM elementa nurytam (parent) elementui.
 * @param vNode
 * @param parent
 */
export function mount(vNode, parent) {
    const $node = renderNode(vNode);
    parent.appendChild($node);
}