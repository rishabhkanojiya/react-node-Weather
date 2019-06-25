const Axios = require("axios");
const KEY = require("../config/keys");

module.exports = Axios.create({
  baseURL: `https://api.mapbox.com`
  //   params: {
  //     access_token: KEY.mapBoxKey
  //   }
});
