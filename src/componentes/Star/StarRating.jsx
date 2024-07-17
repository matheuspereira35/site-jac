import React from 'react';
import Star from './Star';

const StarRating = ({ rating }) => {
  const maxStars = 5;
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0);

  return (
    <div>
      {[...Array(filledStars)].map((_, index) => (
        <Star key={index} filled={true} />
      ))}
      {halfStar && <Star filled={true} style={{ opacity: 0.5 }} />}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={index + filledStars + 1} filled={false} />
      ))}
    </div>
  );
};

export default StarRating;
