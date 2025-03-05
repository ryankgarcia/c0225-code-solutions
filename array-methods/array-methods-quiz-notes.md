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
    typical use case is to execute side effects at the end of a chain

- `Array.map`:
  - What does `Array.map` do?
    creates a new array populated with the results of calling a provided function on every element in the calling array
  - What should the callback function return?
    a new array with each element being the result of the callback function
  - What is `Array.map` useful for?
    when chaining two methods together or returning a new, mutated array
- `Array.find`:
  - What does `Array.find` do?
    executes the callback function once for each index of the array until it finds one where callback returns a truthy value. if an element is found, it returns the value of that element. otherwise returns undefined.
  - What should the callback function return?
    the value of the first element in the array that satisfies the provided testing function, otherwise undefined.
  - What is `Array.find` useful for?
    looking for exact item values in an array
- `Array.filter`:
  - What does `Array.filter` do?
    creates a new array with all elements that pass the test implemented by the provided function
  - What should the callback function return?
    a new array with the elements that pass the test. if no elements pass the test, an empty array will be returned
  - What is `Array.filter` useful for?
    narrowing down the values of an array to make it smaller. it helps narrow down the dataset so its smaller

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
