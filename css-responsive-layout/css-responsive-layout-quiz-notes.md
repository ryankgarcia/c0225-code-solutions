# css-responsive-layout-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a **breakpoint** in responsive Web design?
  the specific points at which a media query are introduced.
- What is the advantage of using a percentage (_e.g._ `50%`) width instead of a fixed (_e.g._ `px`) width for a "column" class in a responsive layout?
  using percentages means the layout will be responsive to the size of the viewport. using px will be the same across different view ports, while using percentages will be percentages relative to the size of the view port of the device on the web page.
- If you introduce CSS rules for a smaller `width` _after_ the styles for a larger `width` in your style sheet, the CSS rules for the **smaller** `width` will "win". Why is that?
  because if they're at the same specificity level it goes to source order. so whichever comes last is going to win

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
