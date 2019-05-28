import React from 'react';
import { Link } from 'react-router-dom';

const Details = ({ author, date, comments, slug, commentsView }) => {
  return (
    <div className='details'>
      by {author} | <time dateTime=''>{date}</time> |{' '}
      {!commentsView ? (
        <Link to={slug}>
          {comments} {comments === '1' ? 'comment' : 'comments'}
        </Link>
      ) : null}
    </div>
  );
};

export default Details;
