import React, { Component } from 'react';
import ArticlesContainer from './ArticlesContainer';

class Container extends Component {
  render() {
    return (
      <div className="container">
        <h3>Container</h3>
        <ArticlesContainer/>
      </div>
    )
  }
}

export default Container;