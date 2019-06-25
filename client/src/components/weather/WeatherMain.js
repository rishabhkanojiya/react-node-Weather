import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../../actions";

class WeatherMain extends Component {
  componentDidMount() {
    this.props.fetchWeather();
  }

  renderData = () => {
    return (
      <div>
        <div className="center-align">
          <h5>{this.props.location}</h5>
          <div className="row">
            <div className="col s7 right-align">
              <h2>{`${this.props.temp} F`}</h2>
            </div>
            <div className="col s5 left-align">
              <i
                className="fa fa-sun-o fa-4x"
                aria-hidden="true"
                // style={{ position: "absolute", left: "36%", top: "18%" }}
              />
            </div>
          </div>
          <p>
            <i
              className="fa fa-umbrella fa-2x"
              aria-hidden="true"
              style={{ padding: "0 20px " }}
            />
            {`${this.props.rainProb} % chance of rain`}
          </p>
          <h5>{this.props.statement}</h5>
        </div>
      </div>
    );
  };

  render() {
    if (this.props.isLoading === true) {
      return (
        <div className="row center-align ">
          <div className="preloader-wrapper active  ">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle" />
              </div>
              <div className="gap-patch">
                <div className="circle" />
              </div>
              <div className="circle-clipper right">
                <div className="circle" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    return <div style={{ position: "relativealign" }}>{this.renderData()}</div>;
  }
}

const mapStateToProps = state => ({
  statement: state.weather.payload.statement,
  temp: state.weather.payload.temp,
  location: state.weather.payload.location,
  rainProb: state.weather.payload.rainProb,
  isLoading: state.weather.isLoading
});

const mapDispatchToProps = {
  fetchWeather
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherMain);
