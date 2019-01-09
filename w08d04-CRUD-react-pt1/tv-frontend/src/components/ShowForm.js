import React, { Component } from 'react';

class ShowForm extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      image: '',
      description: '',
      rating: ''
    }
  }
  handleChange(event){
    const currentInput = event.target.name;
    const newValue = event.target.value;
    console.log('current input: ', currentInput);
    console.log('newValue: ', newValue);

    this.setState({
      [currentInput]: newValue
    }, function(){
      console.log(this.state);
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createNewShow(this.state)
  }
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>name:</label><input type="text" name="name" onChange={this.handleChange.bind(this)}/><br/>
          <label>description:</label><input type="text" name="description" onChange={this.handleChange.bind(this)}/><br/>
          <label>image:</label><input type="text" name="image" onChange={this.handleChange.bind(this)}/><br/>
          <label>rating:</label><input type="number" name="rating" onChange={this.handleChange.bind(this)}/><br/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default ShowForm;