import { parseForTags } from "../../helpers";
import { FETCH_PHOTOS_SUCCESS } from "../photos";
import { TOGGLE_TAG_SELECTED, TOGGLE_ENABLED_TAGS } from "./constants";
import { getAllSelectedTags } from "./selectors";
export { getAllTags, getTag, getAllSelectedTags } from "./selectors";
export { toggleTagSelected } from "./actions";

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
    case TOGGLE_ENABLED_TAGS:
      const selectedTags = getAllSelectedTags(state);
      const result = state.map(tag => {
        if (!selectedTags.length || selectedTags.includes(tag.id)) {
          return { ...tag, isEnabled: true };
        }
        if (
          action.photos.find(
            photo =>
              photo.tags.includes(tag.id) &&
              selectedTags.every(t => photo.tags.includes(t))
          )
        ) {
          return { ...tag, isEnabled: true };
        }
        return { ...tag, isEnabled: false };
      });
      return result;
    default:
      return state;
  }
};
