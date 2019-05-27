import React from 'react';

const VoteButton = ({ votes }) => {
  return (
    <button>
      ^ <span>{votes}</span>
    </button>
  );
};

export default VoteButton;
