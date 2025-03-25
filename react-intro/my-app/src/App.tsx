import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Day 1 for Ryan G!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          counting clicks here! {count}
        </button>
        <p>
          Made a few <code>src/App.tsx</code> edits to test this file
        </p>
      </div>
      <p className="read-the-docs">
        Learned a few cool things about React by reading the documentation!
        Woohooo!!
      </p>
    </>
  );
}

export default App;
