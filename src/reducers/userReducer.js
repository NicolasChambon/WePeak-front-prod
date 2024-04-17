import {
  HANDLE_USER_POSITION,
  HANDLE_USER_POSITION_NAME,
  CHANGE_LOGIN_INPUT,
  HANDLE_SUCCESS_LOGIN,
  SET_LOGIN_ERROR_MESSAGE,
  RESET_LOGIN_FORM,
  HANDLE_FETCH_CURRENT_USER_WITH_ID,
  HANDLE_FETCH_VISITED_USER_WITH_ID,
} from '../actions/userActions';

export const initialState = {
  userPosition: {},
  userPositionName: '',
  emailInputLogin: '',
  passwordInputLogin: '',
  loginErrorMessage: '',
  currentUser: {},
  visitedUser: {},
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_USER_POSITION:
      return {
        ...state,
        userPosition: action.coordinates,
      };
    case HANDLE_USER_POSITION_NAME:
      return {
        ...state,
        userPositionName: action.userPositionName,
      };
    case CHANGE_LOGIN_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    case HANDLE_SUCCESS_LOGIN:
      return {
        ...state,
        passwordInputLogin: '',
        emailInputLogin: '',
        loginErrorMessage: '',
      };
    case SET_LOGIN_ERROR_MESSAGE:
      return {
        ...state,
        loginErrorMessage: action.message,
      };
    case RESET_LOGIN_FORM:
      return {
        ...state,
        emailInputLogin: '',
        passwordInputLogin: '',
      };
    case HANDLE_FETCH_CURRENT_USER_WITH_ID:
      return {
        ...state,
        currentUser: action.user,
      };
    case HANDLE_FETCH_VISITED_USER_WITH_ID:
      return {
        ...state,
        visitedUser: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
