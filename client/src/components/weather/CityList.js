import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../actions";

class CityList extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="collection">
            <a
              href="#!"
              className="collection-item black-text"
              onClick={() => {
                this.props.fetchWeather("India");
              }}
            >
              India
            </a>
            <a
              href="#!"
              className="collection-item black-text"
              onClick={() => {
                this.props.fetchWeather("Washington");
              }}
            >
              Washington
            </a>
            <a
              href="#!"
              className="collection-item black-text"
              onClick={() => {
                this.props.fetchWeather("London");
              }}
            >
              London
            </a>
            <a
              href="#!"
              className="collection-item black-text"
              onClick={() => {
                this.props.fetchWeather("Tokyo");
              }}
            >
              Tokyo
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchWeather
};

export default connect(
  null,
  mapDispatchToProps
)(CityList);
