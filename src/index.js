import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// STORE -> globalized state

// ACTION -> describes what you want to do
// save/bookmark recipes
// search for recipes
const search = () => {
  return {
    type: "SEARCH",
  };
};

// REDUCER -> modify store based on action
const list = (state = [], action) => {
  switch (action.type) {
    case "SEARCH":
      return state;
  }
};

// DISPATCH -> send the action to the reducer

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
