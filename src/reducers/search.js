import { SAVE_SEARCH } from "../actions";

const initialState = {
  query: "",
  filter: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCH:
      const newState = { query: action.query, filter: "" };
      return { ...state, ...newState };
    default:
      return state;
  }
};

export default searchReducer;
