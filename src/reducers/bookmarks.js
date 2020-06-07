import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../actions";

const bookmarksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      return [...state, action.payload];
    case REMOVE_BOOKMARK:
      return state.filter((recipe) => recipe.uri !== action.payload.uri);
    default:
      return state;
  }
};

export default bookmarksReducer;
