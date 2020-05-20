import { SAVE_SEARCH } from "../actions";
// import { NEXT_PAGE } from "../actions";
// import { PREV_PAGE } from "../actions";

const initialState = {
  query: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH:
      return { ...state, query: action.query };
    default:
      return state;
  }
};

export default searchReducer;
