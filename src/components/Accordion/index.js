import { connect } from "react-redux";
import Accordion from "./Accordion";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accordion);
