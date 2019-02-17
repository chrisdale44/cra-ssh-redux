import axios from "axios";
import { FETCH_PHOTOS_SUCCESS } from "./constants";

export const fetchAllPhotos = url => dispatch => {
  let photos = [];

  const fetchPhotos = url =>
    axios
      .get(url)
      .then(handleErrors)
      .then(({ data }) => {
        photos = photos.concat(data.resources);
        if (data.next_cursor) {
          const urlParams = new URLSearchParams(url);
          urlParams.set("next_cursor", data.next_cursor);
          return fetchPhotos(decodeURIComponent(urlParams.toString()));
        } else {
          dispatch(fetchPhotosSuccess(photos));
          return photos;
        }
      })
      .catch(error => {
        console.log("Failed to fetch photos", error);
      });

  return fetchPhotos(url);
};

const handleErrors = response => {
  if (!responseOk(response.status)) {
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
};

const responseOk = n => (n >= 200 && n < 300 ? true : false);

const fetchPhotosSuccess = photos => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: { photos }
});
