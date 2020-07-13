import { SAVE_SEARCH, SAVE_FILTERS, RESET_SEARCH } from "actions";

const initial_state = {
  query: "",
  filters: {
    diet: "",
    health: [],
  },
};

const searchReducer = (state = initial_state, action) => {
  switch (action.type) {
    case SAVE_SEARCH:
      return {
        ...state,
        query: action.query,
      };
    case SAVE_FILTERS:
      return {
        ...state,
        filters: action.filters,
      };
    case RESET_SEARCH:
      return initial_state;
    default:
      return state;
  }
};

export default searchReducer;
