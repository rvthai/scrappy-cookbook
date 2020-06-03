import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getRecipe } from "../actions";

class RecipeDetails extends Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  handleClick = () => {
    this.props.history.push("/recipes");
  };

  render() {
    if (this.props.recipe.isLoading) {
      return <div>loading</div>;
    }

    return (
      <div>
        <button onClick={this.handleClick}>Back</button>
        <h2>{this.props.recipe.data.label}</h2>
        <img src={this.props.recipe.data.image} alt="alt" />
        <p>Source: {this.props.recipe.data.source}</p>
        <p>URL: {this.props.recipe.data.url}</p>
        <p>Servings: {this.props.recipe.data.yield}</p>
        <p>Diet Labels:</p>
        {this.props.recipe.data.dietLabels !== undefined
          ? this.props.recipe.data.dietLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))
          : "None "}
        <p>Health Labels:</p>
        {this.props.recipe.data.healthLabels !== undefined
          ? this.props.recipe.data.healthLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))
          : "None "}
        <p>Ingredients: </p>
        {this.props.recipe.data.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        <p>Time to cook: {this.props.recipe.data.totalTime} min</p>
        <p>Total Calories: {Math.round(this.props.recipe.data.calories)}</p>
        <h3>Macros Per Serving...</h3>
        <p>
          Calories:{" "}
          {Math.round(
            this.props.recipe.data.totalNutrients.ENERC_KCAL.quantity /
              this.props.recipe.data.yield
          )}
        </p>
        <p>
          {this.props.recipe.data.totalNutrients.CHOCDF.label}{" "}
          {Math.round(
            this.props.recipe.data.totalNutrients.CHOCDF.quantity /
              this.props.recipe.data.yield
          )}
          {this.props.recipe.data.totalNutrients.FAT.unit}
        </p>
        <p>
          {this.props.recipe.data.totalNutrients.FAT.label}{" "}
          {Math.round(
            this.props.recipe.data.totalNutrients.FAT.quantity /
              this.props.recipe.data.yield
          )}
          {this.props.recipe.data.totalNutrients.FAT.unit}
        </p>
        <p>
          {this.props.recipe.data.totalNutrients.PROCNT.label}{" "}
          {Math.round(
            this.props.recipe.data.totalNutrients.PROCNT.quantity /
              this.props.recipe.data.yield
          )}
          {this.props.recipe.data.totalNutrients.FAT.unit}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipe: state.recipe,
});

const mapDispatchToProps = {
  getRecipe,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RecipeDetails)
);
