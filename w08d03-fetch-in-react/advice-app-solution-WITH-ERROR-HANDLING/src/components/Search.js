import React, { Component } from 'react';

class Search extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: '',
      searchResults: []
    }
  }

  getAdviceData(searchInput){
    console.log('search input is ', searchInput)
    const url = `https://api.adviceslip.com/advice/search/${searchInput}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.slips ? 
          this.setState({searchResults: data.slips}) :
          this.setState({searchResults: 'error'})
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this)
    this.getAdviceData(this.state.searchTerm);
  }

  handleChange(event){
    console.log(event.target.value)
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearchResults(searchResponse){
    return searchResponse === 'error' ? this.renderError() : this.renderSearchResults(searchResponse)
  }

  renderSearchResults(searchResults){
    console.log('rendering search results ', searchResults);
    return searchResults.map((searchResult, index) => {
      return <p key={index}>{searchResult.advice}</p> 
    })
  }

  renderError(){
    return <p>no results found</p>
  }

  render(){
    return(
      <div>
        <form className="search" onSubmit={this.handleSubmit.bind(this)}>
          <input name="search-terms" type="text" onChange={this.handleChange.bind(this)}/>
          <button>search</button>
        </form>
        <div>
          {this.handleSearchResults(this.state.searchResults)}
        </div>
      </div>
    )
  }
}

export default Search;