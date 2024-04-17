import { HANDLE_FETCH_SPORTS } from '../actions/sportsActions';

export const initialState = {
  sports: '',
};

const sportsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_FETCH_SPORTS:
      return {
        ...state,
        sports: action.sports,
      };
    default:
      return state;
  }
};

export default sportsReducer;
