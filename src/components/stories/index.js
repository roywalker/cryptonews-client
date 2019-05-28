import React from 'react';
import Story from './Story';
import useApi from '../../hooks/useApi';

const StoriesList = () => {
  const [stories, loading, error] = useApi(
    'https://cryptonews-server.herokuapp.com/api/posts'
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
