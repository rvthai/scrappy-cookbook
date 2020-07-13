import { LOAD_RECIPES, GET_RECIPES, RESET_RECIPES } from "actions";

const initial_state = { data: null, loading: true };

const recipesReducer = (state = initial_state, action) => {
  switch (action.type) {
    case LOAD_RECIPES:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPES:
      return { ...state, data: action.payload, loading: false };
    case RESET_RECIPES:
      return initial_state;
    default:
      return state;
  }
};

export default recipesReducer;
