// import { FETCH_PHOTOS_SUCCESS } from "../photos/constants";
// import { parseForMetadata } from "../../helpers";
export { METADATA_IDS } from "./constants";
export { getAllMetadata } from "./selectors";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_PHOTOS_SUCCESS:
    //   return parseForMetadata(action.payload.photos);
    default:
      return state;
  }
};
