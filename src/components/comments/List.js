import React from 'react';
import Comment from './Comment';

const List = ({ comments }) => {
  return (
    <section className='comments'>
      <h3>
        {comments.count} {comments.count === '1' ? 'comment' : 'comments'}
      </h3>
      {comments.results.map(comment => (
        <Comment
          key={comment.id}
          author={comment.author}
          date={comment.date}
          comment={comment.comment}
          votes={comment.votes}
        />
      ))}
    </section>
  );
};

export default List;
