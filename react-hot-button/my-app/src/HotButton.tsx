import { useState } from 'react';
import './App.css';

export function HotButton() {
  const [count, setCount] = useState(0);

  let color = 'purple';
  if (count <= 3) {
    color = 'purple';
  } else if (count <= 6) {
    color = 'mediumpurple';
  } else if (count <= 9) {
    color = 'red';
  } else if (count <= 12) {
    color = 'orange';
  } else if (count <= 15) {
    color = 'yellow';
  } else {
    color = 'white';
  }

  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        style={{ backgroundColor: color }}
        color="black">
        Hot Button
      </button>
      <p>Clicks: {count}</p>
    </div>
  );
}
