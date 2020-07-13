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
  }

  handleBackClick = () => {
    this.props.history.goBack();
  };

  render() {
    const recipe = this.props.location.state.recipe;

    var estimated_time = recipe.totalTime;
    if (estimated_time <= 0) {
      estimated_time = "?";
    } else {
      estimated_time += " min";
    }

    const macros = ["CHOCDF", "FAT", "PROCNT"];

    return (
      <div className="recipe-details-container">
        <div className="top-half">
          <img className="recipe-image" src={recipe.image} alt="recipe" />
          <div className="the-text">
            <div className="return-button" onClick={this.handleBackClick}>
              <FontAwesomeIcon className="arrow-left-icon" icon={faArrowLeft} />{" "}
              Return to {this.props.location.state.from}
            </div>
            <p className="recipe-label">{recipe.label}</p>
            <p className="recipe-source">
              By <span className="recipe-source-text">{recipe.source}</span>
            </p>
            <div className="recipe-buttons">
              <a
                className="source-button"
                rel="noopener noreferrer"
                target="_blank"
                href={recipe.url}
              >
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
                <p className="the-stats">{estimated_time}</p>
              </div>
            </div>
            <div className="nutrition-facts">
              <p className="the-header-text">Nutrition</p>
              <div className="yes">
                {Object.keys(recipe.totalNutrients).map((key, index) => (
                  <div key={index}>
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecipeDetails;
