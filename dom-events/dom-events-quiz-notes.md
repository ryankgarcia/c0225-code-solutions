# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to get context of the things we are working with.
- What is the purpose of events and event handling?
  event handlers respond to user actions or interactions with a web page. an event object contains information about the event. this event object is passed as an argument to the event handler function.
- Are all possible parameters required to use a JavaScript method or function?
  they are not always required
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener method
- What is a callback function?
  it is a function passed into another function as an argument
- What object is passed into an event listener callback when the event fires?
  event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  event.target refers to the element responsible for firing the event. the console.log would give us more information. or look it up on mdn
- What is the difference between these two snippets of code?

  ```js
  element.addEventListener('click', handleClick);
  ```

  ```js
  element.addEventListener('click', handleClick());
  ```

  the first snippet is passing in a reference. while the second is trying to call the function

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
