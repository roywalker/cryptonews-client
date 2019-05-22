import React from 'react';
import VoteButton from './VoteButton';
import Author from './Author';
import CommentText from './CommentText';

const Comment = () => {
  return (
    <article>
      <header>
        <VoteButton />
        <Author />
      </header>
      <CommentText />
    </article>
  );
};

export default Comment;
