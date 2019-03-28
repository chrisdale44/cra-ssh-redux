const getEnabledTags = (photos, selectedTags) => {
    let enabledTags = [];

    if (!photos || !selectedTags) {
        return;
    }

    for (let i = 0; i < selectedTags.length; i++) {
        const tag = selectedTags[i];
        for (let j = 0; j < photos.length; j++) {
            const photo = photos[j];
            if (photo.tags.indexOf(tag) > -1) {
                for (let k = 0; k < photo.tags.length; k++) {
                    const tag = photo.tags[k];
                    if (enabledTags.indexOf(tag) === -1) {
                        enabledTags.push(tag);
                    }
                }
            }
        }
    }

    return enabledTags;
}

export default getEnabledTags;