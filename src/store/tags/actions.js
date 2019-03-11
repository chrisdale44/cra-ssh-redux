import { TOGGLE_TAG_SELECTED, TOGGLE_ENABLED_TAGS } from "./constants";
import { getAllPhotos } from "../photos";

export const toggleTagSelected = tagId => (dispatch, getState) => {
  dispatch({
    type: TOGGLE_TAG_SELECTED,
    id: tagId
  });
  const photos = getAllPhotos(getState());
  dispatch({ type: TOGGLE_ENABLED_TAGS, photos });
};
