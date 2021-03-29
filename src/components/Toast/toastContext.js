import React, { createContext, useReducer, useContext } from 'react';
import { ADD_NOTIFICATION, DELETE_NOTIFICATION } from './toastActions';

export const ToastContext = createContext();

function toastReducer(state, action) {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return [...state, action.payload];
    case DELETE_NOTIFICATION:
      return state.filter((toast) => toast.id !== action.payload);
    default:
      return state;
  }
}

export function ToastContextProvider({ children }) {
  const [state, dispatch] = useReducer(toastReducer, []);

  return (
    <ToastContext.Provider value={{ state, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  return useContext(ToastContext);
}
