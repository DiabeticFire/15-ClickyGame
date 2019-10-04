import React, { Component } from "react";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";

class App extends Component {
  state = {
    characters,
    clicked: [],
    points: 0
  };

  handleClick = name => {
    const scramble = () => {};

    const restart = () => {
      this.setState({ clicked: [], points: 0 });
      scramble();
    };

    if (this.state.clicked.includes(name)) {
      alert("You Lost!");
      restart();
    } else {
      this.setState({ clicked: [...this.state.clicked, name] });
      this.setState({ points: this.state.points + 1 }, () => {
        if (this.state.points === 12) {
          alert("You Won!");
          restart();
        } else scramble();
      });
    }
  };

  render = () => {
    return (
      <Wrapper>
        <Title score={this.state.score}></Title>
        {this.state.characters.map(character => (
          <CharacterCard
            name={character.name}
            image={character.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  };
}

export default App;
