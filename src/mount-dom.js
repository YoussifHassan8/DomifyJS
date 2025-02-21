import { DOM_TYPES } from "./create-element";
import { addEventListeners } from "./events";
import { setAttributes } from "./attributes";

export function mountDOM(vdom, parentEl) {
  if (vdom.type == DOM_TYPES.TEXT) createTextNode(vdom, parentEl);
  else if (vdom.type == DOM_TYPES.ELEMENT) createElementNode(vdom, parentEl);
  else if (vdom.type == DOM_TYPES.FRAGMENT) createFragmentNodes(vdom, parentEl);
  else throw new Error(`Can't mount DOM of type: ${vdom.type}`);
}

function createTextNode(vdom, parentEl) {
  const textNode = document.createTextNode(vdom.value);
  vdom.el = textNode;
  parentEl.append(textNode);
}

function createElementNode(vdom, parentEl) {
  const element = document.createElement(vdom.tag);
  addProps(element, vdom.props, vdom);
  vdom.el = element;
  vdom.children.forEach((child) => mountDOM(child, element));
  parentEl.append(element);
}

function createFragmentNodes(vdom, parentEl) {
  vdom.el = parentEl;
  vdom.children.forEach((child) => mountDOM(child, parentEl));
}

function addProps(el, props, vdom) {
  const { on: events, ...attrs } = props;
  vdom.listeners = addEventListeners(events, el);
  setAttributes(el, attrs);
}
