# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  no, we would still need to append it to a parent. the document.createElement() just creates the new element. we still need to put it on the web page
- How do you add an element as a child to another element?
  appendChild method
- What do you pass as the arguments to the `element.setAttribute()` method?

1. a string of what you are trying to create and
2. the value you would like to assign to that attribute

- What steps do you need to take in order to insert a new element into the page?
  create the DOM element, then start assigning it content & attributes, then add it to web page by appending it to parent of an already existing element on the DOM
- What is the `textContent` property of an element object for?
  to add text content to our element
- Name two ways to set the `class` attribute of a DOM element.

1.  .setAttribute('class', 'submit-button bg-black');
2.  .className = 'submit-button bg-black';

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?

1. reusability. function can be called and reused multiple times
2. maintainability - function are easy to update and maintain. the changes only need to be made in one place

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
