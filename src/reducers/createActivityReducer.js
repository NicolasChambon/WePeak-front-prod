import {
  CHANGE_INPUT_VALUE,
  RESET_ACTIVITY_FORM,
  SET_ERROR_MESSAGE,
} from '../actions/createActivityActions';

export const initialState = {
  titleInput: '',
  descriptionInput: '',
  dateInput: '',
  timeInput: '',
  groupSizeInput: '',
  sportInput: '',
  difficultyInput: '',
  messageInput: '',
  errorMessage: '',
};

const createActivityReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case RESET_ACTIVITY_FORM:
      return {
        ...initialState,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};

export default createActivityReducer;
