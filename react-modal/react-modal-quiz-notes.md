# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?

the dialog element is used to show modal's in a subwindow

- How do you show and hide a modal dialog?

using the .showModal method, .show() method, and hide using the .close() method or pressing the ESC key

- How do you manipulate child components in React? Why will that not work for the `<dialog>` element?

via Props.
it won't work because dialog is an element inside of our component.

- How do you call the dialog element's functions in React?

using the useRef Hook and using it as an attribute to an element in the JSX

- How can you render nested components or JSX elements in React?

by passing them as children to the component

## Notes

The DOM has a <dialog> element that can be used to display a modal aka 'pop up'.

The dialog element in HTML represents a modal or non-modal dialog box or other interactive component such as an alert.

Modal dialog boxes, disrupt the user experience. While non-modal dialog boxes, allow the user to continue interacting with the webpage.

Remember from a previous exercise that .showModal() method displays a modal the user is forced to interact with, while..

a .show() method creates a non-distruptive modal the user will experience.

the .show() method and the .showModal() methods can be closed using the .close() method.

**React Documentation on useRef**

useRef is a React Hook(special React function)
const ref = useRef(initialValue)

It's common to use useRef to manipulate the DOM. To do this, first declare a ref object with an initial value of null.

const inputRef = useRef(null);

Then pass your ref object as teh ref attribute to the JSX of the DOM node you want to manipulate.

return <input ref={inputRef}>

After React creates the DOM node on screen, React will set the current property of your ref object to that DOM node. Now you can access the <input>'s DOM node can call methods like .focus()

function handleClick() {
inputRef.current.focus()
}

the focus method, lets you focus the element you have the method attached to

try initializing ref like this example:

function video() {
const playerRef = useRef(null);
if(playerRef.current === null) {
playerRef.current = new VideoPlayer();
}
}
