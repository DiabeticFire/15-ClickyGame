import React from "react";
import "./style.css";

const Title = (props) => {
  console.log(props);

  return <h1 className="title">Score: {props.score}</h1>;
};

export default Title;
