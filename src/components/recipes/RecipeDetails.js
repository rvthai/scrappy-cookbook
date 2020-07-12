import React, { Component } from "react";
import "stylesheets/recipes/RecipeDetails.css";

// Components
import Bookmark from "components/bookmarks/Bookmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faClock,
  faFire,
  faUtensils,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";

class RecipeDetails extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

    this.boldNutrition();
  }

  boldNutrition = () => {
    console.log(document.getElementsByClassName("nutrition-text"));
  };

  handleBackClick = () => {
    this.props.history.goBack();
  };

  render() {
    const recipe = this.props.location.state.recipe;

    var estimated_time = recipe.totalTime;
    if (estimated_time <= 0) {
      estimated_time = "?";
    }

    const macros = ["CHOCDF", "FAT", "PROCNT"];

    return (
      <div className="recipe-details-container">
        <div className="top-half">
          <img className="recipe-image" src={recipe.image} alt="recipe" />
          <div className="the-text">
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
              <div className="vr" />
              <Bookmark recipe={recipe} />
            </div>
          </div>
        </div>
        <div className="bottom-half">
          <div className="ingredients-card">
            <p className="the-header-text">Ingredients</p>
            {recipe.ingredientLines.map((ingredient, index) => (
              <p className="ingredients-text" key={index}>
                {ingredient}
              </p>
            ))}
          </div>
          <div className="nutrition-card">
            <div className="facts">
              <div>
                <FontAwesomeIcon
                  className="big-icons"
                  icon={faFire}
                  size="4x"
                />
                <p className="the-stats-label">Total Calories</p>
                <p className="the-stats">{Math.round(recipe.calories)}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  className="big-icons"
                  icon={faUtensils}
                  size="4x"
                />
                <p className="the-stats-label">Servings</p>
                <p className="the-stats">{recipe.yield}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  className="big-icons"
                  icon={faClock}
                  size="4x"
                />
                <p className="the-stats-label">Cook Time</p>
                <p className="the-stats">{estimated_time} min</p>
              </div>
            </div>
            <div className="nutrition-facts">
              <p className="the-header-text">Nutrition</p>
              <div className="yes">
                {Object.keys(recipe.totalNutrients).map((key, index) => (
                  <>
                    {macros.includes(key) ? (
                      <div
                        className="nutrition-text-row"
                        style={{ backgroundColor: "#e6e6e6" }}
                      >
                        <p
                          style={{ fontWeight: "bold" }}
                          className="nutrition-text"
                        >
                          {recipe.totalNutrients[key].label}
                        </p>
                        <p
                          style={{ fontWeight: "bold" }}
                          className="nutrition-text"
                        >
                          {Math.round(
                            recipe.totalNutrients[key].quantity / recipe.yield
                          )}{" "}
                          {recipe.totalNutrients[key].unit}
                        </p>
                      </div>
                    ) : (
                      <div className="nutrition-text-row">
                        <p className="nutrition-text">
                          {recipe.totalNutrients[key].label}
                        </p>
                        <p className="nutrition-text">
                          {Math.round(
                            recipe.totalNutrients[key].quantity / recipe.yield
                          )}{" "}
                          {recipe.totalNutrients[key].unit}
                        </p>
                      </div>
                    )}
                    <div className="horizontal-rule" />
                  </>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="facts">
              <div>
                <FontAwesomeIcon
                  className="big-icons"
                  icon={faFire}
                  size="4x"
                />
                <p className="the-stats-label">Total Calories</p>
                <p className="the-stats">{Math.round(recipe.calories)}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  className="big-icons"
                  icon={faUtensils}
                  size="4x"
                />
                <p className="the-stats-label">Servings</p>
                <p className="the-stats">{recipe.yield}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  className="big-icons"
                  icon={faClock}
                  size="4x"
                />
                <p className="the-stats-label">Cook Time</p>
                <p className="the-stats">{estimated_time}</p>
              </div>
            </div> */}
          {/* <div className="hs"> */}
          {/* <p className="the-header-text">Nutrition</p>
            {Object.keys(recipe.totalNutrients).map((key, index) => (
              <>
                <p className="nutrition-text">
                  {recipe.totalNutrients[key].label}{" "}
                  {Math.round(
                    recipe.totalNutrients[key].quantity / recipe.yield
                  )}{" "}
                  {recipe.totalNutrients[key].unit}
                </p>
                <div className="horizontal-rule" />
              </>
            ))} */}
          {/* <div className="nutrition-stuff">
              {Object.keys(recipe.totalNutrients).map((key, index) => (
                <>
                  <p className="nutrition-text">
                    {recipe.totalNutrients[key].label}{" "}
                    {Math.round(
                      recipe.totalNutrients[key].quantity / recipe.yield
                    )}{" "}
                    {recipe.totalNutrients[key].unit}
                  </p>
                  <div className="horizontal-rule" />
                </>
              ))}
            </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default RecipeDetails;

/*
  {/* <div class="top-half">
          <div class="top-left-half">
            <img className="recipe-image" src={recipe.image} alt="recipe" />{" "}
          </div>
          <div class="top-right-half">
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
              <div className="vr" />
              <Bookmark recipe={recipe} />
            </div>
          </div>
        </div>
        <div className="bottom-half">
          <div className="bottom-left-half">
            <p className="ingredients-header-text">Ingredients</p>
            <p className="ingredients-note">
              (visit source page for preparation instructions)
            </p>
            {recipe.ingredientLines.map((ingredient, index) => (
              <p className="ingredients-text" key={index}>
                {ingredient}
              </p>
            ))}
          </div>
          <div className="bottom-right-half">
            Nutrition<p>Total Calories: {Math.round(recipe.calories)}</p>
            <h3>Macros Per Serving...</h3>
            <p>
              Calories:
              {Math.round(
                recipe.totalNutrients.ENERC_KCAL.quantity / recipe.yield
              )}
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
        </div> 
*/
