import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import { usePost } from 'use-http';
import jwtDecode from 'jwt-decode';
import { UserContext } from '../auth/AuthContext';

const Register = () => {
  const [, setUser] = useContext(UserContext);
  const { handleInputChange, inputs } = useForm();

  const [registerAttempt, loading, error, post] = usePost({
    baseUrl: 'https://cryptonews-server.herokuapp.com/api'
  });

  const handleSubmit = event => {
    event.preventDefault();

    if (inputs.password !== inputs.passwordRepeat) {
      console.log("Passwords don't match");
      return;
    }

    post('/register', {
      username: inputs.username,
      password: inputs.password
    });
  };

  console.log(registerAttempt);
  const storeCredentials = () => {
    const tokenDetails = jwtDecode(registerAttempt.token);
    setUser({
      username: tokenDetails.user.username,
      token: registerAttempt.token,
      isLoggedIn: true
    });
  };

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <div>Loading...</div>;
  if (registerAttempt && registerAttempt.token) storeCredentials();

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor='username'>Username</label>
      <input
        value={inputs.username || ''}
        onChange={handleInputChange}
        type='text'
        name='username'
        required
      />
      <label htmlFor='password'>Password</label>
      <input
        value={inputs.password || ''}
        onChange={handleInputChange}
        name='password'
        type='password'
        required
      />
      <label htmlFor='passwordRepeat'>Password (again)</label>
      <input
        value={inputs.passwordRepeat || ''}
        onChange={handleInputChange}
        name='passwordRepeat'
        type='password'
        required
      />
      <input type='submit' value='Register' />
    </form>
  );
};

export default Register;
