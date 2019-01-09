import React, { Component } from 'react';
import './App.css';
import Tile from './components/Tile'

class App extends Component {
  constructor(){
    super();
    this.state = {
      shows: [],
      activeShow: null,
      modal: false
    }
  } 

  componentDidMount(){
    // fetch all the data from our API
    // update our state "shows" with that data
    console.log('fetching data');
    fetch('http://localhost:3000/shows')
      .then( response => response.json())
      .then( data => {
        console.log(data);
        this.setState({
          shows: data
        })
      })
      .catch( error => {
        console.log(error)
      })
  }

  renderTiles(allShows) {
    // map through the state "shows" 
    // and make a tile for each TV show
    return allShows.map((show) => {
      return <Tile key={show.id} name={show.name} image={show.image}/>
    })
  }

  render() {
    return (
      <div>
        <div className="shows">
          {this.renderTiles(this.state.shows)}
        </div>
      </div>
    );
  }
}

export default App;
