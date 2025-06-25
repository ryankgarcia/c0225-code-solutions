import { useRef, useState } from 'react';
import { Popup } from './Popup';
import './App.css';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function togglePopup() {
    setIsPopupOpen((prev) => !prev);
  }

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <button ref={buttonRef} onClick={togglePopup}>
        {isPopupOpen ? 'Close Popup' : 'Open Popup'}
      </button>
      {isPopupOpen && (
        <Popup
          isPopupOpen={isPopupOpen}
          positionTo={buttonRef.current}
          onClose={() => setIsPopupOpen(false)}>
          <div>
            <ul style={{ listStyleType: 'none' }} className="shaded-border">
              <li>Dog</li>
              <li>Cat</li>
              <li>Giraffe</li>
              <li>Goat</li>
              <li>Duck</li>
              <li>Monkey</li>
              <li>Bull</li>
              <li>Pig</li>
            </ul>
          </div>
        </Popup>
      )}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </>
  );
}

export default App;
