import React, { useState, useEffect } from 'react';
import Story from '../stories/Story';
import List from './List';
import axios from 'axios';

const CommentsList = ({ match }) => {
  const [story, setStory] = useState('');

  useEffect(() => {
    async function fetchStory() {
      const res = await axios(
        `http://localhost:3001/api/post/${match.params.slug}`
      );
      setStory(res.data);
    }

    fetchStory();
  }, [match.params.slug, story]);

  if (!story) return null;

  return (
    <>
      <Story commentsView={true} story={story} />
      <List comments={story.comments} />
    </>
  );
};

export default CommentsList;
