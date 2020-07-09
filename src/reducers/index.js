import { combineReducers } from "redux";

import searchReducer from "./search";
import recipesReducer from "./recipes";
import recipeReducer from "./recipe";
import bookmarksReducer from "./bookmarks";

const rootReducer = combineReducers({
  search: searchReducer,
  recipes: recipesReducer,
  recipe: recipeReducer,
  bookmarks: bookmarksReducer,
});

export default rootReducer;
