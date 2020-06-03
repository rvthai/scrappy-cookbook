import { SAVE_SEARCH, SAVE_FILTERS } from "../actions";

const initialSearchState = {
  query: "",
  filters: {
    diet: "",
    health: [],
  },
};

const searchReducer = (state = initialSearchState, action) => {
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
    default:
      return state;
  }
};

export default searchReducer;
