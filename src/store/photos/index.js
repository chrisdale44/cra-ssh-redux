import { FETCH_PHOTOS_SUCCESS } from "./constants";

// export {
//   getAllPhotos,
//   getPhoto,
//   getPhotoTags,
//   getPhotoAlbum,
//   getPhotoMedium,
//   getPhotoSubject
// } from "./selectors";
export { fetchAllPhotos } from "./actions";

const initialState = {
  photos: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      console.log(FETCH_PHOTOS_SUCCESS);
      return {
        ...state,
        photos: action.payload.photos
      };
    default:
      return state;
  }
};
