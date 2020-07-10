export const LOAD_RECIPES = "LOAD_RECIPES";
export const GET_RECIPES = "GET_RECIPES";
export const RESET_RECIPES = "RESET_RECIPES";

export const SAVE_SEARCH = "SAVE_SEARCH";
export const SAVE_FILTERS = "SAVE_FILTERS";
export const RESET_SEARCH = "RESET_SEARCH";

export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

const APP_ID = "b2b48313";
const APP_KEY = "75c1ef2136cc93da129f58f3a4ebe8df";

export const getRecipes = (query, filters) => {
  var URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`;
  const health = filters.health.join("&health=");
  const diet = filters.diet;

  if (diet !== "" && health !== "") {
    URL += `&diet=${diet}&health=${health}`;
  } else if (diet !== "") {
    URL += `&diet=${diet}`;
  } else if (health !== "") {
    URL += `&health=${health}`;
  }

  return (dispatch) => {
    dispatch({
      type: LOAD_RECIPES,
    });

    return fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_RECIPES,
          payload: data,
        });
      });
  };
};

export const resetRecipes = () => {
  return {
    type: RESET_RECIPES,
  };
};

export const saveSearch = (query) => {
  return {
    type: SAVE_SEARCH,
    query: query,
  };
};

export const saveFilters = (filters) => {
  return {
    type: SAVE_FILTERS,
    filters: filters,
  };
};

export const resetSearch = () => {
  return {
    type: RESET_SEARCH,
  };
};

export const addBookmark = (data) => {
  return {
    type: ADD_BOOKMARK,
    payload: data,
  };
};

export const removeBookmark = (data) => {
  return {
    type: REMOVE_BOOKMARK,
    payload: data,
  };
};
