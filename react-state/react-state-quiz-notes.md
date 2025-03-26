# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

Hooks control state in React and are special functions that allow components to have access to state and other React features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

1. the function name must start with `use` followed by an uppercase letter
2. Hooks can only be called by React components and other hooks
3. All hooks in a component must always be called at the top level of a component, and in the same order. You cannot call hooks in nested functions or conditional statements

- What is the purpose of state in React?

to save a components memory across re-renders

- Why can't we just maintain state in a local variable?

local variables do not persist between function calls because each time a function is called new local variables are allocated

- What two actions happen when you call a `state setter` function?

1. updates the cache
2. triggers a re-render

- When does the local `state variable` get updated with the new value?

The updated value will not be available until the component is re-rendered

Is a better way to handle the cycling of the image, image caption, and image description so that one click can advance them all in sync?

The most efficient method to update all the useState from each component would be to manage the useState inside the App function. This will put them all in sync together.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
