import { type FormEvent, useState } from 'react';
import './RegistrationFormUncontrolled.css';

export type User = {
  username: string;
  password: string;
};

type Props = {
  user?: User;
};

export function UserForm({ user }: Props) {
  const [username, setUsername] = useState(user?.username ?? '');
  const [password, setPassword] = useState(user?.password ?? '');
  const isCreating = user === undefined;

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (isCreating) {
      console.log('Created', { username, password });
    } else {
      user.username = username;
      user.password = password;
      console.log('Edited', user);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Sign up</button>
    </form>
  );
}
