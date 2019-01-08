import React, { Component } from 'react';



class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      searchResults: []
    }
  }

  // handles when we submit the form.
  // submits whatever is in the search box (using state)
  handleSubmit(event){
    event.preventDefault();

    const url = `https://api.adviceslip.com/advice/search/${this.state.searchTerm}`
    fetch(url)
      .then( response => response.json())
      .then( data => {
        this.setState({
          searchResults: data.slips
        })
      })
      .catch( error => {
        console.log(error);
      })
  }

  // updates the state as we type
  handleChange(event){
    this.setState({
      searchTerm: event.target.value
    })
  }

  // renders the state that stores the results from the API
  renderSearchResults(searchResponse) {
    return searchResponse.map((response, index) => {
      return <p key={index}>{ response.advice }</p>
    })
  } 

  render(){
    return(
      <div>
        <form className="search" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="search-terms" onChange={this.handleChange.bind(this)}/>
          <button>search</button>
        </form>
        <div className="search-results">
          {this.renderSearchResults(this.state.searchResults)}
        </div>
      </div>
    )
  }
}

export default Search;