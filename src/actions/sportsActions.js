export const FETCH_SPORTS = 'FETCH_SPORTS';
export const HANDLE_FETCH_SPORTS = 'HANDLE_FETCH_SPORTS';

export const fetchSports = () => ({
  type: FETCH_SPORTS,
});

export const handleFetchSports = (sports) => ({
  type: HANDLE_FETCH_SPORTS,
  sports,
});
