import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => {
  return (
    <>
      <Link to={'/add'}>Add new link</Link>
    </>
  );
};

export default AddButton;
