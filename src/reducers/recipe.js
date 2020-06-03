import { GETTING_RECIPE, GET_RECIPE } from "../actions";

const initialstate = {
  data: [],
  isLoading: true,
};

const recipeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GETTING_RECIPE:
      return {
        ...state,
        isLoading: true,
      };
    case GET_RECIPE:
      return {
        isLoading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
