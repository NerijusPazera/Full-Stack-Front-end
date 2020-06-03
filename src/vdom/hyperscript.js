/**
 * F-cija sukurianti virtual node.
 * @param nodeName
 * @param attributes
 * @param children
 * @returns {{nodeName: *, children: *[], attributes: {}}}
 */
function hyperscript(nodeName, attributes = {}, ...children) {
  return {nodeName, attributes, children};
}

export {hyperscript as h};