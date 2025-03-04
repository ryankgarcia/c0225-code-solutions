# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

// make changes to the quiz questions answers.. //

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  logical AND operator is used to check for truthy values in variables. a simplified way this operator works is that if your first variable evaluates to true, then the second expression will get evaluated.
  logical OR operator is used to check for false values in variables. the way it works is that if the first expression evaluates to false, then check the second expression

  && returns the last value if the first is truthy, otherwise it returns the first value
  && is looking for a falsy value

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?

moving from left to right, expressions are evaluated until the result can be determined. no further expression are evaluated. once we find our result, no more expressions will be evaluated

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?

?? is the same as || except that the first value
?? (nullish coalescing) is useful to handle cases where variables might be null or undefined. it checks both expressions and returns one of them instead of just terminating if the first expression evaluates to true.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?

it is a short cut version of if/else statement. the truthy operation is to the right.
?: (ternary) operator evaluates expression 1 if the condition is true, otherwise evaluates expression 2. differs from if/else because it ...(finish up)

- What is the `?.` (optional chaining) operator? When would you use it?
  if you're attempting to access properties that might not exist.

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

its based on what it is checking for.

&& operators checks for falsy value before it checks the second exp

|| operator checks for truthy value



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
