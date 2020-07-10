import { combineReducers } from "redux";

import searchReducer from "./search";
import recipesReducer from "./recipes";
import bookmarksReducer from "./bookmarks";

const rootReducer = combineReducers({
  search: searchReducer,
  recipes: recipesReducer,
  bookmarks: bookmarksReducer,
});

export default rootReducer;
