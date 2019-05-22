import React from 'react';
import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <>
      <h2>
        <Link to={'/n/free-wolfram-engine-for-developers'}>
          Free Wolfram Engine for Developers
        </Link>
      </h2>
      <span className='url'>
        (<a href='http://'>stephenwolfram.com</a>)
      </span>
    </>
  );
};

export default Title;
