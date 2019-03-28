import { createSelector } from "reselect";

export const getAllPhotos = state => state.photos.photos;

export const getPhoto = (state, props) =>
  state.photos.photos.filter(photo => photo.id === props.id);

export const getPhotoTags = createSelector(
  getPhoto,
  photo => photo && photo.tags
);

export const getPhotoAlbum = createSelector(
  getPhoto,
  photo => photo && photo.album
);

export const getPhotoMedium = createSelector(
  getPhoto,
  photo => photo && photo.medium
);

export const getPhotoSubject = createSelector(
  getPhoto,
  photo => photo && photo.subject
);

export const getOpenPhoto = state => state.photos.openPhoto;
