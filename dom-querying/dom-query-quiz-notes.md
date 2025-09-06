# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to get a visual representation of what our code is doing
- What is a "model"?
  a recreation of something
- Which "document" is being referred to in the phrase Document Object Model?
  HTML document
- What is the word "object" referring to in the phrase Document Object Model?
  a web page's elements
- What is a DOM Tree?
  the tree-like structure of HTML elements. with HTML being the root, and all other elements being the branches and leaves (<body>, <header>, <div>)
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(selector) and getElementByClassName(className)
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  getElementsByClassName(className)
- Why might you want to assign the return value of a DOM query to a variable?
  to be able to access that variable again so that it doesn't require another search, which can take a while to do.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  so that our main.js file can parse the document from top to bottom and be able to perform the proper methods we want to query for
- What does `document.querySelector()` take as its argument and what does it return?
  CSS (selector) is the argument. this method returns the first element that matches a specified CSS selector. if it doesn't find it , it will return null
- What does `document.querySelectorAll()` take as its argument and what does it return?
  CSS (selector) is the argument. this method returns a NodeList of all elements in the document that match a specified CSS selector

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
