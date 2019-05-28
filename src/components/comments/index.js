import React, { useState, useEffect } from 'react';
import Story from '../stories/Story';
import List from './List';
import axios from 'axios';

const CommentsList = ({ match }) => {
  const [story, setStory] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStory() {
      setError(false);
      try {
        const res = await axios(
          `https://cryptonews-server.herokuapp.com/api/post/${
            match.params.slug
          }`
        );
        setStory(res.data);
      } catch (err) {
        setError(true);
      }
    }

    fetchStory();
  }, [match.params.slug, story]);

  if (error) return <div>Something went wrong...</div>;
  if (!story) return <div>Loading...</div>;

  return (
    <>
      <Story commentsView={true} story={story} />
      <List comments={story.comments} />
    </>
  );
};

export default CommentsList;
