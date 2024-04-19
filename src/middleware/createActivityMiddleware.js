import {
  POST_ACTIVITY_FORM,
  setErrorMessage,
  resetActivityForm,
} from '../actions/createActivityActions';

import {
  writePopUpMessage,
  removePopUpMessage,
} from '../actions/globalActions';

const createActivityMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case POST_ACTIVITY_FORM: {
      const date = store.getState().createActivity.dateInput;
      const time = store.getState().createActivity.timeInput;
      const dateTime = `${date}-${time}`;

      if (
        store.getState().activity.activityAdress.address === '' &&
        store.getState().search.searchedCity.name === ''
      ) {
        store.dispatch(
          setErrorMessage('Veuillez renseigner une ville pour votre activité')
        );
        return next(action);
      }

      let city =
        store.getState().activity.activityAdress.address.town ||
        store.getState().activity.activityAdress.address.city ||
        store.getState().activity.activityAdress.address.village ||
        store.getState().activity.activityAdress.address;

      if (city === '') {
        city = store.getState().search.searchedCity.name;
      }

      fetch('https://melvinleroux-server.eddi.cloud/api/v1/activities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
        body: JSON.stringify({
          name: store.getState().createActivity.titleInput,
          description: store.getState().createActivity.descriptionInput,
          date: dateTime,
          createdBy: JSON.parse(localStorage.getItem('id')),
          city,
          lat: Number(store.getState().search.searchedCity.lat),
          lng: Number(store.getState().search.searchedCity.lng),
          groupSize: Number(store.getState().createActivity.groupSizeInput),
          thumbnail: store.getState().createActivity.base64Image,
          sport: [
            {
              id: Number(store.getState().createActivity.sportInput),
            },
          ],
          difficulty: {
            id: Number(store.getState().createActivity.difficultyInput),
          },
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
          const newId = data.id;
          // Handle here the success case with message to user and redirection
          store.dispatch(
            writePopUpMessage('Votre activité a été mise en ligne !', 'success')
          );
          setTimeout(() => {
            store.dispatch(removePopUpMessage());
          }, 5000);
          action.navigate(`/activities/${newId}`);
          store.dispatch(resetActivityForm());
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

export default createActivityMiddleware;
