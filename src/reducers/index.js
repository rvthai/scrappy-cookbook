import { combineReducers } from "redux";

import searchReducer from "./search";
import recipesReducer from "./recipes";
import recipeReducer from "./recipe";
import pagnitionReducer from "./pagnition";

const rootReducer = combineReducers({
  search: searchReducer,
  recipes: recipesReducer,
  recipe: recipeReducer,
  pagnition: pagnitionReducer,
});

export default rootReducer;
