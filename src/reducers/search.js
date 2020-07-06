import { SAVE_SEARCH, SAVE_FILTERS, RESET_SEARCH } from "../actions";

const initialState = {
  query: "",
  filters: {
    diet: "",
    health: [],
  },
};

const searchReducer = (state = initialState, action) => {
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
      return initialState;
    default:
      return state;
  }
};

export default searchReducer;
