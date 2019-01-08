import React, { Component } from 'react';

class RandomQuote extends Component {
  constructor(){
    super();
    this.state = {
      quote: ''
    }
  }
  componentWillMount(){
    console.log('fetching data');
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          quote: data.slip.advice
        })
        console.log(this.state.quote)
      })
  }
  render() {
    return(
      <div className="randomQuote">
        <span>{this.state.quote}</span>
      </div>
    )
  }
}

export default RandomQuote;