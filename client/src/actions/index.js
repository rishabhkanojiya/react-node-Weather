import Axios from "axios";

export const fetchWeather = (term = "mumbai") => async dispatch => {
  dispatch({ type: "FETCH_WEATHER" });

  try {
    const response = await Axios.get("/weather", {
      params: {
        address: term
      }
    });
    dispatch({
      type: "FETCH_WEATHER_SUCCESS",
      payload: response.data
    });
  } catch (error) {
    dispatch({ type: "FETCH_WEATHER_FAILURE", error });
  }
};
