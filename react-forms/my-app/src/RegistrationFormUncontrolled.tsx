import './RegistrationFormUncontrolled.css';
import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const entries = new FormData(event.currentTarget);
    const data = Object.fromEntries(entries);
    console.log('data', data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" placeholder="Username" name="username"></input>
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder="Password"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
