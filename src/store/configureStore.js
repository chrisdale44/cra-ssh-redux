import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import photosReducer from "./photos";
import tagsReducer from "./tags";
import filtersReducer from "./filters";
import metadataReducer from "./metadata";

const createStoreWithMiddleware = composeWithDevTools(
  applyMiddleware(ReduxThunk)
)(createStore);

const rootReducer = combineReducers({
  photos: photosReducer,
  tags: tagsReducer,
  filters: filtersReducer,
  metadata: metadataReducer
});

export default function configureStore(initialState = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
