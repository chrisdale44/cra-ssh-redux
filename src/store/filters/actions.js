import { TOGGLE_SELECTED_FILTER } from "./constants";

export const toggleSelectedFilter = (title, option) => dispatch => {
  dispatch({
    type: TOGGLE_SELECTED_FILTER,
    title,
    option
  });
};
