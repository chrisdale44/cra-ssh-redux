import { connect } from "react-redux";
import PhotoModal from "./PhotoModal";
import { closeOpenPhoto } from "../../store/photos";

const mapDispatchToProps = dispatch => ({
  closeOpenPhoto: () => {
    return dispatch(closeOpenPhoto());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(PhotoModal);
