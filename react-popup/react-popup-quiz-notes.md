# typescript-popup-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a React Portal?

A portal is a React special function that changes the physical placement of the DOM node. Portals let your components render some of their children into a different place in the DOM. This lets part of your component 'escape' from whatever containers it may be in

- Where does a Portal get rendered in the DOM?

in the the domNode specified. it is the second argument when calling the createPortal reference

- When might you want to use a Portal?

when rendering modal dialog that you want to show outside of a container in the DOM, floating above the rest of the content on the page.

## Notes

'createPortal' lets you render some children into a different part of the DOM

to create a portal call 'createPortal' passing some JSX and the DOM node where it should be rendered

{createPortal (children, domNode, key?)}

Ex:
import { createPortal } from 'react-dom';

// ...

<div>
  <p>This child is placed in the parent div.</p>
  {createPortal(
    <p>This child is placed in the document body.</p>,
    document.body
  )}
</div>

you can use a portal to create a modal dialog that floats above the rest of the page, even if the component that summons the dialog is inside a container with overflow: hidden or other styles that interfere with the dialog.

you can also use a portal to manage the content of a DOM node that's managed outside of React. Suppose you're integrating with a non-React map widget and you want to render React content inside a popup. Declare a popupContainer state variable to store the DOM node you're going to render into

const [popupContainer, setPopupContainer] = useState(null);

when you create the third-party widget, store the DOM node returned by the widget so you can render into it

useEffect(() => {
if(mapRef.current === null) {
const map = createMapWidget(containerRef.current);
mapRef.current = map;
const popupDiv = addPopupToMapWidget(map);
setPopupContainer(popupDiv);
}
}, [])

this lets you use createPortal to render React content into popupContainer once it becomes available

return (

  <div>{popupContainer !== null && createPortal(
    <p>Hello from React!</p>,
    popupContainer
  )}
  </div>
);
