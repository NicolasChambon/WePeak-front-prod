import {
  CHANGE_CONTACT_INPUT,
  SET_ERROR_MESSAGE,
  RESET_CONTACT_FORM,
} from '../actions/contactActions';

export const initialState = {
  nameInput: '',
  emailInput: '',
  phoneInput: '',
  companyInput: '',
  messageInput: '',
  errorMessage: '',
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
    case RESET_CONTACT_FORM:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default contactReducer;
