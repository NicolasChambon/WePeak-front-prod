export const HANDLE_CLICK_ON_SIGNIN_BUTTON = 'HANDLE_CLICK_ON_SIGNIN_BUTTON';
export const HANDLE_CLICK_ON_SIGNOFF_BUTTON = 'HANDLE_CLICK_ON_SIGNOFF_BUTTON';

export const handleClickOnSignInButton = () => ({
  type: HANDLE_CLICK_ON_SIGNIN_BUTTON,
});

export const handleClickOnSignOffButton = (id) => ({
  type: HANDLE_CLICK_ON_SIGNOFF_BUTTON,
  id,
});
