import React from 'react';

const Box = ({ children, heading }) => {
  return (
    <div>
      {heading ? <h3>{heading}</h3> : null}
      {children}
    </div>
  );
};

export default Box;
