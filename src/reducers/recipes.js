import { GET_RECIPES, RESET_RECIPES } from "../actions";

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload;
    case RESET_RECIPES:
      return [];
    default:
      return state;
  }
};

export default recipesReducer;
