import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MdStar, MdStarBorder } from 'react-icons/md';

import './Rating.scss';

function Rating({ className, color, value, onRatingClick, max, size }) {
  const [hoverRating, setHoverRating] = useState(null);

  function fillRating(ratingValue) {
    // On hover
    if (hoverRating >= ratingValue) {
      return true;
      // On Click
    } else if (!hoverRating && value >= ratingValue) {
      return true;
    }
    return false;
  }

  function handleRatingClick(newValue) {
    onRatingClick && onRatingClick(newValue);
  }

  return (
    <div>
      {[...Array(max)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <input
              className="rating__input"
              type="radio"
              name="rating"
              value={value}
              onClick={() => handleRatingClick(ratingValue)}
            />
            {fillRating(ratingValue) ? (
              <MdStar
                className={`rating rating--${color} ${className}`}
                size={size}
                onMouseEnter={() => setHoverRating(ratingValue)}
                onMouseLeave={() => setHoverRating(null)}
              />
            ) : (
              <MdStarBorder
                className={`rating rating--${color} ${className}`}
                size={size}
                onMouseEnter={() => setHoverRating(ratingValue)}
                onMouseLeave={() => setHoverRating(null)}
              />
            )}
          </label>
        );
      })}
    </div>
  );
}

Rating.defaultProps = {
  color: 'default',
  className: '',
  max: 5,
  size: 30,
};

Rating.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  max: PropTypes.number,
  size: PropTypes.number,
  value: PropTypes.number.isRequired,
  onRatingClick: PropTypes.func.isRequired,
};

export default Rating;
