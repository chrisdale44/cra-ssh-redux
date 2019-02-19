const getAllUniqueValuesOf = (photos, id) => {
  let values = [];
  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];

    if (!photo[id] || !photo[id].length) {
      break;
    }

    if (typeof photo[id] === "string") {
      if (values.indexOf(photo[id]) === -1) {
        values.push(photo[id]);
      }
    } else if (Array.isArray(photo[id])) {
      for (let j = 0; j < photo[id].length; j++) {
        if (values.indexOf(photo[id][j]) === -1) {
          values = values.concat(photo[id][j]);
        }
      }
    }
  }
  return values;
};

export default getAllUniqueValuesOf;
