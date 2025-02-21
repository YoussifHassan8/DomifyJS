import { withoutNulls } from "./utils/arrays.js";

export const DOM_TYPES = {
  TEXT: "text",
  ELEMENT: "element",
  FRAGMENT: "fragment",
};

export function createElement(tag, props = {}, children = []) {
  return {
    tag,
    props,
    children: mapTextNodes(withoutNulls(children)),
    type: DOM_TYPES.ELEMENT,
  };
}

function mapTextNodes(children) {
  return children.map((child) =>
    typeof child === "string" ? createText(child) : child
  );
}

export function createText(str) {
  return {
    type: DOM_TYPES.TEXT,
    value: str,
  };
}

export function createFragment(vNodes) {
  return {
    type: DOM_TYPES.FRAGMENT,
    children: mapTextNodes(withoutNulls(vNodes)),
  };
}
