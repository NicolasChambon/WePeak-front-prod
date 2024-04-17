import {
  GET_USER_POSITION,
  handleUserPosition,
  GET_USER_POSITION_NAME,
  handleUserPositionName,
  POST_LOGIN_FORM,
  handleSuccessLogin,
  setLoginErrorMessage,
  resetLoginForm,
  FETCH_USER_WITH_ID,
  handleFetchCurrentUserWithId,
  handleFetchVisitedUserWithId,
  LOGOUT,
} from '../actions/userActions';
import {
  writePopUpMessage,
  removePopUpMessage,
} from '../actions/globalActions';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_USER_POSITION:
      // navigator.geolocation is a global object that provides access to the user's location if the user consents
      if (navigator.geolocation) {
        // .getCurrentPosition method accept 2 callbacks: success and error
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            store.dispatch(
              handleUserPosition({ lat: latitude, lng: longitude })
            );
          },
          (error) => {
            console.log('Error:', error);
          }
        );
      }
      break;
    case GET_USER_POSITION_NAME: {
      const { userPosition } = store.getState().user;
      fetch(
        `https://secure.geonames.org/findNearbyPostalCodesJSON?lat=${userPosition.lat}&lng=${userPosition.lng}&username=nicolaschambon`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          store.dispatch(handleUserPositionName(data.postalCodes[0].placeName));
        })
        .catch((error) => {
          console.error(
            'There has been a problem with your fetch operation:',
            error
          );
        })
        .finally(() => {});
      break;
    }
    case POST_LOGIN_FORM: {
      const { emailInputLogin, passwordInputLogin } = store.getState().user;
      fetch('https://melvinleroux-server.eddi.cloud/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: emailInputLogin,
          password: passwordInputLogin,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            // If the response is not ok, we parse the response body as JSON.
            return response.json().then((error) => {
              // throw is used to stop the promise chain and trigger the catch block.
              // if error.errors (which normaly contains specific messages) is not defined, we throw a generic error message.
              throw new Error(error.error || 'Network response was not ok');
            });
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('id', JSON.stringify(data.user.id));
          localStorage.setItem(
            'thumbnail',
            JSON.stringify(data.user.thumbnail)
          );

          store.dispatch(handleSuccessLogin(data));
          store.dispatch(
            writePopUpMessage(
              `Bienvenue ${data.user.firstname} ${data.user.lastname} !`,
              'success'
            )
          );
          setTimeout(() => {
            store.dispatch(removePopUpMessage());
          }, 5000);
          action.navigate('/');
          store.dispatch(resetLoginForm());
          store.dispatch(setLoginErrorMessage(''));
          action.navigate('/');
        })
        .catch((error) => {
          console.error(
            'There has been a problem with your fetch operation:',
            error
          );
          store.dispatch(setLoginErrorMessage(error.message));
        })
        .finally(() => {});
      break;
    }
    case LOGOUT: {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('thumbnail');
      store.dispatch(writePopUpMessage('Vous avez été déconnecté', 'success'));
      setTimeout(() => {
        store.dispatch(removePopUpMessage());
      }, 5000);
      break;
    }
    case FETCH_USER_WITH_ID: {
      if (!JSON.parse(localStorage.getItem('token'))) {
        store.dispatch(
          writePopUpMessage(
            'Vous devez être connecté pour accéder à ce contenu',
            'error'
          )
        );
        setTimeout(() => {
          store.dispatch(removePopUpMessage());
        }, 5000);
        action.navigate('/login');
        return;
      }
      console.log('FETCH_USER_WITH_ID', action.id);
      fetch(
        `https://melvinleroux-server.eddi.cloud/api/v1/users/${action.id}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          if (action.specifier === 'visited') {
            store.dispatch(handleFetchVisitedUserWithId(data));
          }
          if (action.specifier === 'current') {
            store.dispatch(handleFetchCurrentUserWithId(data));
          }
        })
        .catch((error) => {
          console.error(
            'There has been a problem with your fetch operation:',
            error
          );
        })
        .finally(() => {});
      break;
    }
    default:
  }
  return next(action);
};

export default userMiddleware;
