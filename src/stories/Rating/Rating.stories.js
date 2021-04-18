import React, { useState } from 'react';
import { Rating } from '../../components';

export function StarRatings() {
  const [rating, setRating] = useState(0);

  function handleRatingClick(newValue) {
    setRating(newValue);
  }

  return (
    <div>
      <Rating
        color="primary"
        max={6}
        size={40}
        value={rating}
        onRatingClick={handleRatingClick}
      />
    </div>
  );
}

export default {
  title: 'Components/Rating',
  component: Rating,
};
