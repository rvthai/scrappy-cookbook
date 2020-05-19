import { GET_RECIPES } from "../actions";

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload;
    default:
      return state;
  }
};

export default recipesReducer;
