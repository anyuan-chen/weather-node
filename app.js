const request = require("request");
require("dotenv").config();
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// const weatherStackUrl = `http://api.weatherstack.com/current?access_key=${process.env.KEY}&query=Toronto&units=f`;

// request({ url: weatherStackUrl, json: true }, (error, response) => {
//   console.log(response.body.current.weather_descriptions[0])
//   console.log(
//     `It is currently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip} chance of rain.`
//   );
// });

// const mapboxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/adfsfdsfsdfdsf.json?access_token=pk.eyJ1IjoibGVnaXRlbmdsaXNoIiwiYSI6ImNrc3VncXV0NzB6cWsycXBqemQ0M3dqY2oifQ.9vqtV4M6u7ZsPe1wwMtfoQ"
// request ({url: mapboxUrl}, (error, response) => {
//   if (error){
//     console.log("Internal Error")
//     return;
//   }
//   const data = JSON.parse(response.body)
//   if (data.features.length === 0){
//     console.log("No matching results")
//   }
//   else{
//     console.log(data)
//     const longtitude = data.features[0].center[0]
//     const latitude = data.features[0].center[1];
//   }
// })

if (
  process.argv.length == 4 &&
  Number(process.argv[2]) !== NaN &&
  Number(process.argv[3]) !== NaN
) {
  forecast.forecast(process.argv[2], process.argv[3], (error, data) => {
    if (error) {
      return console.log(error);
    }
    console.log("Data", data);
  });
} else {
  let location = process.argv
    .splice(2, 2)
    .reduce((prev, cur) => prev + " " + cur, "");

  geocode.geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }
    forecast.forecast(data.latitude, data.longtitude, (error, data) => {
      if (error) {
        return console.log("Error", error);
      }
      console.log("Data", data);
    });
  });
}
