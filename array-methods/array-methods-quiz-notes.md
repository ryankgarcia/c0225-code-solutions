# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    executes the callback function once before each array element
  - What should the callback function do?
    execute on each element, which takes 3 arguments.

  1. currentValue, 2. index (optional), and 3. array (optional)

  - What is `Array.forEach` useful for?
    when ever i need to iterate over data. useful for looping through array elements and performing an action

- `Array.map`:

  - What does `Array.map` do?
    creates a new array populated with the results of calling a provided function on every element in the calling array
  - What should the callback function return?
    it returns the transformed element

  - What is `Array.map` useful for?
    to mutate an array. and transform them into new arrays and objects.

- `Array.find`:
  - What does `Array.find` do?
    returns the first element in the provided array that passes the test implemented by the function
  - What should the callback function return?
    the value of the first element in the array that satisfies the provided testing function, otherwise undefined. so it returns a boolean
  - What is `Array.find` useful for?
    looking for exact item values in an array
- `Array.filter`:
  - What does `Array.filter` do?
    creates a new array with all elements that pass the test implemented by the provided function
  - What should the callback function return?
    the callback function should return a truthy value to keep the element in the resulting array, and falsy value otherwise
  - What is `Array.filter` useful for?
    useful for creating a new array contains specific values from an existing array that matches a specific condition

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
