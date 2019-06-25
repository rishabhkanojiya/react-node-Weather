const darkSky = require("../api/darkSky");

const getWeather = async (lat, long, callBack) => {
  const response = await darkSky.get(`/${lat},${long}`);

  callBack({
    statement: response.data.daily.data[0].summary,
    temp: response.data.currently.temperature,
    rainProb: response.data.currently.precipProbability
  });
  //   return response;
};

// `It's currently ${response.data.daily.data[0].summary}. It is currently ${
//   response.data.currently.temperature
// } out here. There is a ${
//   response.data.currently.precipProbability
// }% chance of rain`

// (data = {
//   statement: `It's currently ${
//     response.data.daily.data[0].summary
//   }. It is currently ${
//     response.data.currently.temperature
//   } out here. There is a ${
//     response.data.currently.precipProbability
//   }% chance of rain`,
//   temp: response.data.currently.temperature,
//   rainProb: response.data.currently.precipProbability
// })

module.exports = getWeather;
