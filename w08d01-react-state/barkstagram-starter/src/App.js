import React, { Component } from 'react';
import './App.css';

// import Nav from './components/Nav';
import ImageContainer from './components/ImageContainer';
import LikedPics from './components/LikedPics';
import Display from './components/Display';
import PupData from './data/coolPics.js';
import Nav from './components/Nav';



class App extends Component {
  constructor() {
    super();
    this.state = {
      images: PupData,
      displayedImage: PupData[0].source
    }
  }
  updateDisplay(imageIndex){
    console.log('hovering!!!!!');
    console.log(imageIndex);
    this.setState({
      displayedImage: PupData[imageIndex].source
    })
    // change the state for displayedImage
  }
  render() {
    return (
      <div className="App">
        <Nav/>
        <Display source={this.state.displayedImage}/>
        <LikedPics/>
        <ImageContainer images={this.state.images} updateDisplay={this.updateDisplay.bind(this)}/>
      </div>
    );
  }
}

export default App;
