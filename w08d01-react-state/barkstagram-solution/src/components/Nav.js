import React, { Component } from 'react';


class Nav extends Component {
  constructor(){
    super()
    this.state = {
      following: false
    }
  }
  toggleFollowing() {
    // ternary operator:
    const newFollowing = !this.state.following;
    this.setState({following: newFollowing})

    /*
    //even shorter with destructuring:     
    const following = !this.state.following;
    this.setState({following}); 
   */
  }
  render() {
    return (
      <div>
        <h1>@Puppies_All_Dayayay</h1>
        <div id="favorite-btn" 
          className={this.state.following ? 'unfollow' : 'follow'} 
          onClick={() => this.toggleFollowing()}
        > 
          {this.state.following ? 'unfollow' : 'follow'}
        </div>
      </div>
    );
  }
}

export default Nav;
