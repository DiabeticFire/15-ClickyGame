import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title">Score: {props.score}</h1>;
}

export default Title;
