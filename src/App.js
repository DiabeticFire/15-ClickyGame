import React, { Component } from "react";
import characters from "./characters.json";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";

class App extends Component {
  state = {
    characters,
    mutableCharacters: characters,
    clicked: [],
    points: 0,
    highscore: 0
  };

  handleClick = (name) => {
    const scramble = () => {
      this.setState({ mutableCharacters: this.state.mutableCharacters.sort(() => Math.random() - 0.5) });

      // for (let i = array.length - 1; i > 0; i--) {
      //   let j = Math.floor(Math.random() * (i + 1));
      //   [array[i], array[j]] = [array[j], array[i]];
      //   };
      // }
    };
    const restart = () => {
      if (this.state.points > this.state.highscore) this.setState({ highscore: this.state.points });
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
        <Title score={this.state.points}></Title>
        {this.state.mutableCharacters.map((character) => (
          <CharacterCard name={character.name} image={character.image} handleClick={this.handleClick} />
        ))}
      </Wrapper>
    );
  };
}

export default App;
