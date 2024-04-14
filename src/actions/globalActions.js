export const WRITE_POPUP_MESSAGE = 'WRITE_POPUP_MESSAGE';
export const REMOVE_POPUP_MESSAGE = 'REMOVE_POPUP_MESSAGE';

export const writePopUpMessage = (popUpMessage) => ({
  type: WRITE_POPUP_MESSAGE,
  popUpMessage,
});

export const removePopUpMessage = () => ({
  type: REMOVE_POPUP_MESSAGE,
});
