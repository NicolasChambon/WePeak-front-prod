export const WRITE_POPUP_MESSAGE = 'WRITE_POPUP_MESSAGE';
export const REMOVE_POPUP_MESSAGE = 'REMOVE_POPUP_MESSAGE';

// status: 'success' or 'error'
export const writePopUpMessage = (popUpMessage, status) => ({
  type: WRITE_POPUP_MESSAGE,
  popUpMessage,
  status,
});

export const removePopUpMessage = () => ({
  type: REMOVE_POPUP_MESSAGE,
});
