const Axios = require("axios");
const KEY = require("../config/keys");

module.exports = Axios.create({
  baseURL: `https://api.darksky.net/forecast/${KEY.darkSkyKey}`
});
