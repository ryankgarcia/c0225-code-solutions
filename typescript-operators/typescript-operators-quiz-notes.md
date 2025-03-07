# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && is looking for a falsy value and will keep executing until it finds a falsy value. if it doesn't it will return the last operand
  || is looking fo a truthy value and will keep executing until it finds a truthy value. if it doesn't it will return the last operand
  they can be used outside of if statements to check if an expression is either true or false, depending on which you are attempting to do in your code.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  moving from left to right, expressions are evaluated until the result can be determined. no further expression are evaluated. once we find our result, no more expressions will be evaluated

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? is the same as || except if the first value is null or undefined it returns the second expression.
  ?? (nullish coalescing) is useful to handle cases where variables might be null or undefined. it checks both expressions and returns one of them instead of just terminating if the first expression evaluates to true.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ?: (ternary) operator evaluates expression 1 if the condition is true, otherwise evaluates expression 2.
  it is a short cut version of if/else statement. the truthy follows the expression being checked on its right. separated by a colon which is followed by the second expression

- What is the `?.` (optional chaining) operator? When would you use it?
  it returns undefined if object is null or undefined, otherwise it returns an object property value.
  you would use it if you're attempting to access properties that might not exist.

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  it means spread the values into an object or array.

  spread syntax allows an iterable such as an array or a string to be expanded in places where zero or more arguments or elements are expected.

- What data types can be spread into an array? Into an object?
  for arrays, anything that is iterable. for objects, key-value pairs
- How does spread syntax differ from rest syntax?
  spread is for unpacking elements, rest combines and does the packing.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js


&& is looking for a falsy Value. it will keep executing until it finds a falsy Value,
if it doesn't find one it returns the last operand.

|| is looking for a truthy value. it will keep executing until it finds a truthy value
if it doesn't find one it returns the last operand

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
