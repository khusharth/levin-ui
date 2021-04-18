export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION';

export function addToastNotification(id, type, message) {
  return {
    type: ADD_NOTIFICATION,
    payload: {
      id,
      type,
      message,
    },
  };
}

export function deleteToastNotification(id) {
  return {
    type: DELETE_NOTIFICATION,
    payload: id,
  };
}
