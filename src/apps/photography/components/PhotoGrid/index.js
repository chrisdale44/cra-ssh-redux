import { connect } from "react-redux";
import PhotoGrid from "./PhotoGrid";
import { getAllPhotos, setOpenPhoto } from "../../store/photos";
import { getAllSelectedTags } from "../../store/tags";
import { getAllSelectedFilters } from "../../store/filters";
import refinePhotos from "../../helpers/refinePhotos";

const mapDispatchToProps = dispatch => ({
  setOpenPhoto: (public_url, url) => {
    return dispatch(setOpenPhoto(public_url, url));
  }
});

const mapStateToProps = state => ({
  photos: refinePhotos(
    getAllPhotos(state),
    getAllSelectedFilters(state),
    getAllSelectedTags(state.tags)
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoGrid);
