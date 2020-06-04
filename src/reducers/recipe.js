import { LOAD_RECIPE, GET_RECIPE } from "../actions";

const initialState = {
  data: [],
  loading: true,
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RECIPE:
      return {
        ...state,
        loading: true,
      };
    case GET_RECIPE:
      return {
        data: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default recipeReducer;
