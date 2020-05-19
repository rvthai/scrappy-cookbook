export const GET_RECIPES = "GET_RECIPES";
export const SAVE_SEARCH = "SAVE_SEARCH";
export const ADD_BOOKMARK = "ADD_BOOKMARK";
export const REMOVE_BOOKMARK = "REMOVE_BOOKMARK";

const APP_ID = "b2b48313";
const APP_KEY = "75c1ef2136cc93da129f58f3a4ebe8df";
//const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

// Optional Parameters (filters)
// from (default 0)
// to (default 10)
// calories
// health
// mealType
// diet

export const saveSearch = (query) => {
  return {
    type: SAVE_SEARCH,
    query: query,
  };
};

export const getRecipes = (query) => {
  // console.log("getRecipes() called");
  return (dispatch) => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_RECIPES,
          payload: data.hits,
        });
      });
  };
};
