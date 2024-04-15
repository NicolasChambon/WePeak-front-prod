export const CHANGE_EDIT_PROFILE_INPUT = 'CHANGE_EDIT_PROFILE_INPUT';
export const POST_EDIT_PROFILE_FORM = 'POST_EDIT_PROFILE_FORM';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const RESET_EDIT_PROFILE_FORM = 'RESET_EDIT_PROFILE_FORM';
export const DELETE_PROFILE = 'DELETE_PROFILE';

export const changeEditProfileInput = (value, identifier) => ({
  type: CHANGE_EDIT_PROFILE_INPUT,
  value,
  identifier,
});

export const postEditProfileForm = (id, navigate) => ({
  type: POST_EDIT_PROFILE_FORM,
  id,
  navigate,
});

export const setErrorMessage = (message) => ({
  type: SET_ERROR_MESSAGE,
  message,
});

export const resetEditProfileForm = () => ({
  type: RESET_EDIT_PROFILE_FORM,
});

export const deleteProfile = (id, navigate) => ({
  type: DELETE_PROFILE,
  id,
  navigate,
});
