/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { UserCard } from './UserCard';
import type { User } from './Users';

type Props = {
  userId: number;
  onCancel: () => void;
};
export function UserDetails({ userId, onCancel }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function getData(userId: number) {
      const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Response status: ${res.status}`);
        }
        const json = (await res.json()) as User;
        setUser(json);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (userId) getData(userId);
  }, [userId]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !user) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }

  return (
    <div>
      <button onClick={() => onCancel()}>Close</button>
      <UserCard user={user} />
    </div>
  );
}
