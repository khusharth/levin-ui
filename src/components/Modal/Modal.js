import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { Button } from '../../components';

import './Modal.scss';

function Modal({ open, onClose, heading, children, className, portalId }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="modal__overlay"></div>
      <div className={`modal ${className}`}>
        <div className="modal__header">
          <h3>{heading}</h3>
          <span onClick={onClose} className="modal__close-icon">
            x
          </span>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </>,
    document.getElementById(portalId)
  );
}

Modal.defaultProps = {
  open: false,
  className: '',
  portalId: 'root',
  heading: '',
};

Modal.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  portalId: PropTypes.string,
  heading: PropTypes.string,
};

export default Modal;
