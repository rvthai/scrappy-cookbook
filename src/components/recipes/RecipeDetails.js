import React, { Component } from "react";
import "stylesheets/recipes/RecipeDetails.css";

// Components
import Bookmark from "components/bookmarks/Bookmark";

class RecipeDetails extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleBackClick = () => {
    this.props.history.goBack();
  };

  render() {
    const recipe = this.props.location.state.recipe;

    return (
      <div className="recipe-details-container">
        <Bookmark recipe={recipe} />
        <button onClick={this.handleBackClick}>Back</button>
        <h2>{recipe.label}</h2>
        <img className="recipe-image" src={recipe.image} alt="recipe" />
        <p>Source: {recipe.source}</p>
        <p>URL: {recipe.url}</p>
        <p>Servings: {recipe.yield}</p>
        <p>Diet Labels:</p>
        {recipe.dietLabels !== undefined
          ? recipe.dietLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))
          : "None "}
        <p>Health Labels:</p>
        {recipe.healthLabels !== undefined
          ? recipe.healthLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))
          : "None "}
        <p>Ingredients: </p>
        {recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        <p>Time to cook: {recipe.totalTime} min</p>
        <p>Total Calories: {Math.round(recipe.calories)}</p>
        <h3>Macros Per Serving...</h3>
        <p>
          Calories:
          {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity / recipe.yield)}
        </p>
        <p>
          {recipe.totalNutrients.CHOCDF.label}
          {Math.round(recipe.totalNutrients.CHOCDF.quantity / recipe.yield)}
          {recipe.totalNutrients.FAT.unit}
        </p>
        <p>
          {recipe.totalNutrients.FAT.label}
          {Math.round(recipe.totalNutrients.FAT.quantity / recipe.yield)}
          {recipe.totalNutrients.FAT.unit}
        </p>
        <p>
          {recipe.totalNutrients.PROCNT.label}
          {Math.round(recipe.totalNutrients.PROCNT.quantity / recipe.yield)}
          {recipe.totalNutrients.FAT.unit}
        </p>
      </div>
    );
  }
}

export default RecipeDetails;
