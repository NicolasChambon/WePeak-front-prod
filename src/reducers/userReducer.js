import {
  HANDLE_USER_POSITION,
  HANDLE_USER_POSITION_NAME,
} from '../actions/userActions';

export const initialState = {
  userPosition: {},
  userPositionName: '',
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
    default:
      return state;
  }
};

export default userReducer;
