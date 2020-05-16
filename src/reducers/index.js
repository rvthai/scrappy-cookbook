import { GET_RECIPES } from "../actions";

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_RECIPES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
