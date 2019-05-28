import React from 'react';
import Story from '../stories/Story';
import List from './List';
import useApi from '../../hooks/useApi';

const CommentsList = ({ match }) => {
  const [story, loading, error] = useApi(
    `https://cryptonews-server.herokuapp.com/api/post/${match.params.slug}`
  );

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Story commentsView={true} story={story} />
      <List comments={story.comments} />
    </>
  );
};

export default CommentsList;
