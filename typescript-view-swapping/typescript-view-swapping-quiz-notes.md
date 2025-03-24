# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  it refers to the element that is going to fire the listening event
- What is the effect of setting an element to `display: none`?
  that element will not show. it will visibly hide it and remove it from the document flow
- What does the `element.matches()` method take as an argument and what does it return?
  it takes in a CSS selector string as an argument and returns a boolean value (true or false)
- How can you retrieve the value of an element's attribute?
  getAttribute method
- At what steps of the solution would it be helpful to log things to the console?
  at each step of working through the problem to check if our code is working properly
- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your TypeScript code be written instead?
  we would add event listeners to each tab and pass the function over and again
- If you didn't use a loop to conditionally show or hide the views in the page, how would your TypeScript code be written instead?
  write a bunch of conditional statements

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
