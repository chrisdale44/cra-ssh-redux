const getAllUniqueValuesOf = (photos, id) => {
  let values = [];
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];
    if (!photo.context || !photo.context.custom || !photo.context.custom[id]) {
      continue;
    }

    const val = photo.context.custom[id];
    if (values.indexOf(val) === -1) {
      values.push(val);
    }
  }
  return values;
};

export default getAllUniqueValuesOf;
