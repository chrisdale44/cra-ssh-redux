import { FETCH_PHOTOS_SUCCESS } from "../photos/constants";
import { parseForTags } from "../../helpers";
import { TOGGLE_TAG_SELECTED, TOGGLE_TAG_ENABLED } from "./constants";
export { getAllTags, getTag, getAllSelectedTags } from "./selectors";
export { toggleTagSelected, toggleTagEnabled } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_SUCCESS:
      return parseForTags(action.payload.photos);
    case TOGGLE_TAG_SELECTED:
      return state.map(tag => {
        if (tag.id !== action.id) {
          return tag;
        }

        return Object.assign({}, tag, {
          isSelected: !tag.isSelected
        });
      });
    case TOGGLE_TAG_ENABLED:
      return state;
    default:
      return state;
  }
};
