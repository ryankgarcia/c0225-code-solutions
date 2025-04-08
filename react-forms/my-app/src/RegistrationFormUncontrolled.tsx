import './RegistrationFormUncontrolled.css';
import type { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const entries = new FormData(event.currentTarget);
    const data = Object.fromEntries(entries);
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" placeholder="Username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder="Password" />
      </label>
      <button>Sign up</button>
    </form>
  );
}
