import { combineReducers } from "redux";

import searchReducer from "reducers/search";
import recipesReducer from "reducers/recipes";
import recipeReducer from "reducers/recipe";
import bookmarksReducer from "reducers/bookmarks";

const rootReducer = combineReducers({
  search: searchReducer,
  recipes: recipesReducer,
  recipe: recipeReducer,
  bookmarks: bookmarksReducer,
});

export default rootReducer;
