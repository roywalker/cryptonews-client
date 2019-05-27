import React from 'react';

const Login = () => {
  return (
    <form>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' id='email' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' />
      <input type='submit' value='Login' />
    </form>
  );
};

export default Login;
