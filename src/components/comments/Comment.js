import React from 'react';
import VoteButton from './VoteButton';
import Author from './Author';
import CommentText from './CommentText';

const Comment = ({ author, date, comment, votes }) => {
  return (
    <article>
      <header>
        <VoteButton votes={votes} />
        <Author author={author} date={date} />
      </header>
      <CommentText text={comment} />
    </article>
  );
};

export default Comment;
