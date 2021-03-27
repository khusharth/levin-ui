import React from 'react';
import {
  MdInfoOutline,
  MdWarning,
  MdErrorOutline,
  MdDone,
} from 'react-icons/md';
import PropTypes from 'prop-types';

import './Alert.scss';

function Alert({ text, type, className }) {
  let icon;
  switch (type) {
    case 'error':
      icon = <MdErrorOutline />;
      break;
    case 'warning':
      icon = <MdWarning />;
      break;
    case 'success':
      icon = <MdDone />;
      break;
    case 'info':
      icon = <MdInfoOutline />;
      break;
    default:
      icon = <MdInfoOutline />;
      break;
  }

  return (
    <div className={`alert alert--${type} ${className}`}>
      <span className="alert__icon">{icon}</span>
      <div className="alert__text">{text}</div>
    </div>
  );
}

Alert.defaultProps = {
  className: '',
  type: 'info',
};

Alert.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
  text: PropTypes.string.isRequired,
};

export default Alert;
