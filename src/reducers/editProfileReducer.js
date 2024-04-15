import {
  CHANGE_EDIT_PROFILE_INPUT,
  SET_ERROR_MESSAGE,
  RESET_EDIT_PROFILE_FORM,
} from '../actions/editProfileActions';

export const initialState = {
  base64Image: '',
  firstnameInput: '',
  lastnameInput: '',
  usernameInput: '',
  emailInput: '',
  cityInput: '',
  birthdateInput: '',
  bioInput: '',
  oldPasswordInput: '',
  newPasswordInput: '',
  confirmNewPasswordInput: '',
  errorMessage: '',
};

const editProfileReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_EDIT_PROFILE_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message,
      };
    case RESET_EDIT_PROFILE_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default editProfileReducer;
