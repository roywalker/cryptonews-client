import React from 'react';

const Title = ({ title, url }) => {
  return (
    <>
      <h2>
        <a href={url}>{title}</a>
      </h2>
      <span className='url'>
        (<a href={url}>{url}</a>)
      </span>
    </>
  );
};

export default Title;
