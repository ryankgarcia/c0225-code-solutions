# javascript-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What event is fired when a user places their cursor in a form control?
  focus event
- What event is fired when a user's cursor leaves a form control?
  blur event
- What event is fired as a user changes the value of a form control?
  input event
- What event is fired when a user clicks the `"submit"` button within a `<form>`?
  submit event
- What does the `event.preventDefault()` method do?
  it prevents the default behavior from occurring on the event object
- What does submitting a form without `event.preventDefault()` do?
  it would refresh the whole page
- What property of a form element object contains all of the form's controls.
  the elements property. the elements property lists all the form controls that are contained within the form element
- What property of a form control object gets and sets its value?
  the value property
- What is one risk of writing a lot of code without checking to see if it works so far?
  errors will accumulate, making it harder to debug
- What is an advantage of having your console open when writing a JavaScript program?
  you can catch errors early

## Notes

All student notes should be written here.

<!-- //* inside HTML looks like this *// -->

```html
<form id="my-form">
  <label>
    Username:
    <input type="text" id="user-username" name="username" />
  </label>
  <label>
    Full name:
    <input type="text" id="user-full-name" name="full-name" />
  </label>
  <label>
    Password:
    <input type="password" id="user-password" name="password" />
  </label>
</form>
```

<!-- //* use these syntax when you're querying for form elements in the DOM *// -->

```javascript

------HOW TO ACCESS FORM CONTROL ELEMENTS-----

const formElements = document.querySelector('#my-form').elements;

// accessing form controls by index // (index value)

const $inputByIndex = formElements[0];

// accessing form controls by id // (bracket notation)

const $inputById = formElements['user-password'];

// accessing form controls by name // (dot notation)

const $inputByName = formElement.username;

-----INPUT EVENT EXPLAINED------

an input event is fired happens at the same time when the value of an <input>
<select>, or <textarea> element is changed. unlike the change event, which only fires
when the value is committed. the input event fires immediately after the value is modified.

** makes it useful for creating responsive interfaces that REACT as the user types or modifies a value **

--input event-- can be triggered: user typing, pasting text, deleting text, or by dragging and dropping text
into the input. its noteworthy that the input event is NOT fired for all input types such as
checkbox & radio

----** SUBMIT EVENT EXPLAINED **-----

the ---submit event--- is fired when a form is submitted. happens when user clicks submit button or when
the user presses Enter while inside a form field.
submit event allows us to perform validation before the form data is actually sent.
by default, when a form is submitted, the page is refreshed or navigated to the form's action URL

** you can prevent this by calling the preventDefault() method on the event object. which will allow
you to handle form submission using your JS code instead **





```

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
