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

geocode.geocode("Philadelphia", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

forecast.forecast(40.0115, -75.1327, (error, data) => {
  if (error) {
    console.log("Error", error);
  } else {
    console.log("Data", data);
  }
});
