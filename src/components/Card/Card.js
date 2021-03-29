import React from 'react';
import { Badge } from '../../components';

import './Card.scss';

function Card({ className, children, horizontal, showBadge, badgePosition }) {
  return (
    <div
      className={`card ${horizontal ? 'card--horizontal' : ''} ${className}`}
    >
      {children}
      {showBadge && (
        <div className={`card__badge card__badge--${badgePosition}`}>
          <Badge>Trending!</Badge>
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
};

function CardHeader({ className, header, subheader }) {
  return (
    <div className={`card__header ${className}`}>
      <h3 className="card__header-main">{header}</h3>
      <h5 className="card__header-sub">{subheader}</h5>
    </div>
  );
}

function CardImage({ className, image, alt }) {
  return (
    <figure className={`card__image-container ${className}`}>
      <img className="card__image" src={image} alt={alt} />
    </figure>
  );
}

CardImage.defaultProps = {
  alt: '',
  className: '',
};

function CardFooter({ className, children }) {
  return <div className={`card__footer ${className}`}>{children}</div>;
}

export { Card, CardHeader, CardImage, CardFooter };
