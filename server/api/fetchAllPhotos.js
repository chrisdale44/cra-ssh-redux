const axios = require("axios");

// const { API_KEY, API_SECRET, CLOUD_NAME } = process.env;
// const API_KEY = "571654916545743";
// const API_SECRET = "OhSwmjaqV8lCJ8sEuEffo_DwkDg";
// const CLOUD_NAME = "hybwqonc7";
const API_URL =
  "https://571654916545743:OhSwmjaqV8lCJ8sEuEffo_DwkDg@api.cloudinary.com/v1_1/hybwqonc7/resources/image";

function fetchAllPhotos() {
  return axios
    .get(API_URL)
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = fetchAllPhotos;
