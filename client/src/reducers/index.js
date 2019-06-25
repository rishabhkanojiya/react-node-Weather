import weatherRedu from "./weatherRedu";
import { combineReducers } from "redux";

export default combineReducers({
  weather: weatherRedu
});
