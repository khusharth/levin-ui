import React from 'react';
import PropTypes from 'prop-types';

import './Badge.scss';

function Badge({ children, className, type, color, size }) {
  return (
    <div
      className={`badge badge--${type} badge--${color} badge--${size} ${className}`}
    >
      {children}
    </div>
  );
}

Badge.defaultProps = {
  className: '',
  type: 'default',
  color: 'primary',
  size: 'md',
};

Badge.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['default', 'round']),
  color: PropTypes.oneOf(['primary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

export default Badge;
