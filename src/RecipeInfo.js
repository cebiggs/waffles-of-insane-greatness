import React, { Component } from 'react';

class RecipeInfo extends Component {
  render() {
    return (
      <div>Yield: {this.props.recipe.yield}</div>
    );
  }
}

export default RecipeInfo;
