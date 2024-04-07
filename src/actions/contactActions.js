export const CHANGE_CONTACT_INPUT = 'CHANGE_CONTACT_INPUT';
export const POST_CONTACT_FORM = 'POST_CONTACT_FORM';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const SET_SUCCESS_MESSAGE = 'SET_SUCCESS_MESSAGE';
export const RESET_CONTACT_FORM = 'RESET_CONTACT_FORM';

export const changeContactInput = (value, identifier) => ({
  type: CHANGE_CONTACT_INPUT,
  value,
  identifier,
});

export const postContactForm = () => ({
  type: POST_CONTACT_FORM,
});

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  message,
});

export const setSuccessMessage = (message) => ({
  type: SET_SUCCESS_MESSAGE,
  message,
});

export const resetContactForm = () => ({
  type: RESET_CONTACT_FORM,
});
