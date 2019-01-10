import React, { Component } from 'react';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      searchTerm: ''
    }
  }
  handleChange(event) {
    this.setState({
      searchTerm: event.target.value,
      results: []
    })
  }
  handleSubmit(event) {
    event.preventDefault();
    const url = `http://api.tvmaze.com/search/shows?q=${this.state.searchTerm}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        
      })
  }
  handleData(data) {
    const parsedData = data.map( result => {
      return{
        name: result.show.name,
        description: result.show.summary.replace(/<\/?[^>]+(>|$)/g, ""),
        image: result.show.image ? result.show.image.original : '',
        rating: result.show.rating ? result.show.rating.average : 0
      }
    })

    this.setState({
      results: parsedData
    })
  }
  render() {
    return(
      <div>
        <div className="back" onClick={this.props.toggleSearch}>Back</div>
        <div className="search-container">
          <form className="search">
            <input type="text"/>
            <button><img src="https://i.imgur.com/WX7bym4.png" alt=""/></button>
          </form>
        </div>
      </div>
    )
  }
}

export default Search;