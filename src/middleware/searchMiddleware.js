import {
  FETCH_CITIES_SEARCH,
  handleFetchCitiesSearch,
} from '../actions/searchActions';

const searchMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CITIES_SEARCH: {
      let inputSearch;
      if (action.identifier === 'createActivity') {
        inputSearch = store.getState().search.searchedCity.name;
      } else {
        inputSearch = store.getState().search.input;
      }

      fetch(
        `https://secure.geonames.org/postalCodeSearchJSON?placename_startsWith=${inputSearch}&country=FR&maxRows=6&username=pommito`
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
