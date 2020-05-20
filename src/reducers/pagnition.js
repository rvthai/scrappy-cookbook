import { NEXT_PAGE } from "../actions";
import { PREV_PAGE } from "../actions";

const initialState = {
  from: 0,
  to: 10,
};

const pagnitionReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, from: state.from + 10, to: state.to + 10 };
    case PREV_PAGE:
      return { ...state, from: state.from - 10, to: state.to - 10 };
    default:
      return state;
  }
};

export default pagnitionReducer;
