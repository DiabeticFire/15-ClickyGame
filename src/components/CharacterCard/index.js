import React from "react";
import "./style.css";

const CharacterCard = props => {
  return (
    <div className="card" onClick={() => props.handleClick(props.name)}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <strong>Name:</strong> {props.name}
      </div>
    </div>
  );
};

export default CharacterCard;
