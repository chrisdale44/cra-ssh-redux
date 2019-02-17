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

      acc[filter.id] = selectedOption.length ? selectedOption[0].id : null;
      return acc;
    }
    return acc;
  }, {});
};
