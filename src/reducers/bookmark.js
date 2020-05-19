import { ADD_BOOKMARK, REMOVE_BOOKMARK } from "../actions";

const bookmarkReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOKMARK:
      // return the state with the new bookmark added
      break;
    case REMOVE_BOOKMARK:
      // return the state with the bookmark removed
      break;
    default:
      return state;
  }
};

export default bookmarkReducer;
