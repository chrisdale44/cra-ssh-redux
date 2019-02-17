// import { FETCH_PHOTOS_SUCCESS } from "../photos/constants";
// import { parseForFilterOptions } from "../../helpers";
// import { TOGGLE_SELECTED_FILTER } from "./constants";
// export { FILTER_IDS, TOGGLE_SELECTED_FILTER } from "./constants";
// export { getAllFilterOptions, getAllSelectedFilters } from "./selectors";
// export { toggleSelectedFilter } from "./actions";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    // case FETCH_PHOTOS_SUCCESS:
    //   return parseForFilterOptions(action.payload.photos);
    // case TOGGLE_SELECTED_FILTER:
    //   return state.map(filter => {
    //     if (filter.id !== action.title) {
    //       return filter;
    //     }

    //     return {
    //       ...filter,
    //       options: filter.options.map(option => {
    //         if (option.id !== action.option) {
    //           return Object.assign({}, option, {
    //             isSelected: false
    //           });
    //         }

    //         return Object.assign({}, option, {
    //           isSelected: !option.isSelected
    //         });
    //       })
    //     };
    //   });
    default:
      return state;
  }
};
