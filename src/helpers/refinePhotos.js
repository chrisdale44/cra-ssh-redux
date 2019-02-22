const refinePhotosByTag = (photos, selectedTags) => {
  return photos.reduce((acc, photo, i) => {
    if (
      !selectedTags.length ||
      !selectedTags.find(tag => photo.tags.indexOf(tag) === -1)
    ) {
      acc.push(photo);
    }
    return acc;
  }, []);
};

const refinePhotosByFilter = (photos, selectedFilters) => {
  const selectedFilterKeys = Object.keys(selectedFilters);
  if (!selectedFilterKeys.length) {
    return photos;
  }

  return photos.reduce((acc, photo) => {
    // use .find() here for Union of filters, rather than intersection
    const res = selectedFilterKeys.every(filterKey => {
      if (!selectedFilters[filterKey]) return false;
      if (!photo.context) return false;
      if (!photo.context.custom[filterKey]) return false;
      if (selectedFilters[filterKey] === photo.context.custom[filterKey])
        return true;
    });

    if (res) {
      acc.push(photo);
    }
    return acc;
  }, []);
};

const refinePhotos = (photos, selectedFilters, selectedTags) =>
  refinePhotosByFilter(
    refinePhotosByTag(photos, selectedTags),
    selectedFilters
  );

export default refinePhotos;
