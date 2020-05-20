import { combineReducers } from "redux";

import searchReducer from "./search";
import recipesReducer from "./recipes";
import bookmarkReducer from "./bookmark";
import pagnitionReducer from "./pagnition";

const rootReducer = combineReducers({
  search: searchReducer,
  recipes: recipesReducer,
  bookmark: bookmarkReducer,
  pagnition: pagnitionReducer,
});

export default rootReducer;
