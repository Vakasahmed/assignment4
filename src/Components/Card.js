import React from "react";

function Card(props) {
  return (
    <div className="main">
      <div className="cards" style={{ backgroundColor: props.code }}>
        <div className="title">
          <h4>{props.title}</h4>
          <h5 style={{color:props.color}}>{props.color}</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
