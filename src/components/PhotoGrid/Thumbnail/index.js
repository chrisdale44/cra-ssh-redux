import { connect } from "react-redux";
import Thumbnail from "./Thumbnail";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thumbnail);
