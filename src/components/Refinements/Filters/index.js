import { connect } from "react-redux";
import Filters from "./Filters";
import { getAllFilterOptions } from "../../../store/filters";

const mapStateToProps = state => ({
  filterOptions: getAllFilterOptions(state)
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
