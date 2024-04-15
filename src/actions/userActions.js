export const GET_USER_POSITION = 'GET_USER_POSITION';
export const HANDLE_USER_POSITION = 'HANDLE_USER_POSITION';
export const GET_USER_POSITION_NAME = 'GET_USER_POSITION_NAME';
export const HANDLE_USER_POSITION_NAME = 'HANDLE_USER_POSITION_NAME';
export const CHANGE_LOGIN_INPUT = 'CHANGE_LOGIN_INPUT';
export const POST_LOGIN_FORM = 'POST_LOGIN_FORM';
export const HANDLE_SUCCESS_LOGIN = 'HANDLE_SUCCESS_LOGIN';
export const SET_LOGIN_ERROR_MESSAGE = 'SET_LOGIN_ERROR_MESSAGE';
export const LOGOUT = 'LOGOUT';
export const RESET_LOGIN_FORM = 'RESET_LOGIN_FORM';
export const FETCH_USER_WITH_ID = 'FETCH_USER_WITH_ID';
export const HANDLE_FETCH_CURRENT_USER_WITH_ID =
  'HANDLE_FETCH_CURRENT_USER_WITH_ID';
export const HANDLE_FETCH_VISITED_USER_WITH_ID =
  'HANDLE_FETCH_VISITED_USER_WITH_ID';

export const getUserPosition = () => ({
  type: GET_USER_POSITION,
});

export const handleUserPosition = (coordinates) => ({
  type: HANDLE_USER_POSITION,
  coordinates,
});

export const getUserPositionName = () => ({
  type: GET_USER_POSITION_NAME,
});

export const handleUserPositionName = (userPositionName) => ({
  type: HANDLE_USER_POSITION_NAME,
  userPositionName,
});

export const changeLoginInput = (value, identifier) => ({
  type: CHANGE_LOGIN_INPUT,
  value,
  identifier,
});

export const postLoginForm = (navigate) => ({
  type: POST_LOGIN_FORM,
  navigate,
});

export const handleSuccessLogin = (loggedData) => ({
  type: HANDLE_SUCCESS_LOGIN,
  loggedData,
});

export const setLoginErrorMessage = (message) => ({
  type: SET_LOGIN_ERROR_MESSAGE,
  message,
});

export const logout = () => ({
  type: LOGOUT,
});

export const resetLoginForm = () => ({
  type: RESET_LOGIN_FORM,
});

export const fetchUserWithId = (id, specifier, navigate) => ({
  type: FETCH_USER_WITH_ID,
  id,
  // specifier is used to call the good handle function in the middleware
  specifier,
  navigate,
});

// Current user is the logged user
export const handleFetchCurrentUserWithId = (user) => ({
  type: HANDLE_FETCH_CURRENT_USER_WITH_ID,
  user,
});

// Visited user is the user we are looking at
export const handleFetchVisitedUserWithId = (user) => ({
  type: HANDLE_FETCH_VISITED_USER_WITH_ID,
  user,
});
