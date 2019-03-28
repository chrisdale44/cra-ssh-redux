import { connect } from "react-redux";
import { getOpenPhoto } from "./store/photos";
import Photography from "./Photography";

const mapStateToProps = state => ({
  photo: getOpenPhoto(state)
});

export default connect(mapStateToProps)(Photography);
