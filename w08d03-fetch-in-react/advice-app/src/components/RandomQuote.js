import React, { Component } from 'react';

class RandomQuote extends Component {
  constructor(){
    super();
    this.state = {
      advice: ''
    }
  }
  componentWillMount(){
    const url = 'https://api.adviceslip.com/advice'
    fetch(url)
      .then( response => response.json())
      .then( data => {
        console.log(data)
      })
      .catch( error => {
        console.log(error)
      })
  }
  // your methods
  render(){
    return(
      <div>
        RandomQuote placeholder
      </div>
    )
  }
}

export default RandomQuote;