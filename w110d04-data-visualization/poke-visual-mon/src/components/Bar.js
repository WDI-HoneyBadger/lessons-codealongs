import React, { Component } from "react";
import ReactChartkick, { ColumnChart } from "react-chartkick";
import Chart from "chart.js";

class Bar extends Component {
  handleData(pokemonData) {
    const formattedData = {
      Grass: [["attack < 60", 0], ["attack 60 - 80", 0], ["attack 80+", 0]],
      Fire: [["attack < 60", 0], ["attack 60 - 80", 0], ["attack 80+", 0]],
      Water: [["attack < 60", 0], ["attack 60 - 80", 0], ["attack 80+", 0]]
    };

    pokemonData.forEach( pokemon => {
      if (Object.keys(formattedData).includes(pokemon.type1)){
        if (pokemon.attack < 60){
          formattedData[pokemon['type1']][0][1]++
        } else if (pokemon.attack > 60 && pokemon.attack < 80) {
          formattedData[pokemon['type1']][1][1]++
        } else {
          formattedData[pokemon['type1']][2][1]++
        }
      }
    })
    console.log(formattedData);
    return this.formatData(formattedData);
    
  }

  formatData(pokeData) {
    const fullyFormatted = Object.keys(pokeData).map(type => {
      return { name: type, data: pokeData[type] }
    })

    return fullyFormatted
}

  render() {
    return (
      <div>
        <h2>Power By Type</h2>
        <ColumnChart
          data={this.handleData(this.props.pokemon)}
          stacked={true}
        />
      </div>
    );
  }
}

export default Bar;

/* 
  {
    [
      {
        name: "Grass",
        data: [["attack < 50", 50], ["attack 50-70", 20], ["attack 70+", 40]]
      },
      {
        name: "Fire",
        data: [["attack < 50", 35], ["attack 50-70", 46], ["attack 70+", 20]]
      },
      {
        name: "Water",
        data: [["attack < 50", 12], ["attack 50-70", 25], ["attack 70+", 15]]
      },
    ]
  }
*/
