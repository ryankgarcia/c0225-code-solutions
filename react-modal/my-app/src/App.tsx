import { useState } from 'react';
import { Modal } from './Modal';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  function handleDelete() {
    alert('I have been deleted');
    setIsOpen(false);
  }

  // children in props (in Modal component) is referencing all the things nested in that component

  return (
    <div>
      <button onClick={handleOpen}>Delete me!</button>
      <Modal isOpen={isOpen}>
        <p>Are you sure you want to delete this?</p>
        <button onClick={handleClose}>Close</button>
        <button onClick={handleDelete}>Delete</button>
      </Modal>
    </div>
  );
}

export default App;
