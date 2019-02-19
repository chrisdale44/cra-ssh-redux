import { METADATA_IDS } from "../store/metadata";
import { getAllUniqueValuesOf } from ".";

const parseForMetadata = photos => {
  const metadata = {};

  METADATA_IDS.forEach(id => {
    metadata[id] = getAllUniqueValuesOf(photos, id);
  });

  return metadata;
};

export default parseForMetadata;
