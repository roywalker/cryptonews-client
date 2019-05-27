import React from 'react';

const Details = ({ author, date, comments, slug, commentsView }) => {
  return (
    <div className='details'>
      by {author} | <time dateTime=''>{date}</time> |{' '}
      {!commentsView ? (
        <a href={slug}>
          {comments} {comments === '1' ? 'comment' : 'comments'}
        </a>
      ) : null}
    </div>
  );
};

export default Details;
