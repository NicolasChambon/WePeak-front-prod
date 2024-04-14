import {
  WRITE_POPUP_MESSAGE,
  REMOVE_POPUP_MESSAGE,
} from '../actions/globalActions';

export const initialState = {
  popUpMessage: '',
};

const globalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case WRITE_POPUP_MESSAGE:
      return {
        ...state,
        popUpMessage: action.popUpMessage,
      };
    case REMOVE_POPUP_MESSAGE:
      return {
        ...state,
        popUpMessage: '',
      };
    default:
      return state;
  }
};

export default globalReducer;
