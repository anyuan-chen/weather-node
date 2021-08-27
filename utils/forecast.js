const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.KEY}&query=${lat},${long}`;
  request({ url: url, json: true }, (error, response) => {
      //console.log(response)
    if (error) {
      callback("Internal Error");
    } else if (response.body.error) {
      //console.log(response);
      callback("Bad Coordinates");
    } else {
      callback(undefined, {
        description: response.body.current.weather_descriptions[0],
      });
    }
  });
};

module.exports = { forecast: forecast };
