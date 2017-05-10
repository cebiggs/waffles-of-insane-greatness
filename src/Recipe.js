import React, { Component } from 'react';

class Recipe extends Component {
  render() {
    var recipe = this.props.recipeData.recipe;
    console.log(recipe.recipe);

    return (
      <div>
        <h2>{recipe.title}</h2>
        <div>Yield: {recipe.yield}</div>
        <div>Ingredients:</div>
        <div></div>
        <div>Directions:</div>
        <div>{recipe.directions}</div>
      </div>
    );
  }
}

export default Recipe;
