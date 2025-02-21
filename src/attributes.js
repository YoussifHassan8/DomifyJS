export function setAttributes(el, attrs) {
  const { class: className, style, ...otherAttrs } = attrs;
  if (className) setClass(el, className);
  if (style) {
    Object.entries(style).forEach(([prop, value]) => {
      setStyle(el, prop, value);
    });
  }
  for (const [name, value] of Object.entries(otherAttrs)) {
    setAttribute(el, name, value);
  }
}

function setClass(el, className) {
  el.className = "";
  if (Array.isArray(className)) el.classList.add(...className);
  else el.className = className;
}

export function setStyle(el, name, value) {
  el.style[name] = value;
}
export function removeStyle(el, name) {
  el.style[name] = null;
}

/*
// Using property assignment
el['value'] = 'some text';     // Sets property
el['checked'] = true;          // Sets property

// Results in proper behavior:
input.value === 'some text'    // true
checkbox.checked === true      // true

// Using setAttribute
el.setAttribute('value', 'some text');   // Sets attribute
el.setAttribute('checked', true);        // Sets attribute as string

// Might not give expected behavior:
// - Some properties need boolean values
// - Some need numbers
// - Some have different property vs attribute behavior

*/
export function setAttribute(el, name, value) {
  if (value == null) removeAttribute(el, name);
  else if (name.startsWith("data-")) el.setAttribute(name, value);
  else el[name] = value;
}
export function removeAttribute(el, name) {
  el[name] = null;
  el.removeAttribute(name);
}

/*
    
     If you create a view like this,
const vdom = h('section', {} [
 h('h1', {}, ['My Blog']),
 h('p', {}, ['Welcome to my blog!'])
])
mountDOM(vdom, document.body)
the resulting HTML would be
<body>
 <section>
    <h1>My Blog</h1>
    <p>Welcome to my blog!</p>
 </section>
</body>

*/
