import { connect } from "react-redux";
import Photography from "./Photography";
import { getOpenPhoto } from "../../store/photos";

const mapStateToProps = state => ({
  photo: getOpenPhoto(state)
});

export default connect(mapStateToProps)(Photography);
