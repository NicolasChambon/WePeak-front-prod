import {
  POST_EDIT_PROFILE_FORM,
  setErrorMessage,
  resetEditProfileForm,
  DELETE_PROFILE,
} from '../actions/editProfileActions';
import { logout } from '../actions/userActions';
import {
  writePopUpMessage,
  removePopUpMessage,
} from '../actions/globalActions';

const editProfileMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_EDIT_PROFILE_FORM: {
      if (!store.getState().user.loggedData.token) {
        store.dispatch(
          writePopUpMessage(
            'Vous devez être connecté pour effectuer cette action.',
            'error'
          )
        );
        setTimeout(() => {
          store.dispatch(removePopUpMessage());
        }, 5000);
        action.navigate('/');
        return;
      }
      fetch(
        `https://melvinleroux-server.eddi.cloud/api/v1/users/${action.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
          body: JSON.stringify({
            firstname: store.getState().editProfile.firstnameInput,
            lastname: store.getState().editProfile.lastnameInput,
            username: store.getState().editProfile.usernameInput,
            email: store.getState().editProfile.emailInput,
            city: store.getState().editProfile.cityInput,
            birthdate: store.getState().editProfile.birthdateInput,
            bio: store.getState().editProfile.bioInput,
            oldPassword: store.getState().editProfile.oldPasswordInput,
            newPassword: store.getState().editProfile.newPasswordInput,
            confirmNewPassword:
              store.getState().editProfile.confirmNewPasswordInput,
          }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.errors || 'Network response was not ok');
            });
          }
          return response.json();
        })
        .then(() => {
          store.dispatch(
            writePopUpMessage('Votre profil a bien été mis à jour !', 'success')
          );
          setTimeout(() => {
            store.dispatch(removePopUpMessage());
          }, 5000);
          action.navigate('/profile');
          store.dispatch(resetEditProfileForm());
          store.dispatch(setErrorMessage(''));
          store.dispatch(logout());
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
          store.dispatch(setErrorMessage(error.message));
        })
        .finally(() => {});
      break;
    }
    case DELETE_PROFILE: {
      console.log('DELETE_PROFILE');
      if (!store.getState().user.loggedData.token) {
        store.dispatch(
          writePopUpMessage(
            'Vous devez être connecté pour effectuer cette action.',
            'error'
          )
        );
        setTimeout(() => {
          store.dispatch(removePopUpMessage());
        }, 5000);
        action.navigate('/');
        return;
      }
      fetch(
        `https://melvinleroux-server.eddi.cloud/api/v1/users/${action.id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${store.getState().auth.token}`,
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.errors || 'Network response was not ok');
            });
          }
          return response.json();
        })
        .then(() => {
          store.dispatch(
            writePopUpMessage('Votre profil a bien été supprimé.', 'success')
          );
          setTimeout(() => {
            store.dispatch(removePopUpMessage());
          }, 5000);
          action.navigate('/');
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default editProfileMiddleware;
