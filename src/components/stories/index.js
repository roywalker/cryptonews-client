import React, { useEffect, useState } from 'react';
import Story from './Story';
import axios from 'axios';

const StoriesList = () => {
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStories() {
      try {
        setError(false);
        const res = await axios(
          'https://cryptonews-server.herokuapp.com/api/posts'
        );
        setStories(res.data.results);
      } catch (err) {
        setError(true);
      }
    }

    fetchStories();
  }, []);

  if (error) return <div>Something went wrong...</div>;
  if (!stories.length) return <div>Loading...</div>;

  return (
    <section className='stories-list'>
      {stories.map(story => (
        <Story key={story.id} story={story} />
      ))}
    </section>
  );
};

export default StoriesList;
