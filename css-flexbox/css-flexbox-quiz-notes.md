# css-flexbox-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the default `flex-direction` of a `flex` container?
  up along the horizontal axis for rows
- What is the default `flex-wrap` of a `flex` container?
  the default is a nowrap
- What axis do the `justify-content` properties work on?
  primary main axis
- What axis do the `align-items` properties work on?
  cross axis

## Notes

All student notes should be written here.

---

justify-content and align-items properties can alternate depending on how you set your flex-direction.
by changing it to flex-direction: column ... then the axis' switch. which is why justify-content is referred to on the main axis, and align-items is on the cross axis. they don't always stay on horizontal (justify-content) and vertical (align-items) axis.

think of every web page as rows and columns. for every row, you can separate columns among that row.

---

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
