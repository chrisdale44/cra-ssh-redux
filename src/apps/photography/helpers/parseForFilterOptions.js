import { FILTER_IDS } from "../store/filters";
import { getAllUniqueValuesOf } from ".";

const parseForFilterOptions = photos => {
  const filterOptions = [];

  FILTER_IDS.map(id => {
    const options = getAllUniqueValuesOf(photos, id);
    return filterOptions.push({
      id,
      options: options.map(option => {
        return {
          id: option,
          isSelected: false
        };
      })
    });
  });

  return filterOptions;
};

export default parseForFilterOptions;
