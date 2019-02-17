import {
  FETCH_PHOTOS_BEGIN,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE
} from "./constants";
import { API_BASE, GET_ALL_PHOTOS } from "../../api/constants";

export const fetchPhotos = () => dispatch => {
  dispatch({
    type: FETCH_PHOTOS_BEGIN
  });
  return fetch(API_BASE + GET_ALL_PHOTOS)
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
      dispatch(fetchPhotosSuccess(json.photos));
      return json.photos;
    })
    .catch(error => {
      console.log("fail", error);
      dispatch(fetchPhotosFailure(error));
    });
};

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchProductsBegin = () => ({
  type: FETCH_PHOTOS_BEGIN
});

export const fetchPhotosSuccess = photos => ({
  type: FETCH_PHOTOS_SUCCESS,
  payload: { photos }
});

export const fetchPhotosFailure = error => ({
  type: FETCH_PHOTOS_FAILURE,
  payload: { error }
});
