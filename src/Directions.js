import React, { Component } from 'react';

class Directions extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.heading}</h4>
        <div>{this.props.directions}</div>
      </div>
    );
  }
}

export default Directions;
