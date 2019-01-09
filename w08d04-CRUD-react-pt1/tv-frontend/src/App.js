import React, { Component } from 'react';
import './App.css';
import Tile from './components/Tile';
import ShowForm from './components/ShowForm';

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

  createNewShow(show) {
    /* 
      posts data to the database, the database
      sends that same data back.

      add that data to the 'shows' state
    */
   console.log('updating show');
   const url = 'http://localhost:3000/shows'
   fetch(url, {
       method: 'POST',
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(show)
     })
     .then(response => response.json())
     .then(data => {
       console.log('DATA')
       console.log(data);
       const updatedShows = this.state.shows.concat([data]);
       console.log(updatedShows)
       this.setState({
         shows: updatedShows
       })
     })
     .catch(error => {
       console.log(error);
     })
  }

  renderTiles(allShows) {
    // map through the state "shows" 
    // and make a tile for each TV show
    return allShows.map((show) => {
      return (
        <Tile key={show.id}
          show={show}
          // name={show.name} 
          // image={show.image}
          setCurrentShow={this.setCurrentShow.bind(this)}/>
      )
    })
  }

  setCurrentShow(show) {
    console.log(show);
    this.setState({
      activeShow: show
    })
    // when given a show, set state 'activeShow' to that show
  }

  toggleModal(){
    console.log('toggle modal');

    this.setState({
      activeShow: null,
      modal: !this.state.modal
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal.bind(this)}>add new show</button>
        {this.state.modal ? <ShowForm createNewShow={this.createNewShow.bind(this)}/> : ''}
        <div className="shows">
        {/* if this.state.currentShow has value
          render the show component that in there
        */}
          {this.renderTiles(this.state.shows)}
        </div>
      </div>
    );
  }
}

export default App;
