import { useState } from 'react';
import { Popup } from './Popup';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function togglePopup() {
    setIsPopupOpen((prev) => !prev);
  }

  return (
    <>
      <button onClick={togglePopup}>
        {isPopupOpen ? 'Close Popup' : 'Open Popup'}
      </button>
      {isPopupOpen && (
        <Popup isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
      )}
    </>
  );
}

export default App;
