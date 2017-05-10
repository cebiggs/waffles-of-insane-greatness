import React, { Component } from 'react';
import './App.css';
import logo from '../public/waffle.ico'
import Recipe from './Recipe';
import wafflesRecipeJSON from '../WafflesRecipe.json';

class App extends Component {
  render() {
    var json = JSON.stringify(wafflesRecipeJSON);
    var data = JSON.parse(json);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>recipes</h1>
        </div>
        <Recipe recipeData={data} />
        <p className="App-intro">
        </p>
      </div>
    );
  }
}

export default App;
