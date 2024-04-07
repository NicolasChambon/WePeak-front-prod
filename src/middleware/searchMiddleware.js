import {
  FETCH_CITIES_SEARCH,
  handleFetchCitiesSearch,
} from '../actions/searchActions';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CITIES_SEARCH: {
      const inputSearch = store.getState().search.input;

      fetch(
        `http://api.geonames.org/postalCodeSearchJSON?placename_startsWith=${inputSearch}&country=FR&username=nicolaschambon`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          store.dispatch(handleFetchCitiesSearch(data));
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

export default searchMiddleware;
