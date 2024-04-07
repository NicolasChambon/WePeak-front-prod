import {
  GET_USER_POSITION,
  handleUserPosition,
  GET_USER_POSITION_NAME,
  handleUserPositionName,
} from '../actions/userActions';

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
    default:
  }
  return next(action);
};

export default userMiddleware;
