import './RegistrationFormUncontrolled.css';

function preventDefault() {
  throw new Error('Function not implemented.');
}

export function RegistrationFormUncontrolled() {
  preventDefault();

  // function handleSubmit() {

  // }
  return (
    <form>
      <label>
        {' '}
        Username:
        <input type="text"></input>
      </label>
      <label>
        {' '}
        Password:
        <input type="password"></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
