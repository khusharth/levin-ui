import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Toast,
  ToastContextProvider,
  addToastNotification,
  useToastContext,
  Button,
} from '../../components';

// Example Array
const notifications = [
  {
    id: uuidv4(),
    type: 'success',
    message: 'Successfully retrieved all posts',
  },
  {
    id: uuidv4(),
    type: 'info',
    message: 'This is for your info',
  },
  {
    id: uuidv4(),
    type: 'warning',
    message: 'This is a warning message',
  },
  {
    id: uuidv4(),
    type: 'danger',
    message: 'This is an error message',
  },
];

function Toasts() {
  const { state, dispatch } = useToastContext();

  function handleClick(type) {
    switch (type) {
      case 'success':
        return dispatch(addToastNotification(uuidv4(), type, 'success'));
      case 'info':
        return dispatch(
          addToastNotification(uuidv4(), type, 'This is for your info')
        );
      case 'warning':
        return dispatch(
          addToastNotification(uuidv4(), type, 'This is a warning message')
        );
      case 'danger':
        return dispatch(
          addToastNotification(uuidv4(), type, 'This is an error message')
        );
      default:
        return;
    }
  }

  return (
    <>
      <div>
        <Button onClick={() => handleClick('info')}>Info</Button>
        <Button
          type="outlined"
          color="danger"
          onClick={() => handleClick('danger')}
        >
          Danger
        </Button>
      </div>
      <div>
        <Toast position="top-right" autoDeleteInterval={8000} />
      </div>
    </>
  );
}

export function ToastWrapped() {
  return (
    <ToastContextProvider>
      <Toasts />
    </ToastContextProvider>
  );
}

export default {
  title: 'Components/Toast',
  component: Toast,
};
