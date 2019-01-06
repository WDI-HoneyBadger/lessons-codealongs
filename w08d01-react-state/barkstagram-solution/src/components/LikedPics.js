import React, { Component } from 'react';


class LikedPics extends Component {
  render() {
    return (
      <div id="likedpics">
        <p> {this.props.likedImages}</p>
      </div>
    );
  }
}

export default LikedPics;
