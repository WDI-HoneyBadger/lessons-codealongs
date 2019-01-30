import React, { Component } from 'react';

import Pie from './components/Pie';
import Bar from './components/Bar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: []
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:3000/pokemons')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({
          pokemon: data
        })
      })
  }
  render() {
    return (
      <div className="App">
        <h1>Poke-visual-mon</h1>
        <Pie pokemon={this.state.pokemon}/>
        <Bar pokemon={this.state.pokemon}/>
      </div>
    );
  }
}

export default App;
