export const GET_USER_POSITION = 'GET_USER_POSITION';
export const HANDLE_USER_POSITION = 'HANDLE_USER_POSITION';
export const GET_USER_POSITION_NAME = 'GET_USER_POSITION_NAME';
export const HANDLE_USER_POSITION_NAME = 'HANDLE_USER_POSITION_NAME';

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
