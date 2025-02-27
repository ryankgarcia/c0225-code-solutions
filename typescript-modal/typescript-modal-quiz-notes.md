# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  it is used to create pop-up dialogs or modal windows on a webpage
- How do you display a modal dialog?
  show() method or showModal() method
- How do you hide a modal dialog?
  using the close() method
- What is the difference between the `showModal` & `show` methods?
  showModal method covers the screen for a user and forces the user to interact with the pop-up
  show method will not force the user to interact with the dialog box/pop-up

## Notes

All student notes should be written here.

<dialog> element used to create pop-ups or modal windows
its a simple way to create a pop-up or modal window without JS libraries or frameworks
<dialog> is important because it provides standardized, accessible way to create dialogs

<dialog> element provides a few methods to control its visibility and interaction with a user:

1. show() - this method does NOT have a modal backdrop to block the interaction with the rest of the page

a MODAL BACKDROP is a shadow overlaying the rest of the page's design. its a grey area being applied

2. showModal() - this method displays the dialog box as modal. this type of dialog box blocks interaction
   with the rest of a page. Its displayed on top of the page, with a backdrop, and is centered on the screen

3. close() - this method closes the dialog box.

How to write `Code Examples` in markdown

<!--
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
``` -->
