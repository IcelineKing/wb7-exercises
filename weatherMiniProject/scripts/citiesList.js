"use strict";

console.log("dataCities");

const apiBaseUrl = "https://api.weather.gov/points/";
// https://api.weather.gov/points/32.6791,-97.4641

function citiesData(longitude, latitude) {
  const actualUrl = apiBaseUrl + longitude + "," + latitude;
  fetch(actualUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
