import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class RecipeDetails extends Component {
  handleClick = () => {
    this.props.history.push("/recipes");
  };

  render() {
    const { recipe } = this.props.location.state;

    return (
      <div>
        <h1>Some details about the recipe will go here...</h1>
        <h2>{recipe.label}</h2>
        <img src={recipe.image} alt="alt" />
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
          Calories:{" "}
          {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity / recipe.yield)}
        </p>
        <p>
          {recipe.totalNutrients.CHOCDF.label}{" "}
          {Math.round(recipe.totalNutrients.CHOCDF.quantity / recipe.yield)}
          {recipe.totalNutrients.FAT.unit}
        </p>
        <p>
          {recipe.totalNutrients.FAT.label}{" "}
          {Math.round(recipe.totalNutrients.FAT.quantity / recipe.yield)}
          {recipe.totalNutrients.FAT.unit}
        </p>
        <p>
          {recipe.totalNutrients.PROCNT.label}{" "}
          {Math.round(recipe.totalNutrients.PROCNT.quantity / recipe.yield)}
          {recipe.totalNutrients.FAT.unit}
        </p>
        <button onClick={this.handleClick}>Back</button>
      </div>
    );
  }
}

export default withRouter(RecipeDetails);
