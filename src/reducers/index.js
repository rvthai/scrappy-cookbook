import { combineReducers } from "redux";

import searchReducer from "./search";
import recipesReducer from "./recipes";
import recipeReducer from "./recipe";
import paginationReducer from "./pagination";
import bookmarksReducer from "./bookmarks";

const rootReducer = combineReducers({
  search: searchReducer,
  recipes: recipesReducer,
  recipe: recipeReducer,
  pagination: paginationReducer,
  bookmarks: bookmarksReducer,
});

export default rootReducer;
