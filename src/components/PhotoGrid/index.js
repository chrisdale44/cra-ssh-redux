import { connect } from "react-redux";
import PhotoGrid from "./PhotoGrid";
import { getAllPhotos } from "../../store/photos";
import { getAllSelectedTags } from "../../store/tags";
import { getAllSelectedFilters } from "../../store/filters";

const mapStateToProps = state => ({
  photos: getAllPhotos(state),
  selectedTags: getAllSelectedTags(state),
  selectedFilters: getAllSelectedFilters(state)
});

export default connect(mapStateToProps)(PhotoGrid);
