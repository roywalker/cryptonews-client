import React, { useEffect, useState } from 'react';
import Story from './Story';
import axios from 'axios';

const StoriesList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      const res = await axios('http://localhost:3001/api/posts');
      setStories(res.data.results);
    }

    fetchStories();
  }, []);

  return (
    <section className='stories-list'>
      {stories.map(story => (
        <Story key={story.id} story={story} />
      ))}
    </section>
  );
};

export default StoriesList;
