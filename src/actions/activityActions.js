export const FETCH_ACTIVITIES_FROM_CITY = 'FETCH_ACTIVITIES_FROM_CITY';
export const FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER =
  'FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER';
export const FETCH_ACTIVITIES_FROM_CITY_WITH_DATES =
  'FETCH_ACTIVITIES_FROM_CITY_WITH_DATES';
export const HANDLE_FETCH_ACTIVITIES_FROM_CITY =
  'HANDLE_FETCH_ACTIVITIES_FROM_CITY';
export const FETCH_ACTIVITY = 'FETCH_ACTIVITY';
export const HANDLE_FETCH_ACTIVITY = 'HANDLE_FETCH_ACTIVITY';
export const FETCH_ADRESS_FROM_COORDINATES = 'FETCH_ADRESS_FROM_COORDINATES';
export const HANDLE_FETCH_ADRESS = 'HANDLE_FETCH_ADRESS';
export const HANDLE_FETCH_ACTIVITIES_WITH_FILTER =
  'HANDLE_FETCH_ACTIVITIES_WITH_FILTER';
export const HANDLE_FETCH_ACTIVITIES_WITH_DATES =
  'HANDLE_FETCH_ACTIVITIES_WITH_DATES';

export const fetchActivitiesFromCity = (
  coordinates,
  navigate = false,
  lastSearchedCity = ''
) => {
  return {
    type: FETCH_ACTIVITIES_FROM_CITY,
    coordinates,
    navigate,
    lastSearchedCity,
  };
};

export const fetchActivitiesFromCityWithFilter = (
  lastSearchedCity,
  filterName,
  filterValue
) => {
  return {
    type: FETCH_ACTIVITIES_FROM_CITY_WITH_FILTER,
    lastSearchedCity,
    filterName,
    filterValue,
  };
};

export const fetchActivitiesFromCityWithDates = (
  lastSearchedCity,
  startDate,
  endDate
) => {
  return {
    type: FETCH_ACTIVITIES_FROM_CITY_WITH_DATES,
    lastSearchedCity,
    startDate,
    endDate,
  };
};

export const handleFetchActivitiesFromCity = (
  activities,
  lastSearchedCity,
  coordinates
) => {
  return {
    type: HANDLE_FETCH_ACTIVITIES_FROM_CITY,
    activities,
    lastSearchedCity,
    coordinates,
  };
};

export const handleFetchActivitiesWithFilter = (
  activities,
  lastSearchedCity
) => {
  return {
    type: HANDLE_FETCH_ACTIVITIES_WITH_FILTER,
    activities,
    lastSearchedCity,
  };
};
export const handleFetchActivitiesWithDates = (
  activities,
  lastSearchedCity
) => {
  return {
    type: HANDLE_FETCH_ACTIVITIES_WITH_DATES,
    activities,
    lastSearchedCity,
  };
};

export const fetchActivity = (slug) => {
  return {
    type: FETCH_ACTIVITY,
    slug,
  };
};

export const handleFetchActivity = (activity) => {
  return {
    type: HANDLE_FETCH_ACTIVITY,
    activity,
  };
};

export const fetchAdressFromCoordinates = (coordinates) => {
  return {
    type: FETCH_ADRESS_FROM_COORDINATES,
    coordinates,
  };
};

export const handleFetchAdress = (activityAdress) => {
  return {
    type: HANDLE_FETCH_ADRESS,
    activityAdress,
  };
};
