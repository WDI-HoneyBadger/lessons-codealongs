import React, { Component } from 'react';
import Image from './Image'


class ImageContainer extends Component {
  renderImages(arr) {
    const images = arr.map((image, index) => {
      return ( 
        <div 
          key={index} 
          onMouseOver={ () => { this.props.updateDisplay(index) } }
          onDoubleClick={ () => { this.props.addLikedImage(image.title) } }
          >
          <Image source={image.source} title={image.title}/>
        </div>
      )
    });

    return images
  }
  render() {
    return (
      <div id="image-cont">
        {this.renderImages(this.props.images)}
      </div>
    );
  }
}

export default ImageContainer;
