import {
  POST_CONTACT_FORM,
  setErrorMessage,
  setSuccessMessage,
} from '../actions/contactActions';

const contactMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_CONTACT_FORM: {
      fetch('http://melvinleroux-server.eddi.cloud/api/v1/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: store.getState().contact.nameInput,
          email: store.getState().contact.emailInput,
          phone: store.getState().contact.phoneInput,
          company: store.getState().contact.companyInput,
          message: store.getState().contact.messageInput,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            // If the response is not ok, we parse the response body as JSON.
            return response.json().then((error) => {
              // throw is used to stop the promise chain and trigger the catch block.
              // if error.errors (which normaly contains specific messages) is not defined, we throw a generic error message.
              throw new Error(error.errors || 'Network response was not ok');
            });
          }
          return response.json();
        })
        .then((message) => {
          // Handle here the success case with message to user and redirection
          store.dispatch(
            setSuccessMessage(
              'Votre message a bien été envoyé ! Merci pour votre intérêt.'
            )
          );
          store.dispatch(setErrorMessage(''));
        })
        .catch((error) => {
          console.error('There was an error with your fetch operation:', error);
          store.dispatch(setErrorMessage(error.message));
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default contactMiddleware;
