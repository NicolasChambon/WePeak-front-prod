export const CHANGE_REGISTER_INPUT = 'CHANGE_REGISTER_INPUT';
export const POST_REGISTER_FORM = 'POST_REGISTER_FORM';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const RESET_REGISTER_FORM = 'RESET_REGISTER_FORM';

export const changeRegisterInput = (value, identifier) => ({
  type: CHANGE_REGISTER_INPUT,
  value,
  identifier,
});

export const postRegisterForm = (navigate) => ({
  type: POST_REGISTER_FORM,
  navigate,
});

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  message,
});

export const resetRegisterForm = () => ({
  type: RESET_REGISTER_FORM,
});
