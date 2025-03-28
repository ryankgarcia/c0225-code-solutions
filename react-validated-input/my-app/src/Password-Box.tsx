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
        {text.length < 8 ? <FaTimes color="red" /> : <FaCheck color="lime" />}
      </span>
      <div>{showedErrorText}</div>
    </div>
  );
}
