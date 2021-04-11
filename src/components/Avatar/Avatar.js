import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Badge } from '../../components';

import AvatarPlaceholder from '../../assets/avatar.png';

import './Avatar.scss';

function AvatarGroup({ className, children }) {
  return <div className={`avatar__container ${className}`}>{children}</div>;
}

AvatarGroup.defaultProps = {
  className: '',
};

function Avatar({ className, image, alt, size, type, showBadge, badgeColor }) {
  const [src, setSrc] = useState(image || AvatarPlaceholder);

  return (
    <figure className={`avatar avatar--${type} avatar--${size} ${className}`}>
      <img
        className="avatar__img"
        src={src}
        alt={alt}
        onError={() => setSrc(AvatarPlaceholder)}
      />
      {showBadge && (
        <Badge
          size="md"
          color={badgeColor}
          type={type}
          className={`avatar__badge avatar__badge--${size}`}
        ></Badge>
      )}
    </figure>
  );
}

Avatar.defaultProps = {
  className: '',
  alt: '',
  type: 'round',
  size: 'md',
  showBadge: false,
  badgeColor: 'danger',
};

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.oneOf(['round', 'square']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  showBadge: PropTypes.bool,
  badgeColor: PropTypes.string,
};

export { AvatarGroup, Avatar };
