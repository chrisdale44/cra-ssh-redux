export const getAllFilterOptions = state => state.filters;

export const getFilter = (state, id) => {
  return state.filters.filter(filter => filter.id === id);
};

export const getAllSelectedFilters = state => {
  return state.filters.reduce((acc, filter) => {
    if (filter && filter.options.length) {
      const selectedOption = filter.options.filter(
        option => option.isSelected === true
      );

      if (selectedOption.length) {
        acc[filter.id] = selectedOption[0].id;
      }
    }
    return acc;
  }, {});
};
