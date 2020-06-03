import { SAVE_SEARCH, SAVE_FILTERS } from "../actions";

const initialSearchState = {
  query: "",
  filters: {
    diet: "", // cant be empty initially, must construct different url
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
