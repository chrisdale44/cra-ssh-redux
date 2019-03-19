import { connect } from "react-redux";
import PhotoBox from "./PhotoBox";
import { closeOpenPhoto, getOpenPhoto } from "../../store/photos";

const mapDispatchToProps = dispatch => ({
  closeOpenPhoto: () => {
    return dispatch(closeOpenPhoto());
  }
});

const mapStateToProps = state => ({
  photo: getOpenPhoto(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoBox);
