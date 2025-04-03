# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?

Hooks control state in React and are special functions that allow components to have access to state and other React features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

1. the function name must start with `use` followed by an uppercase letter
2. Hooks can only be called by React components and other hooks
3. All hooks in a component must always be called at the top level of a component, AND in the same order. You cannot call hooks in nested functions or conditional statements. They must be put at the top level of your code.

- What is the purpose of state in React?

to save a components memory across re-renders

- Why can't we just maintain state in a local variable?

local variables do not persist between function calls because each time a function is called new local variables are allocated

- What two actions happen when you call a `state setter` function?

1. updates the cache
2. triggers a re-render

- When does the local `state variable` get updated with the new value?

The updated value will not be available until the component is re-rendered

Is a better way to handle the cycling of the image, image caption, and image description so that one click can advance them all in sync?

The most efficient method to update all the useState from each component would be to manage the useState inside the App function. This will put them all in sync together.

## Notes

Answer to the last Q in the reading...
_If I want the image, description, and caption I need State to all control them together. I would do this by putting state in the app instead of the lower components so they all rotate together at the same time._

**Documentation Notes**

Component specific memory is known as 'State'. This is because components often need to change what is on the screen as a result of an interaction made by the user.

`const [index, setIndex] = useState(0);`

in this example...
'index' is the State variable and..
'setIndex' is known as the StateSetter Function

the [ ] syntax is array destructuring and lets you read values from an array.
The array returned by useState ALWAYS has exactly two items.

this is an example of how they work together..

` function handleClick() {
setIndex(index + 1);
}`

In React, any function starting with 'use' is called a Hook
Hooks are special functions that are only available while React is rendering. They let you 'hook' into different React features.

Hooks (special React functions starting with 'use') can only be defined at the top level of your components..or your own Hooks. You CANNOT call Hooks inside conditions, loops, or nested functions. They are similar to how you import modules at the top of your file

When calling 'useState' you are saying to React that you want this component to remember something. In the example above you called this 'index'. Conventions make things easy to remember across projects so try and keep it simple to remember. The convention we will use is this..

`const [something, setSomething]` when referring to the 'use' Hook.
The only argument to useState is the initial value of your state variable

In React, a component will be re-rendered when...

1. The state value is updated - (schedules a re-render)
2. A component's parent is re-rendered

<button onClick={()=> setCount(count+1)}>count is {count}</button>

this <button> above..
adds an onClick handler to the button
gives the onClick handler an arrow function to call on click which calls the setCount (stateSetter) function and passes it the current value of count+1

Keep in mind, onClick is now a prop so be sure to include it in your props for the component

WHEN THE BUTTON IS CLICKED...
-the new value of count will be cached and stored by React (so value is not lost)
-React will schedule a re-render of the App component because it's state was changed using a StateSetter function
-when the component re-renders and calls useState, the updated cached value of count will be returned and assigned to the count variable

**Personal Side Note**
useState Hook uses TypeScript Generics to indicate the data type of the state variable. Usually, TypeScript can figure out the type on its own, BUT when it cannot the following is how you write the syntax for a useState Hook.

`const [value, setValue] = useState<number>()`
the data type gets passed in the Generic which is <>
and the initial value gets passed in the parenthesis ().

**Lecture Notes**

State is to hold things that change the look of the component during its lifetime.

Local variables can not hold State.

The only way to change your state value, it to call the state setter.

The argument given to the initial useState() is only used on the first mount.
If its not the first render, the cache is checked

If you want the page to re-render, you must call a state setter.
