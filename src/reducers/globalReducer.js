import {
  WRITE_POPUP_MESSAGE,
  REMOVE_POPUP_MESSAGE,
} from '../actions/globalActions';

export const initialState = {
  popUpMessage: { message: '', status: '' },
};

const globalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case WRITE_POPUP_MESSAGE:
      return {
        ...state,
        popUpMessage: { message: action.popUpMessage, status: action.status },
      };
    case REMOVE_POPUP_MESSAGE:
      return {
        ...state,
        popUpMessage: { message: '', status: '' },
      };
    default:
      return state;
  }
};

export default globalReducer;
