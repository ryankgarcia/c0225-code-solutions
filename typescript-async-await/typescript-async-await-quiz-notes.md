# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  to read code sequentially. they indicate that the JS runtime should 'wait' or 'pause' until the asynchronous function completed
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  they differ because with promise.then and promise.catch callback functions are used whereas async and await don't require that and instead allow the code to be more readable since the asynchronous functions are assigned to variables and contain the await keyword
- When do you use `async`?
  when you want to perform asynchronous operations
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  use await when doing asynchronous work. you don't use it when you need code to execute right away.
- How do you handle errors with `await`?
  errors are handled with try/catch/finally
- What do `try`, `catch` and `throw` do? When do you use them?
  they are useful to help resolve and reject cases inside our run function
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it becomes a pending promise
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await. for readability and easier in code writing

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
