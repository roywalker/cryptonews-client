import React from 'react';
import Story from './Story';
import { useGet } from 'use-http';

const StoriesList = () => {
  const { data: stories, error, loading } = useGet(
    'https://cryptonews-server.herokuapp.com/api/posts',
    {
      onMount: true
    }
  );

  if (error) return <div>Something went wrong...</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <section className='stories-list'>
      {stories.results.map(story => (
        <Story key={story.id} story={story} />
      ))}
    </section>
  );
};

export default StoriesList;
