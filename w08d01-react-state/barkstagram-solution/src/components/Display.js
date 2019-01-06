import React, { Component } from 'react';


class Display extends Component {
  render() {
    return (
      <img id="display" src={this.props.source} alt=""/>
    );
  }
}

export default Display;
