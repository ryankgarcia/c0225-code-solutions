# react-carousel-component-notes

## Notes

The breakdown of how to build this carousel will go like this...

What needs to happen...
The carousel needs to automatically step to the next image every 3 seconds.
When it reaches the last image it should reset to the first image.

User needs to be able to click on the next (arrow) icon OR a progress dot to switch the image.
User can click on previous icon to return the previous image.

After 3 seconds the carousel will resume automatically stepping to the next image.

1. What is the layout? (Layout)

organize the pictures (input the array of images)
create the Carousel component in its own file (define it with export keyword)
import the Carousel component in the App() along with its props
import the arrow's & dots from React icons(for the user to click on later)
give it it's own CSS file

2. What is controlling state? What changes? (State)

the pictures need to change.

3. What events will I have? (Events)

onClick event handler needs to be defined in order to cycle to the next photo
(add an event handler to each the dot and the arrow...no new event handler needs to be defined)
