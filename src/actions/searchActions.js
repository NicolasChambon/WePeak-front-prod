export const CHANGE_INPUT_SEARCH = 'CHANGE_INPUT_SEARCH';
export const FETCH_CITIES_SEARCH = 'FETCH_CITIES_SEARCH';
export const HANDLE_FETCH_CITIES_SEARCH = 'HANDLE_FETCH_CITIES_SEARCH';
export const RESET_SEARCH = 'RESET_SEARCH';

export const changeInputSearch = (input) => ({
  type: CHANGE_INPUT_SEARCH,
  input,
});

export const fetchCitiesSearch = () => ({
  type: FETCH_CITIES_SEARCH,
});

export const handleFetchCitiesSearch = (data) => {
  // transform data to remove duplicates in coordinates and keep only postalCode and placeName in objects
  const cityList = data.postalCodes.reduce((acc, fetchResult) => {
    // Check if coordinates of the current fetchResult are already in the accumulator
    const isDuplicate = acc.find(
      (stockedResult) =>
        stockedResult.lat.replace(',', '.') == fetchResult.lat &&
        stockedResult.lng.replace(',', '.') == fetchResult.lng
    );
    // Check if placeName include an borough number. match return an array if a number is found, null otherwise. "/\d+/" is a regex which means "one or more digit(s)
    const boroughNumber = fetchResult.placeName.match(/\d+/);
    // If no borough number and no already existing coordinates, we add a new object with postalCode and placeName in the accumulator
    if (!isDuplicate && !boroughNumber) {
      acc.push({
        postalCode: fetchResult.postalCode,
        placeName: fetchResult.placeName,
        // replace points by commas in lat and lng to match the format of the API
        lat: fetchResult.lat.toString(),
        lng: fetchResult.lng.toString(),
      });
    }
    return acc;
  }, []);
  return {
    type: HANDLE_FETCH_CITIES_SEARCH,
    cityList,
  };
};

export const resetSearch = () => ({
  type: RESET_SEARCH,
});
