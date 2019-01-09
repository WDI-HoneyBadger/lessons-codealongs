import React from 'react';

const Tile = (props) => {
  return(
    <div className="tile">
      <img src={props.image} alt=""/>
      <h2>{props.name}</h2>
    </div>
  )
}

export default Tile;