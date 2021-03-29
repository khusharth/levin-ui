import React from 'react';
import PropTypes from 'prop-types';

import './NavigationBar.scss';

function NavigationBar({ logo, children, className, fixed }) {
  return (
    <nav
      className={`navigation ${fixed ? 'navigation--fixed' : ''} ${className}`}
    >
      <div className="navigation__container">
        {logo && (
          <div className="navigation__logo">
            <img className="image-responsive" src={logo} alt="logo" />
          </div>
        )}
        <ul className="navigation__list">{children}</ul>
      </div>
    </nav>
  );
}

NavigationBar.defaultProps = {
  className: '',
  logo: '',
  fixed: false,
};

NavigationBar.propTypes = {
  className: PropTypes.string,
  logo: PropTypes.string,
  fixed: PropTypes.bool,
};

export default NavigationBar;
