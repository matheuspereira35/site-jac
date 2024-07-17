import React from 'react';
import "./Star.css"

const Star = ({ filled }) => {
  return (
    <span className='star'>
      {filled ? '★' : '☆'}
    </span>
  );
};

export default Star;
