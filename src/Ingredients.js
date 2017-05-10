import React, { Component } from 'react';

class Ingredients extends Component {
  render() {
    var ingredients = this.props.ingredients;

    return (
      <div>
        <h4>{this.props.heading}</h4>
        <div>
        {
          ingredients.map((ingredient, index) => {
            return <div key={index}>{ingredient.quantity} {ingredient.unit} {ingredient.name}</div>
          })
        }
        </div>
      </div>
    );
  }
}

export default Ingredients;
