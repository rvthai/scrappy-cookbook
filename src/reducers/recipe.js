import { LOAD_RECIPE, GET_RECIPE } from "actions";

const initial_state = { data: null, loading: true };

const recipeReducer = (state = initial_state, action) => {
  switch (action.type) {
    case LOAD_RECIPE:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPE:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};

export default recipeReducer;
