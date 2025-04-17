# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?

fetch()

- What two things need to be done to properly handle HTTP request errors? Why?

- How can `useEffect` be used to load data for a component?

- How do you use `useEffect` to load component data just once when the component mounts?

- How do you use `useEffect` to load component data every time the data key changes?

- In a large-scale production app, what are some better alternatives for loading and managing backend data?

## Notes

to write an effect (useEffect) follow these 3 steps

1. declare an effect
2. specify the dependencies - place in an array at the end of the useEffect hook
3. add clean up if needed - this is a function that cleans up whatever effect just occurred

these are written just like any other hook, at the top level. useEffect "delays" a piece of code from running until that render is reflected on the screen

every time your component renders, react will update the screen and THEN run the code inside useEffect.

Effects run at the end of a commit after the screen updates.
Effect = in React, side effect caused by rendering

Effects are typically used to "step-out" of your React code and synchronize with some external system

you tell React to skip unnecessary re-running the Effect by specifying an array of dependencies as the second argument in the useEffect call

useEffect explanation:

useEffect (() => {
// this runs every render
});

useEffect (() => {
// this runs only on mount (when the component appears)
}, []);

useEffect (() => {
// this runs on mount and ALSO, if either a or b have changed since the last render
}, [ a , b ]);

a clean up function uses the keyword "return" and cleans up the function that was just executed in the useEffect. this is to reduce memory leaks

useEffect will be used in your event handlers
