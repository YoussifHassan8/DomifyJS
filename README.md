# DomifyJS

DomifyJS is a lightweight, flexible frontend framework built from scratch in JavaScript to understand how modern frontend frameworks work under the hood. It allows the developers to describe their UI and let the framework handle the DOM operations Instead of manually creating and updating DOM elements.


## Table of Contents
- [Purpose](#purpose)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [How to Use DomifyJS](#how-to-use-domifyjs)
- [Usage Example](#usage-example)
- [Vanilla JS vs DomifyJS](#vanilla-js-vs-domifyjs)
- [Benefits Over Vanilla JS](#benefits-over-vanilla-js)
- [Current Limitations](#current-limitations)

- [Framework Flow](#framework-flow)


## Purpose
The main purpose is to abstract away direct DOM manipulation and provide a more structured way to build web applications. Instead of manually creating and updating DOM elements, developers can describe their UI and let the framework handle the DOM operations.

## Installation
```bash
npm install domify-js
```

## How It Works
The framework works through three main systems:

1. Virtual DOM System
2. State Management
3. DOM Updates

## How to Use DomifyJS
### API Reference
#### createElement(tag, props, children)
Creates a virtual DOM element.

#### Parameters:

1. `tag` (string): HTML tag name ('div', 'p', 'button', etc.)
2. `props` (object): Properties and event handlers
3. `children` (array): Child elements or text content

#### createApp({ state, reducers, view })
Creates and initializes the application.

#### Parameters:

1. `state` (object): Initial application state
2. `reducers` (object): State update functions
3. `view` (function): Main view function that returns virtual DOM

## Usage Example
```javascript
// Counter App
const state = { count: 0 };

const reducers = {
    'increment': (state) => ({
        ...state,
        count: state.count + 1
    }),
    'decrement': (state) => ({
        ...state,
        count: state.count - 1
    })
};

function App(state, emit) {
    return createElement('div', {}, [
        createElement('h1', {}, [`Count: ${state.count}`]),
        createElement('button', {
            on: { click: () => emit('decrement') }
        }, ['-']),
        createElement('button', {
            on: { click: () => emit('increment') }
        }, ['+'])
    ]);
}

createApp({ state, reducers, view: App })
    .mount(document.getElementById('app'));
```

## Vanilla JS vs DomifyJS

### Vanilla JavaScript:
```javascript
// Create elements
const div = document.createElement('div');
const button = document.createElement('button');
button.textContent = 'Click me';
div.appendChild(button);

// Add event listener
button.addEventListener('click', () => {
    const count = parseInt(div.dataset.count || '0');
    div.dataset.count = count + 1;
    updateUI();
});

// Update UI
function updateUI() {
    div.textContent = `Count: ${div.dataset.count}`;
    div.appendChild(button);
}
```

### DomifyJS:
```javascript
// Define state
const state = { count: 0 };

// Define reducers
const reducers = {
    'increment': (state) => ({
        ...state,
        count: state.count + 1
    })
};

// Create view
function App(state, emit) {
    return createElement('div', {}, [
        createElement('h1', {}, [`Count: ${state.count}`]),
        createElement('button', {
            on: { click: () => emit('increment') }
        }, ['Click me'])
    ]);
}

// Create app
createApp({ state, reducers, view: App })
    .mount(document.getElementById('app'));
```

## Benefits Over Vanilla JS
- **No Direct DOM Manipulation**
  - Framework handles DOM updates
  - Developers focus on describing UI
- **Structured State Management**
  - Centralized state
  - Predictable updates
  - Clear data flow
- **Declarative Code**
  - Describe what you want
  - Framework handles how to do it
- **Event Handling**
  - Simplified event system
  - Automatic cleanup

## Current Limitations
- **Performance**
  - Full DOM rebuild on every state change
  - Will be optimized in future versions
- **Basic Features**
  - Simple state management
  - No component system yet
  - No lifecycle methods



## Framework Flow
### Initial Setup:
1. Create virtual DOM structure
2. Set up state management
3. Initialize event system

### When State Changes:
1. Reducer creates new state
2. Framework rebuilds virtual DOM
3. Updates real DOM

### Event Handling:
1. User interaction triggers event
2. Event dispatches action
3. Reducer updates state
4. View updates automatically

This framework is designed for learning purposes and demonstrates fundamental concepts used in modern frontend frameworks like React, Vue, and others.
