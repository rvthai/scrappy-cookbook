import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { getRecipe } from "../actions";

// Components
import Bookmark from "./Bookmark";

class RecipeDetails extends Component {
  componentDidMount() {
    this.props.getRecipe(this.props.match.params.id);
  }

  handleBack = () => {
    this.props.history.push("/recipes");
  };

  render() {
    if (this.props.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Bookmark
          uri={this.props.recipe.uri}
          label={this.props.recipe.label}
          image={this.props.recipe.image}
          calories={this.props.recipe.calories}
          source={this.props.recipe.source}
        />
        <button onClick={this.handleBack}>Back</button>
        <h2>{this.props.recipe.label}</h2>
        <img src={this.props.recipe.image} alt="recipe pic" />
        <p>Source: {this.props.recipe.source}</p>
        <p>URL: {this.props.recipe.url}</p>
        <p>Servings: {this.props.recipe.yield}</p>
        <p>Diet Labels:</p>
        {this.props.recipe.dietLabels !== undefined
          ? this.props.recipe.dietLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))
          : "None "}
        <p>Health Labels:</p>
        {this.props.recipe.healthLabels !== undefined
          ? this.props.recipe.healthLabels.map((label, index) => (
              <li key={index}>{label}</li>
            ))
          : "None "}
        <p>Ingredients: </p>
        {this.props.recipe.ingredientLines.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
        <p>Time to cook: {this.props.recipe.totalTime} min</p>
        <p>Total Calories: {Math.round(this.props.recipe.calories)}</p>
        <h3>Macros Per Serving...</h3>
        <p>
          Calories:
          {Math.round(
            this.props.recipe.totalNutrients.ENERC_KCAL.quantity /
              this.props.recipe.yield
          )}
        </p>
        <p>
          {this.props.recipe.totalNutrients.CHOCDF.label}
          {Math.round(
            this.props.recipe.totalNutrients.CHOCDF.quantity /
              this.props.recipe.yield
          )}
          {this.props.recipe.totalNutrients.FAT.unit}
        </p>
        <p>
          {this.props.recipe.totalNutrients.FAT.label}
          {Math.round(
            this.props.recipe.totalNutrients.FAT.quantity /
              this.props.recipe.yield
          )}
          {this.props.recipe.totalNutrients.FAT.unit}
        </p>
        <p>
          {this.props.recipe.totalNutrients.PROCNT.label}
          {Math.round(
            this.props.recipe.totalNutrients.PROCNT.quantity /
              this.props.recipe.yield
          )}
          {this.props.recipe.totalNutrients.FAT.unit}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  recipe: state.recipe.data,
  loading: state.recipe.loading,
});

const mapDispatchToProps = {
  getRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
