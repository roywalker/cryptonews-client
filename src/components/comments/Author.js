import React from 'react';

const Author = ({ author, date }) => {
  return (
    <div className='author'>
      <span>{author}</span> | <time dateTime=''>{date}</time>
    </div>
  );
};

export default Author;
