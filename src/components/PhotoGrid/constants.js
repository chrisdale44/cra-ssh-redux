import PropTypes from "prop-types";

export const PHOTOS_SHAPE = PropTypes.arrayOf(
  PropTypes.shape({
    public_id: PropTypes.string.isRequired,
    format: PropTypes.string.isRequired,
    version: PropTypes.number.isRequired,
    resource_type: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    bytes: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    secure_url: PropTypes.string.isRequired,
    tags: PropTypes.array,
    context: PropTypes.object
  })
);
