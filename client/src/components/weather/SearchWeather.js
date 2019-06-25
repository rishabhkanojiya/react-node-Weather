import React, { Component } from "react";
import { fetchWeather } from "../../actions";
import { connect } from "react-redux";

export class SearchWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    };
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper ">
            <form
              onSubmit={e => {
                this.props.fetchWeather(this.state.term);
              }}
            >
              <div className="input-field white black-text">
                <input
                  id="search"
                  type="search"
                  onChange={e => {
                    this.setState({ term: e.target.value });
                  }}
                />
                <label className="label-icon">
                  <i className="material-icons white black-text">search</i>
                </label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
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
)(SearchWeather);
