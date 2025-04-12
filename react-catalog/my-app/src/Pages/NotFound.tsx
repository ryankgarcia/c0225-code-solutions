import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <>
      <h2>Not Found</h2>
      <Link to="/">Back to home</Link>
    </>
  );
}
