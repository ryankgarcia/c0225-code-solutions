import './Password-Box.css';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

export function PasswordBox() {
  const [text, setText] = useState('');

  console.log('text', text);

  let showedErrorText: string = '';
  if (text.length === 0) {
    showedErrorText = 'A password is required.';
  } else if (text.length < 8) {
    showedErrorText = 'Your password is too short.';
  } else if (!/\d/.test(text)) {
    showedErrorText = 'Digit required.';
  } else if (!/[A-Z]/.test(text)) {
    showedErrorText = 'Uppercase required.';
  } else if (!/[!@#$%^&*()]/.test(text)) {
    showedErrorText = 'Special character required.';
  }
  return (
    <div>
      <div className="passwordBoxLabel">
        <label>Password:</label>
      </div>
      <input
        value={text}
        type="password"
        className="passwordBox"
        onChange={(e) => setText(e.target.value)}></input>
      <span>
        {showedErrorText.length === 0 ? (
          <FaCheck color="lime" />
        ) : (
          <FaTimes color="red" />
        )}
      </span>
      {showedErrorText && <div>{showedErrorText}</div>}
    </div>
  );
}
