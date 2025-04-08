import './App.css';

import { RegistrationFormControlled } from './RegistrationFormControlled';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { UserForm } from './UserForm';

function App() {
  return (
    <div>
      <h3>Uncontrolled</h3>
      <RegistrationFormUncontrolled />
      <h3>Controlled</h3>
      <RegistrationFormControlled />
      <h3>Create User</h3>
      <UserForm />
      <h3>Edit User</h3>
      <UserForm user={{ username: 'Bryan', password: 'James' }} />
    </div>
  );
}

export default App;
