import {
  FETCH_PHOTOS_SUCCESS,
  SET_OPEN_PHOTO,
  CLOSE_OPEN_PHOTO
} from "./constants";
export {
  FETCH_PHOTOS_SUCCESS,
  SET_OPEN_PHOTO,
  CLOSE_OPEN_PHOTO
} from "./constants";

export {
  getAllPhotos,
  getPhoto,
  getPhotoTags,
  getPhotoAlbum,
  getPhotoMedium,
  getPhotoSubject,
  getOpenPhoto
} from "./selectors";
export { fetchAllPhotos, setOpenPhoto, closeOpenPhoto } from "./actions";

const initialState = {
  photos: [],
  openPhoto: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload.photos
      };
    case SET_OPEN_PHOTO:
      return {
        ...state,
        openPhoto: {
          public_id: action.public_id,
          url: action.url
        }
      };
    case CLOSE_OPEN_PHOTO:
      return {
        ...state,
        openPhoto: null
      };
    default:
      return state;
  }
};
