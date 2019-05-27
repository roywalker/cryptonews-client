import React from 'react';

const Details = ({ author, date, comments, localUrl, commentsView }) => {
  return (
    <div className='details'>
      by {author} | <time dateTime=''>{date}</time> |{' '}
      {!commentsView ? (
        <a href={localUrl}>
          {comments} {comments === '1' ? 'comment' : 'comments'}
        </a>
      ) : null}
    </div>
  );
};

export default Details;
