import React, { Component } from 'react';
import './App.css';
import RandomQuote from './components/RandomQuote';
import Search from './components/Search';

class App extends Component {
  constructor(){
    super()
    this.state = {
      activeComponent: 'random'
    }
  }
  toggleActiveComponent(){
    const activeComponent = this.state.activeComponent === 'random' ? 'search' : 'random';
    this.setState({activeComponent})
  }
  render(){
    return (
      <div className="app">
        <button className="toggle-btn" onClick={this.toggleActiveComponent.bind(this)}>{this.state.activeComponent === 'random' ? 'search' : 'random'}</button>
        {this.state.activeComponent === 'random' ? <RandomQuote/> : <Search/>}
      </div>
    );
  }
}

export default App;
