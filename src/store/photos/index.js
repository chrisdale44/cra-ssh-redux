// import {
//   FETCH_PHOTOS_BEGIN,
//   FETCH_PHOTOS_SUCCESS,
//   FETCH_PHOTOS_FAILURE
// } from "./constants";

// export {
//   getAllPhotos,
//   getPhoto,
//   getPhotoTags,
//   getPhotoAlbum,
//   getPhotoMedium,
//   getPhotoSubject
// } from "./selectors";
// export {
//   fetchPhotos,
//   fetchProductsBegin,
//   fetchPhotosSuccess,
//   fetchPhotosFailure
// } from "./actions";

const initialState = {
  photos: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        loading: false,
        photos: action.payload.photos
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        photos: []
      };
    default:
      return state;
  }
};
