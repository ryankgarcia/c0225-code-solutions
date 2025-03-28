# react-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do controlled components differ from uncontrolled components?

uncontrolled - the component manages its own state (managed by the DOM)

controlled - a component that is controlled by React

- What are some advantages of using uncontrolled components?

They are simpler to use. they don't need state

- What are some advantages of using controlled components?

React will take care of event handling

- Which style do you prefer?

controlled, so that I don't rely on the DOM to control the component

- What two props must you pass to an input for it to be "controlled"?

value and onChange props

- What are some popular npm packages for creating forms in React?
  ** if an app uses a lot of forms or has complex forms, use an npm package designed specifically for building forms **

**React Hook Form (lightweight, easy to use)**,
Formik (complex to use, but handles complex forms well),
React Final Form

## Notes

Notes about how to do the first form

To do...

-Create a component named RegistrationFormUncontrolled that...
-Renders a <form> containing..
-Two <input> elements that are each wrapped in a <label> element
-1. Username
-2. Password
a <button> element that submits the form

Define a handleSubmit function that is called when the form is submitted

The proper TypeScript type for the event parameter is FormEvent<HTMLFormElement>, where FormEvent is a named import from 'react'.

When the form is submitted, log the form values to the console, as { username, password }. To do this, you will need to extract currentTarget from the form, use FormData to get the form content, and Object.fromEntries(formData) to get the individual field values.

If you need it, you can cast the event's currentTarget TypeScript type to HTMLFormElement.
Put this component in your App and test it.

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
