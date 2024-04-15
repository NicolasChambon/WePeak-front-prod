import {
  writePopUpMessage,
  removePopUpMessage,
} from '../actions/globalActions';
import {
  POST_REGISTER_FORM,
  setErrorMessage,
  resetRegisterForm,
} from '../actions/registerActions';

const registerMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_REGISTER_FORM: {
      fetch('https://melvinleroux-server.eddi.cloud/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstname: store.getState().register.firstnameInput,
          lastname: store.getState().register.lastnameInput,
          pseudo: store.getState().register.usernameInput,
          email: store.getState().register.emailInput,
          password: store.getState().register.passwordInput,
          city: store.getState().register.cityInput,
          birthdate: store.getState().register.birthdateInput,
          age: store.getState().register.ageInput,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((error) => {
              throw new Error(error.error || 'Network response was not ok');
            });
          }
          return response.json();
        })
        .then(() => {
          // Handle here the success case with message to user and redirection
          store.dispatch(
            writePopUpMessage(
              "Demande d'inscription réalisée avec succès. Un email de confirmation vous a été envoyé. Merci pour votre intérêt.",
              'success'
            )
          );
          setTimeout(() => {
            store.dispatch(removePopUpMessage());
          }, 5000);
          action.navigate('/login');
          store.dispatch(resetRegisterForm());
          store.dispatch(setErrorMessage(''));
        })
        .catch((error) => {
          console.error(
            'There was an error with your fetch operation:',
            error.message
          );
          store.dispatch(setErrorMessage(error.message));
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default registerMiddleware;
