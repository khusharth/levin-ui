import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from '../../components';

import './Card.scss';

function Card({
  className,
  children,
  horizontal,
  showBadge,
  badgePosition,
  badgeText,
}) {
  return (
    <div
      className={`card ${horizontal ? 'card--horizontal' : ''} ${className}`}
    >
      {children}
      {showBadge && (
        <div className={`card__badge card__badge--${badgePosition}`}>
          <Badge>{badgeText}</Badge>
        </div>
      )}
    </div>
  );
}

Card.defaultProps = {
  horizontal: false,
  showBadge: false,
  badgePosition: 'top',
  className: '',
  badgeText: '',
};

Card.propTypes = {
  horizontal: PropTypes.bool,
  showBadge: PropTypes.bool,
  badgePosition: PropTypes.oneOf(['top']),
  className: PropTypes.string,
  badgeText: PropTypes.string,
};

function CardHeader({ className, header, subheader }) {
  return (
    <div className={`card__header ${className}`}>
      <h3 className="card__header-main">{header}</h3>
      <h5 className="card__header-sub">{subheader}</h5>
    </div>
  );
}

CardHeader.defaultProps = {
  header: '',
  subheader: '',
  className: '',
};

CardHeader.propTypes = {
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  className: PropTypes.string,
};

function CardImage({ className, image, alt }) {
  return (
    <figure className={`card__image-container ${className}`}>
      <img className="card__image" src={image} alt={alt} />
    </figure>
  );
}

CardImage.defaultProps = {
  alt: '',
  image: '',
  className: '',
};

CardImage.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export { Card, CardHeader, CardImage };
