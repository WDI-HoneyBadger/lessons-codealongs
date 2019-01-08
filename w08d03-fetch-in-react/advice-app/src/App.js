import React, { Component } from 'react';
import './App.css';
import RandomQuote from './components/RandomQuote';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super();
    this.state = {
      activeComponent: 'random'
    }
  }
  render() {
    return (
      <div className="app">

      </div>
    );
  }
}

export default App;
