import React from 'react';
import VoteButton from './VoteButton';
import Title from './Title';
import Details from './Details';

const Story = ({ story, commentsView }) => {
  return (
    <article className='story'>
      <header>
        <VoteButton votes={story.votes} />
        <Title title={story.title} url={story.url} />
      </header>
      <Details
        author={story.author}
        comments={story.comments}
        date={story.date}
        slug={`/n/${story.slug}`}
        commentsView={commentsView}
      />
    </article>
  );
};

export default Story;
