import { GET_RECIPES, RESET_RECIPES } from "../actions";

const initial_state = null;

const recipesReducer = (state = null, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload;
    case RESET_RECIPES:
      return initial_state;
    default:
      return state;
  }
};

export default recipesReducer;
