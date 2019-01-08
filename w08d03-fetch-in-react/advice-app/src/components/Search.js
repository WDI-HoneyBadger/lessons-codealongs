import React, { Component } from 'react';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: '',
      searchResults: []
    }
  }

  getAdviceData(searchInput) {
    // fetches data from the API, searching by whatever is in the input
  }

  handleSubmit(event){
    // handles when we submit the form.
    // submits whatever is in the search box (using state)
  }

  handleChange(event){
    // updates the state as we type
  }

  renderSearchResults(searchResponse) {
    // renders results from the API
  }

  render(){
    return(
      <div>
        <form className="search">
          <input type="text" name="search-terms"/>
          <button>search</button>
        </form>
      </div>
    )
  }
}

export default Search;