import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../actions";

const bookmarksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      break;
    case REMOVE_BOOKMARK:
      break;
    default:
      return state;
  }
};

export default bookmarksReducer;
