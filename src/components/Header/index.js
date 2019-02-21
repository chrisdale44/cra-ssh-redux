import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
