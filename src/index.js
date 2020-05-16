import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

import Main from "./components/Main";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Main recipes={null} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/*
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { INCREMENT } from "../actions/index";

const initialState = {
  count: 0,
};

// Need to import combineReducers from redux for this
// const allReducers = combineReducers ({
//counter: rootReducer
//})

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};

export default createStore(rootReducer, applyMiddleware(thunk));

*/
