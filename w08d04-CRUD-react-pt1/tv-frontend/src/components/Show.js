import React from 'react';

const Show = (props) => {
  return(
  
    <div>
      <div className="back" onClick={() => {props.setCurrentShow(null)}}>back</div>
    </div>
  )
}

export default Show;