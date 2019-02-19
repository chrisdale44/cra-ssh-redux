const getFilteredPhotos = (photos, selectedFilters) => {
    const filteredPhotos = [];

    if (!photos || !selectedFilters) {
        return;
    }

    for (let i = 0; i < photos.length; i++) {
        const photo = photos[i];

        for (let key in selectedFilters) {
            if (!selectedFilters[key]) {
                return;
            }
            const filter = selectedFilters[key];

            if (photo[key].indexOf(filter > -1)) {
                filteredPhotos.push(filter);
            }
        }
    }

    return filteredPhotos;
}

export default getFilteredPhotos;