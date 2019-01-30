import React, { Component } from 'react';
import ReactChartkick, { PieChart } from 'react-chartkick';
import Chart from 'chart.js';

class Pie extends Component {
  handleData(pokeData) {

      const cache = {};

      pokeData.forEach( pokemon => {
        if(!cache[pokemon['type1']]){
          cache[pokemon['type1']] = 1;
        } else {
          cache[pokemon['type1']] +=1;
        }
      })

      console.log(cache);
      return this.formatData(cache);

      // const sortedPokemon = pokeData.reduce((cache, pokemon) => {
      //   cache[pokemon['type1']] = cache[pokemon['type1']] ? cache[pokemon['type1']] + 1 : 1
      //   return cache
      // }, {})

      // console.log(sortedPokemon)
  }

  formatData(sortedData) {
    console.log(Object.keys(sortedData));
    const pokeArrOfArrs = Object.keys(sortedData).map( type => {
      // return [type, sortedData[type]]
      console.log(sortedData[type]);
      return [ type, sortedData[type] ]
    })

    console.log(pokeArrOfArrs);
    return pokeArrOfArrs;
  }

  render() {
    return (
      <div>
        <h2>Pokemon By Type</h2>
        <PieChart data={this.handleData(this.props.pokemon)}/>
      </div>
    )
  }
}

export default Pie;