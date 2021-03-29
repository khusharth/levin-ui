import React from 'react';
import Proptypes from 'prop-types';
import { useToastContext } from './toastContext';
import {
  MdInfoOutline,
  MdWarning,
  MdErrorOutline,
  MdDone,
  MdClear,
} from 'react-icons/md';

import { deleteToastNotification } from './toastActions';

import './Toast.scss';

const Toast = ({ position, autoDeleteInterval }) => {
  const { state, dispatch } = useToastContext();

  function generateIcon(type) {
    switch (type) {
      case 'info':
        return <MdInfoOutline />;
      case 'warning':
        return <MdWarning />;
      case 'danger':
        return <MdErrorOutline />;
      case 'success':
        return <MdDone />;
      default:
        return;
    }
  }

  return (
    <div className={`toast__container toast--${position}`}>
      {state.map((toast, i) => {
        if (autoDeleteInterval) {
          setInterval(() => {
            dispatch(deleteToastNotification(toast.id));
          }, autoDeleteInterval);
        }
        return (
          <div key={toast.id} className={`toast toast--${toast.type}`}>
            <MdClear
              onClick={() => dispatch(deleteToastNotification(toast.id))}
              className="toast__btn-close"
            />
            <div className="toast__icon">{generateIcon(toast.type)}</div>
            <div>
              <p className="toast__message">{toast.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Toast.defaultProps = {
  position: 'top-right',
};

Toast.prototypes = {
  position: Proptypes.oneOf([
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
  ]),
  autoDeleteInterval: Proptypes.number,
};

export default Toast;
