import React from 'react';
import VoteButton from './VoteButton';
import Title from './Title';
import Details from './Details';

const Link = () => {
  return (
    <article className='link'>
      <header>
        <VoteButton />
        <Title />
      </header>
      <Details />
    </article>
  );
};

export default Link;
