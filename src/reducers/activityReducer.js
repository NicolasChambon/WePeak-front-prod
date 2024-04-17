import {
  HANDLE_FETCH_ACTIVITIES_FROM_CITY,
  HANDLE_FETCH_ACTIVITY,
  HANDLE_FETCH_ADRESS,
  HANDLE_FETCH_ACTIVITIES_WITH_FILTER,
  HANDLE_FETCH_ADDRESS_FROM_MARKER,
  RESET_ACTIVITY_ADDRESS,
} from '../actions/activityActions';

export const initialState = {
  activities: [],
  activity: {},
  activityAdress: {
    address: '',
    coordinates: {},
  },
  lastSearchedCity: {},
};

const activityReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_FETCH_ACTIVITIES_FROM_CITY:
      return {
        ...state,
        activities: action.activities,
        lastSearchedCity: {
          name: action.lastSearchedCity,
          coordinates: action.coordinates,
        },
      };
    case HANDLE_FETCH_ACTIVITIES_WITH_FILTER:
      return {
        ...state,
        activities: action.activities,
        lastSearchedCity: action.lastSearchedCity,
      };
    case HANDLE_FETCH_ACTIVITY:
      return {
        ...state,
        activity: action.activity,
      };
    case HANDLE_FETCH_ADRESS:
      return {
        ...state,
        activityAdress: {
          address: action.activityAdress,
          coordinates: action.coordinates,
        },
      };
    case RESET_ACTIVITY_ADDRESS:
      return {
        ...state,
        activityAdress: {
          address: '',
          coordinates: {},
        },
      };

    default:
      return state;
  }
};

export default activityReducer;
