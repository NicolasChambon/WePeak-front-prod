import {
  CHANGE_CONTACT_INPUT,
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
  RESET_CONTACT_FORM,
} from '../actions/contactActions';

export const initialState = {
  nameInput: '',
  emailInput: '',
  phoneInput: '',
  companyInput: '',
  messageInput: '',
  errorMessage: '',
  successMessage: '',
};

const contactReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_CONTACT_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message,
      };
    case SET_SUCCESS_MESSAGE:
      return {
        ...state,
        successMessage: action.message,
      };
    case RESET_CONTACT_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default contactReducer;
