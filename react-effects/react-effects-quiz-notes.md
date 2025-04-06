# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

a component is mounted when it is first becomes visible on the webpage

- What is a React Effect?

a function that runs after a component mounts

- When should you use an Effect and when should you not use an Effect?

use an effect when we need to sync React with things outside of React. if we needed to take an effect as soon as my component mounts or re-renders

don't use an effect if we use state or props to change state, or we don't have things outside of React

- When do Effects run?

when the component mounts or
effects run once one of its dependencies changes

- What function is used to declare an Effect?

the useEffect Hook

- What are Effect dependencies and how do you declare them?

variables that when changed indicate your Effect needs to get executed again
your dependencies are the second argument of your useEffect function

- Why would you want to clean up from an Effect?

to eliminate memory leaks and resets the initial value of the effect

- How do you clean up from an Effect?

return a function, and the return should reset the action of what it is that you want to clean up

- When does the cleanup function run?

when its unmounted from the DOM

## Notes

(Render & commit in React)

You can use Strict mode to find mistakes in your components

Any screen update in React happens in three steps:

1. Trigger
2. Render
3. Commit

React does not touch the DOM if the rendering result is the same as the last time.

(Synchronizing Effects in React)

Effects let you run code after rendering so that you can synchronize your component with some system outside of React.

Effects let you specify side effects that are cause by rendering itself, rather than by a particular event.

Effects run at the end of a commit after the screen updates.

Effects are typically used to 'step out' of your React code and synchronize with some external system. This includes browser API's, third-party widgets, network, etc. You don't need Effect if your effect only adjusts some state based on other state.

**Lecture notes**
useEffect hook runs when its dependencies get updated or when the component mounts
useEffect will run, when the component is first visible on the webpage (components mounts). this is why we need to add dependencies whose state changes. so that if one of it's dependencies state changes, re-run the useEffect.

useEffect will run (executes what is inside the useEffect, and not the cleanup function) => execute on mount
cleanUp function will run (component is no longer visible on the DOM) => execute on unmount

you don't want to keep calling getData() because we just want to get it once, when the component initially mounts.

if there is a line of code you want to run in your TRY AND your CATCH block, put it in the FINALLY block. so when everything in your try block runs, at the end the finally block will run. and the same case, once everything in the catch block, the finally block will run at the end of that
