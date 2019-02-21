import { connect } from "react-redux";
import ComboBox from "./ComboBox";
import { toggleSelectedFilter } from "../../../../store/filters";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = (dispatch, { title, option }) => ({
  toggleSelectedFilter: (title, option) =>
    dispatch(toggleSelectedFilter(title, option))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComboBox);
