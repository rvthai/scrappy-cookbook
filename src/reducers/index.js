import { combineReducers } from "redux";

import searchReducer from "./search";
import recipesReducer from "./recipes";
import bookmarkReducer from "./bookmark";

const rootReducer = combineReducers({
  search: searchReducer,
  recipes: recipesReducer,
  bookmark: bookmarkReducer,
});

export default rootReducer;
