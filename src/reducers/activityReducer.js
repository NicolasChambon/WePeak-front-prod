import {
  HANDLE_FETCH_ACTIVITIES_FROM_CITY,
  HANDLE_FETCH_ACTIVITY,
  HANDLE_FETCH_ADRESS,
  HANDLE_FETCH_ACTIVITIES_WITH_FILTER,
} from '../actions/activityActions';

export const initialState = {
  activities: [],
  activity: {},
  activityAdress: {},
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
        activityAdress: action.activityAdress,
      };
    default:
      return state;
  }
};

export default activityReducer;
