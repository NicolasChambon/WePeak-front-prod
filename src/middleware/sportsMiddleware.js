import { FETCH_SPORTS, handleFetchSports } from '../actions/sportsActions';

const sportMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SPORTS: {
      fetch('https://melvinleroux-server.eddi.cloud/api/v1/sports', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
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
        .then((data) => {
          store.dispatch(handleFetchSports(data));
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

export default sportMiddleware;
