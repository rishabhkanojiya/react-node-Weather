const getGeoCode = require("../services/geoCode");
const getWeather = require("../services/getWeather");

module.exports = app => {
  app.get("/weather", (req, res) => {
    if (!req.query.address) {
      return res.send("Enter Some Address");
    }

    getGeoCode(req.query.address, ({ lat, long, placeName } = {}) => {
      getWeather(lat, long, data => {
        const { statement, temp, rainProb } = data;

        res.send({
          statement,
          temp,
          rainProb,
          location: placeName,
          address: req.query.address
        });
      });
    });
  });
};
