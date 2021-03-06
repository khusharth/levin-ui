import React from 'react';
import PropTypes from 'prop-types';

import './List.scss';

function List({ children, className, spacing, horizontal }) {
  const padding = `s-${spacing}`;
  const horizontalClass = `${horizontal ? 'list--horizontal' : ''}`;

  return (
    <ul
      className={`list__container ${padding} ${horizontalClass} ${className}`}
    >
      {children}
    </ul>
  );
}

List.defaultProps = {
  className: '',
  spacing: 1,
  horizontal: false,
};

List.propTypes = {
  className: PropTypes.string,
  spacing: PropTypes.number,
  horizontal: PropTypes.bool,
};

function ListItem({ children, className, color, divider, spacing }) {
  const listColor = `color-${color}`;
  const padding = `s-${spacing}`;

  return (
    <li
      className={`list-item__container ${
        divider ? 'list-item--divider' : ''
      } ${listColor} ${padding} ${className}`}
    >
      {children}
    </li>
  );
}

ListItem.defaultProps = {
  className: '',
  color: 'default',
  divider: false,
  spacing: 1,
};

ListItem.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'danger',
    'warning',
    'success',
  ]),
  divider: PropTypes.bool,
  spacing: PropTypes.number,
};

export default List;
export { ListItem };
