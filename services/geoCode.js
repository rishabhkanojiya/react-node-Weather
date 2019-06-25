const mapBox = require("../api/mapBox");
const KEY = require("../config/keys");

const getGeoCode = async (address, callback) => {
  const response = await mapBox.get(
    `/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${KEY.mapBoxKey}`
  );

  const data = {
    lat: response.data.features[0].center[1],
    long: response.data.features[0].center[0],
    placeName: response.data.features[0].place_name
  };
  callback(data);
};

module.exports = getGeoCode;
