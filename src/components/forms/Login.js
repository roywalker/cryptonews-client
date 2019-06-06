import React, { useContext } from 'react';
import useForm from '../../hooks/useForm';
import { usePost } from 'use-http';
import jwtDecode from 'jwt-decode';
import { UserContext } from '../auth/AuthContext';

const Login = () => {
  const [, setUser] = useContext(UserContext);
  const { handleInputChange, inputs } = useForm();

  const [loginAttempt, loading, error, post] = usePost({
    baseUrl: 'https://cryptonews-server.herokuapp.com/api'
  });

  const handleSubmit = event => {
    event.preventDefault();

    post('/login', {
      username: inputs.username,
      password: inputs.password
    });
  };

  const storeCredentials = () => {
    const tokenDetails = jwtDecode(loginAttempt.token);
    setUser({
      username: tokenDetails.user.username,
      token: loginAttempt.token,
      isLoggedIn: true
    });
  };

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <div>Loading...</div>;
  if (loginAttempt && loginAttempt.token) storeCredentials();

  return (
    <form onSubmit={handleSubmit}>
      <h2>Log in</h2>
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
      <input type='submit' value='Login' />
    </form>
  );
};

export default Login;
