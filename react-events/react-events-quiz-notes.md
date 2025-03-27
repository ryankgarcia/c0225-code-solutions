# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?

events in React are DOM events plus you can make your own events

- What is an "event handler"? Which component declares the handler?

An event handler is your own custom function that will be triggered in response to interactions like clicking, hovering, etc.
the parent component declares the handler

- How do you pass an event handler to a React component?

by passing it as a prop to the appropriate JSX tag

- What is the naming convention for event handlers?

'handle' followed by the event name that begins with a capital letter

- What is an "event handler prop"? Which component declares the prop?

event handler props are names that specify the action the event will take.
the component that supports the interaction declares the prop (child)

- What are some custom event handler props a component may wish to define?

change, cancel, save, onNext

- What is the naming convention for custom event handler props?

using the word 'on' followed by a capital letter

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';

export function App() {
  const [index, setIndex] = useState(0);

  //
  function handleNext() {
    setIndex((index + 1) % srcs.length);
  }
}
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
