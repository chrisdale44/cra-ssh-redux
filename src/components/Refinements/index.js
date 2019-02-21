import { connect } from "react-redux";
import Refinements from "./Refinements";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Refinements);
