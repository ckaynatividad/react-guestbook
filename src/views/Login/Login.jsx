import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../components/PrivateRoute';
import { useUser } from '../../context/UserContext';

export default function Login() {
  const history = useHistory();
  const location = useLocation();
  const auth = useUser();
  const { formState, handleFormChange } = useForm({ email: '', password: '' });
  const { from } = location.state || { from: { pathname: '/guestbook' } };
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const loginWasSuccessful = auth.login(formState.email, formState.password);

    if (loginWasSuccessful) {
      history.replace(from.pathname);
    } else {
      setError('unsuccessful sign in');
    }
  };
  return (
    <div>
      <h1>login before seeing {from.pathname}</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleFormChange}
          />
        </label>{' '}
        <label>
          Password
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleFormChange}
          />
        </label>
        <button type="submit" onClick={handleLogin}>
          Sign In
        </button>
      </form>
      {error && <h1>{error}</h1>}
    </div>
  );
}
