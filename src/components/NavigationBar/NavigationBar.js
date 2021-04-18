import React from 'react';
import PropTypes from 'prop-types';

import './NavigationBar.scss';

function NavigationBar({ children, className, fixed }) {
  return (
    <nav
      className={`navigation ${fixed ? 'navigation--fixed' : ''} ${className}`}
    >
      <div className="navigation__container">{children}</div>
    </nav>
  );
}

NavigationBar.defaultProps = {
  className: '',
  fixed: false,
};

NavigationBar.propTypes = {
  className: PropTypes.string,
  fixed: PropTypes.bool,
};

export default NavigationBar;
