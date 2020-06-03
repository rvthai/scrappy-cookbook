export const GET_RECIPES = "GET_RECIPES";
export const SAVE_SEARCH = "SAVE_SEARCH";
export const SAVE_FILTERS = "SAVE_FILTERS";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREV_PAGE = "PREV_PAGE";
export const GET_RECIPE = "GET_RECIPE";
export const GETTING_RECIPE = "GETTING_RECIPE";

const APP_ID = "b2b48313";
const APP_KEY = "75c1ef2136cc93da129f58f3a4ebe8df";

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

export const nextPage = () => {
  return {
    type: NEXT_PAGE,
  };
};

export const prevPage = () => {
  return {
    type: PREV_PAGE,
  };
};

export const getRecipe = (id) => {
  const URI = `http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23${id}`;
  return (dispatch) => {
    dispatch({
      type: GETTING_RECIPE,
    });
    return fetch(
      `https://api.edamam.com/search?r=${URI}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data[0]);
        dispatch({
          type: GET_RECIPE,
          payload: data[0],
        });
      });
  };
};

// can only do diet, health and allergies (maybe calories)
export const getRecipes = (query, filters) => {
  // console.log("getRecipes() called");
  var URL = "";
  console.log(filters.health);
  if (filters.diet !== "" && filters.health.length >= 1) {
    const health = filters.health.join("&health=");
    URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100&diet=${filters.diet}&health=${health}`;
  } else if (filters.diet !== "") {
    URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100&diet=${filters.diet}`;
  } else if (filters.health.length >= 1) {
    const health = filters.health.join("&health=");
    URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100&health=${health}`;
  } else {
    URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=100`;
  }
  return (dispatch) => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.hits);
        dispatch({
          type: GET_RECIPES,
          payload: data,
        });
      });
  };
};
