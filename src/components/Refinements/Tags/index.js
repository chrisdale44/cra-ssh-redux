import { connect } from "react-redux";
import Tags from "./Tags";
import { getAllTags } from "../../../store/tags";

const mapStateToProps = state => ({
  tags: getAllTags(state)
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tags);
