import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "stylesheets/recipes/RecipeDetails.css";

// Actions
import { getRecipe } from "actions";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faExternalLinkAlt,
  faClock,
  faFire,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

// Components
import Bookmark from "components/bookmarks/Bookmark";
import PageNotFound from "components/app/PageNotFound";

class RecipeDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (this.props.location.state === undefined) {
      this.props.getRecipe(this.props.match.params.id);
    }
  }

  handleBackClick = () => {
    if (this.props.location.state === undefined) {
      this.setState({ redirect: true });
    } else {
      this.props.history.goBack();
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/recipes" />;
    }

    var recipe = null;
    var from = "";

    if (this.props.location.state !== undefined) {
      recipe = this.props.location.state.recipe;
      from = this.props.location.state.from;
    }

    if (
      this.props.location.state === undefined &&
      this.props.recipe === undefined
    ) {
      return <PageNotFound />;
    }

    if (
      this.props.location.state === undefined &&
      this.props.recipe !== undefined
    ) {
      recipe = this.props.recipe;
      from = "Recipe";
    }

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
          <div className="recipe-info">
            <div className="return-button" onClick={this.handleBackClick}>
              <FontAwesomeIcon className="arrow-left-icon" icon={faArrowLeft} />{" "}
              Return to {from}
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
          <div className="ingredients-section">
            <p className="section-header">Ingredients</p>
            {recipe.ingredientLines.map((ingredient, index) => (
              <p className="ingredients-list" key={index}>
                {ingredient}
              </p>
            ))}
          </div>
          <div className="nutrition-section">
            <div className="general-info">
              <div>
                <FontAwesomeIcon
                  className="general-info-icons"
                  icon={faFire}
                  size="4x"
                />
                <p className="general-info-label">Total Calories</p>
                <p className="general-info-stats">
                  {Math.round(recipe.calories)}
                </p>
              </div>
              <div>
                <FontAwesomeIcon
                  className="general-info-icons"
                  icon={faUtensils}
                  size="4x"
                />
                <p className="general-info-label">Servings</p>
                <p className="general-info-stats">{recipe.yield}</p>
              </div>
              <div>
                <FontAwesomeIcon
                  className="general-info-icons"
                  icon={faClock}
                  size="4x"
                />
                <p className="general-info-label">Cook Time</p>
                <p className="general-info-stats">{estimated_time}</p>
              </div>
            </div>
            <div className="nutrition-facts">
              <p className="section-header">Nutrition</p>
              <div className="nutrition-list">
                {Object.keys(recipe.totalNutrients).map((key, index) => (
                  <div key={index}>
                    {macros.includes(key) ? (
                      <div
                        className="nutrition-row"
                        style={{ backgroundColor: "#e6e6e6" }}
                      >
                        <p
                          style={{ fontWeight: "bold" }}
                          className="nutrition-row-text"
                        >
                          {recipe.totalNutrients[key].label}
                        </p>
                        <p
                          style={{ fontWeight: "bold" }}
                          className="nutrition-row-text"
                        >
                          {Math.round(
                            recipe.totalNutrients[key].quantity / recipe.yield
                          )}{" "}
                          {recipe.totalNutrients[key].unit}
                        </p>
                      </div>
                    ) : (
                      <div className="nutrition-row">
                        <p className="nutrition-row-text">
                          {recipe.totalNutrients[key].label}
                        </p>
                        <p className="nutrition-row-text">
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

const mapStateToProps = (state) => ({
  recipe: state.recipe.data,
});

const mapDispatchToProps = {
  getRecipe,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RecipeDetails)
);
