import React from 'react';


const Image = (props) => {
    return (
      <div className="pic-cont">
        <img className="pic" src={props.source} alt=""/>
        <p>{props.title}</p>
      </div>
    );
}

export default Image;
