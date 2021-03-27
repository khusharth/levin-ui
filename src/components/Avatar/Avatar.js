import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AvatarPlaceholder from '../../assets/avatar.png';

import './Avatar.scss';

function AvatarGroup({ className, children }) {
  return <div className={`avatar__container ${className}`}>{children}</div>;
}

AvatarGroup.defaultProps = {
  className: '',
};

function Avatar({ className, image, alt, size, type, displayBadge }) {
  const [src, setSrc] = useState(image || AvatarPlaceholder);

  return (
    <figure className={`avatar avatar--${type} avatar--${size} ${className}`}>
      <img
        className="avatar__img"
        src={src}
        alt={alt}
        onError={() => setSrc(AvatarPlaceholder)}
      />
      {displayBadge && (
        <div className={`avatar__badge avatar__badge--${size}`}></div>
      )}
    </figure>
  );
}

Avatar.defaultProps = {
  className: '',
  alt: '',
  type: 'circle',
  size: 'md',
  displayBadge: false,
};

Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.oneOf(['circle', 'square']),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  displayBadge: PropTypes.bool,
};

export { AvatarGroup, Avatar };

export default Avatar;
