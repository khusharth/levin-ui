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
  function generateIcon(type) {
    switch (type) {
      case 'danger':
        return <MdErrorOutline />;
      case 'warning':
        return <MdWarning />;
      case 'success':
        return <MdDone />;
      case 'info':
        return <MdInfoOutline />;
      default:
        return;
    }
  }

  return (
    <div className={`alert alert--${type} ${className}`}>
      <span className="alert__icon">{generateIcon(type)}</span>
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
  type: PropTypes.oneOf(['info', 'success', 'danger', 'warning']),
  text: PropTypes.string.isRequired,
};

export default Alert;
