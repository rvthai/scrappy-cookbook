import React, { Component } from "react";
import "stylesheets/recipes/RecipeDetails.css";

// Components
import Bookmark from "components/bookmarks/Bookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

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
        <div class="top-half">
          <img className="recipe-image" src={recipe.image} alt="recipe" />{" "}
          <p className="recipe-label">{recipe.label}</p>
          <Bookmark recipe={recipe} />
        </div>
        {/* <div className="top-half">
          <img className="recipe-image" src={recipe.image} alt="recipe" />
          <div className="recipe-primary-details">
            <div className="return-button" onClick={this.handleBackClick}>
              <FontAwesomeIcon className="arrow-left-icon" icon={faArrowLeft} />{" "}
              Return to Recipes
            </div>
            <p className="recipe-label">{recipe.label}</p>
            <p className="recipe-source">
              By <span className="recipe-source-text">{recipe.source}</span>
            </p>
            <div className="recipe-buttons">
              <a className="source-button" target="_blank" href={recipe.url}>
                <FontAwesomeIcon
                  className="external-link-icon"
                  icon={faExternalLinkAlt}
                />
                Visit source page
              </a>
              <Bookmark recipe={recipe} />
            </div>
          </div> */}
        {/* </div> */}
        {/* <div>
          <p>Ingredients: </p>
          {recipe.ingredientLines.map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
        </div> */}
        {/* <p>Source: {recipe.source}</p>
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
        </p> */}
      </div>
    );
  }
}

export default RecipeDetails;
