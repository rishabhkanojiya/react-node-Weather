import "./App.css";
import React, { Component } from "react";
import CityList from "./weather/CityList";
import WeatherMain from "./weather/WeatherMain";
import SearchWeather from "./weather/SearchWeather";

export class App extends Component {
  render() {
    return (
      <div className="bg-all">
        <div className="container">
          <div className="row " style={{ padding: "20px 0", height: "45%" }}>
            <WeatherMain />
          </div>
          <div className="row">
            <SearchWeather />
          </div>
          <div className="row">
            <CityList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
