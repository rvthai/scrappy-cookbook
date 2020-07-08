import { NEXT_PAGE, PREV_PAGE } from "../actions";

const initialState = {
  from: 0,
  to: 20,
};

const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, from: state.from + 20, to: state.to + 20 };
    case PREV_PAGE:
      return { ...state, from: state.from - 20, to: state.to - 20 };
    default:
      return state;
  }
};

export default paginationReducer;
