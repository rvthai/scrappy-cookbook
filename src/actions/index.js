export const GET_RECIPES = "GET_RECIPES";

const APP_ID = "b2b48313";
const APP_KEY = "75c1ef2136cc93da129f58f3a4ebe8df";
//const url = `https://api.edamam.com/search?app_id=${APP_ID}&app_key=${APP_KEY}`;

// can use payload for parameters
export const getRecipes = () => {
  console.log("here"); // delete this line later this is for debugging purposes
  return (dispatch) => {
    fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_RECIPES,
          payload: data,
        });
      });
  };
};
