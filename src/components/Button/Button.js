import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ children, type, className, size, disabled, onClick, href }) {
  const btnType = type ? `btn-${type}` : '';

  if (!href) {
    return (
      <button
        className={`btn ${btnType} btn-${size} ${className}`}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <a
        className={`btn ${btnType} btn-${size} ${className}`}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
}

Button.defaultProps = {
  btnType: '',
  className: '',
  size: 'md',
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'secondary', 'icon']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  href: PropTypes.string,
};

export default Button;
