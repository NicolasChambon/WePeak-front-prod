import {
  CHANGE_INPUT_SEARCH,
  CHANGE_INPUT_SEARCH_VALUE,
  HANDLE_CLICK_ON_CITY_RESULT,
  HANDLE_FETCH_CITIES_SEARCH,
  RESET_SEARCH,
} from '../actions/searchActions';

export const initialState = {
  input: '',
  cityList: [],
  searchedCity: {
    name: '',
    lat: '',
    lng: '',
  },
};

const searchReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_SEARCH:
      return {
        ...state,
        input: action.input,
      };
    case CHANGE_INPUT_SEARCH_VALUE:
      return {
        ...state,
        searchedCity: {
          ...state.searchedCity,
          name: action.value,
        },
      };
    case HANDLE_FETCH_CITIES_SEARCH:
      return {
        ...state,
        cityList: action.cityList,
      };
    case HANDLE_CLICK_ON_CITY_RESULT:
      return {
        ...state,
        searchedCity: {
          name: action.city.placeName,
          lat: action.city.lat,
          lng: action.city.lng,
        },
        cityList: [],
      };
    case RESET_SEARCH:
      return {
        ...state,
        cityList: [],
      };
    default:
      return state;
  }
};

export default searchReducer;
