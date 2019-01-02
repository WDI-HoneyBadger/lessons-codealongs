import React, { Component } from 'react';
import Greeting  from './components/Greeting';
import Container from './components/Container';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting/>
        <Container/>
      </div>
    );
  }
}

export default App;
