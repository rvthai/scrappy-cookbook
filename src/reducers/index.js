import { combineReducers } from "redux";

import searchReducer from "./search";
import recipesReducer from "./recipes";
import pagnitionReducer from "./pagnition";

const rootReducer = combineReducers({
  search: searchReducer,
  recipes: recipesReducer,
  pagnition: pagnitionReducer,
});

export default rootReducer;
