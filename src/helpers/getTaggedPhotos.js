const getTaggedPhotos = (photos, selectedTags) => {
  const taggedPhotos = [];

  if (!photos || !selectedTags) {
    return;
  }

  for (let i = 0; i < photos.length; i++) {
    const photo = photos[i];

    for (let j = 0; j < photo.tags.length; j++) {
      const tag = photo.tags[j];

      if (selectedTags.indexOf(tag) > -1 && taggedPhotos.indexOf(tag) === -1) {
        taggedPhotos.push(photo);
        break;
      }
    }
  }

  return taggedPhotos;
};

export default getTaggedPhotos;
