export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const POST_ACTIVITY_FORM = 'POST_ACTIVITY_FORM';
export const RESET_ACTIVITY_FORM = 'RESET_ACTIVITY_FORM';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';

export const changeInputValue = (value, identifier) => ({
  type: CHANGE_INPUT_VALUE,
  value,
  identifier,
});

export const postActivityForm = (navigate) => ({
  type: POST_ACTIVITY_FORM,
  navigate,
});

export const resetActivityForm = () => ({
  type: RESET_ACTIVITY_FORM,
});

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  message,
});
