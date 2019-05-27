import React from 'react';

const Register = () => {
  return (
    <form>
      <label htmlFor='email'>Email</label>
      <input type='text' name='email' id='email' />
      <label htmlFor='password'>Password</label>
      <input type='password' name='password' id='password' />
      <input type='submit' value='Register' />
    </form>
  );
};

export default Register;
