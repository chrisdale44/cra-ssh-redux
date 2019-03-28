export const getAllTags = state => state.tags;

export const getTag = (state, props) =>
  state.tags.filter(tag => tag.id === props.id);

export const getAllSelectedTags = tags => {
  return tags.reduce((acc, tag) => {
    if (tag.isSelected) {
      acc.push(tag.id);
    }
    return acc;
  }, []);
};

// export const isTagSelected = createSelector(
//   getTag,
//   tag => tag && tag.isSelected
// );

// export const isTagEnabled = createSelector(getTag, tag => tag && tag.isEnabled);
