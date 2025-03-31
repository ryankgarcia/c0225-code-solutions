import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React JSX</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Total Button Clicks: {count}
        </button>
        <p>
          JSX is a syntax extension of JavaScript that allows developers to
          create DOM elements dynamically
        </p>
        <p>
          React calls the component function, which then returns JSX. React then
          converts the JSX to HTML and pushes it to the DOM.
        </p>
      </div>
    </>
  );
}

export default App;
