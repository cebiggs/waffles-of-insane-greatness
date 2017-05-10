import React, { Component } from 'react';
import RecipeInfo from './RecipeInfo.js';
import Ingredients from './Ingredients.js';
import Directions from './Directions.js';

class Recipe extends Component {
  render() {
    var recipe = this.props.recipeData.recipe;

    return (
      <div>
        <h2>{recipe.title}</h2>
        <RecipeInfo recipe={recipe}/>
        <Ingredients heading={"Ingredients"} ingredients={recipe.ingredients}/>
        <Directions heading={"Directions"} directions={recipe.directions}/>
      </div>
    );
  }
}

export default Recipe;
