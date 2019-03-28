import PropTypes from "prop-types";

export const TAGS_SHAPE = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    isEnabled: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired
  })
);
