import PropTypes from "prop-types";

export const OPTIONS_SHAPE = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        isSelected: PropTypes.bool.isRequired
    })
);

export const FILTERS_SHAPE = PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string.isRequired,
        options: OPTIONS_SHAPE
    })
);

export const SORT_BY_DATE_OPTIONS = ["Date taken", "Date uploaded"];

export const GRID_OPTIONS = ["View all", "View by album"];


