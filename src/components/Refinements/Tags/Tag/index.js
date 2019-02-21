import { connect } from "react-redux";
import Tag from "./Tag";
import { toggleTagSelected } from "../../../../store/tags";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = (dispatch, { id }) => ({
  toggleTagSelected: () => dispatch(toggleTagSelected(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tag);
