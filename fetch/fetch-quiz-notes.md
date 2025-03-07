# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  fetch returns a promise that resolves to the response object representing the outcome of the request
- What is the default request method used by `fetch()`?
  GET
- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  by setting the method to whichever method you're looking to achieve in the second argument inside of curly braces
- How does `fetch` report errors?
  It only rejects the promise on network failures or if anything prevented the request from completing. To handle HTTP errors, you need to check the response.ok property or the status code directly within the response handling logic.

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
