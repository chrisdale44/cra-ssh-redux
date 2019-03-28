const parseForTags = photos => {
  if (!photos) {
    return;
  }

  return photos.reduce((a, photo) => {
    return a.concat(
      photo.tags.reduce((a2, tag) => {
        if (tag && (!a.length || a.filter(o => o.id === tag).length === 0)) {
          a2.push({
            id: tag,
            isEnabled: true,
            isSelected: false
          });
        }

        return a2;
      }, [])
    );
  }, []);
};

export default parseForTags;
