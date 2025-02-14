# css-cascade-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the four components of "the Cascade".
  source order, specificity, inheritance, !important
- What does the term "source order" mean with respect to CSS?
  its the order that your CSS rules are written in your stylesheet. the styling provided for an element last in your stylesheet is the styling that will ultimately take effect. at the same specificity level, the last one in the CSS
- How is it possible for the styles of an element to be applied to its children as well without an additional CSS rule?
  only certain styles can be inherited
- List the three selector types in order of increasing specificity.
  element selectors, class selectors, ID selectors
- Why is using `!important` considered bad practice?
  it disrupts the natural flow of CSS and makes debugging and maintenance challenging

## Notes

All student notes should be written here.

\*\*
remember, the last element in CSS is the one that will ultimately be selected
if all the classes that have the same property have different values.

an example would look like

.class-type1 {
color: red;
}

.class-type1 {
color: green;
}
\*\*

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
