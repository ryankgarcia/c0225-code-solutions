# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?

- What is a React Effect?

- When should you use an Effect and when should you not use an Effect?

- When do Effects run?

- What function is used to declare an Effect?

- What are Effect dependencies and how do you declare them?

- Why would you want to clean up from an Effect?

- How do you clean up from an Effect?

- When does the cleanup function run?

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
