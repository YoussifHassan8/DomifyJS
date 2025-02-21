import { removeEventListeners } from "./events";
import { DOM_TYPES } from "./create-element";

export function destroyDOM(vdom) {
  if (vdom.type == DOM_TYPES.TEXT) removeTextNode(vdom);
  else if (vdom.type == DOM_TYPES.ELEMENT) removeElementNode(vdom);
  else if (vdom.type == DOM_TYPES.FRAGMENT) removeFragmentNodes(vdom);
  else throw new Error(`Can't destroy DOM of type: ${type}`);
  delete vdom.el;
}

function removeTextNode(vdom) {
  vdom.el.remove();
}

function removeElementNode(vdom) {
  vdom.el.remove();
  vdom.children.forEach((child) => {
    destroyDOM(child);
  });
  if (vdom.listeners) {
    removeEventListeners(vdom.listeners, vdom.el);
    delete vdom.listeners;
  }
}

function removeFragmentNodes(vdom) {
  vdom.children.forEach((child) => {
    destroyDOM(child);
  });
}
