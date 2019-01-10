import React, { Component } from 'react';
import './App.css';
import Tile from './components/Tile';
import ShowForm from './components/ShowForm';
import Show from './components/Show';

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
         shows: updatedShows,
         modal: false
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
    console.log('setting show');
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
        <header>My Shows</header>
        <div className="action-buttons">
          <div onClick={this.toggleModal.bind(this)}>+</div>
        </div>
        {this.state.modal ? 
          <ShowForm createNewShow={this.createNewShow.bind(this)} toggleModal={this.toggleModal.bind(this)}/> : 
        ''}
        <div className="shows">
        {/* if this.state.currentShow has value
          render the show component that in there
        */}
          {this.state.activeShow ? 
            <Show 
              setCurrentShow={this.setCurrentShow.bind(this)} 
              activeShow={this.state.activeShow}
            /> : 
            this.renderTiles(this.state.shows)}
        </div>
      </div>
    );
  }
}

export default App;
