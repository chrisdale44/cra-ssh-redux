import { TOGGLE_TAG_SELECTED, TOGGLE_TAG_ENABLED } from "./constants";

export const toggleTagSelected = tagId => dispatch => {
  dispatch({
    type: TOGGLE_TAG_SELECTED,
    id: tagId
  });
};

export const toggleTagEnabled = tagId => dispatch => {
  dispatch({
    type: TOGGLE_TAG_ENABLED,
    payload: tagId
  });
};
