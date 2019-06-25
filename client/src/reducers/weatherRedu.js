const initialState = {
  payload: [],
  isLoading: false,
  error: {}
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case "FETCH_WEATHER":
      return { ...state, isLoading: true };

    case "FETCH_WEATHER_SUCCESS":
      return { ...state, payload, isLoading: false };

    case "FETCH_WEATHER_FAILURE":
      return { ...state, error: error, isLoading: false };

    default:
      return state;
  }
};
