import React, {Component} from 'react';
import Nav from "./components/Nav/";
import Header from "./components/Header";
import characters from "./characters.json";
import CharacterCard from './components/CharacterCard';
import Wrapper from "./components/Wrapper";


function shuffleCharacters(array) {
  for (let i = array.length - 1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {

  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id =>{
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: ""
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore});
    }else if (newScore == 12) {
      this.setState({ rightWrong: "You Won!"});
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Try Again!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacters(characters);
    this.setState({ characters: shuffledCharacters });
  };

  render() {
  return (

  <Wrapper>
    <Nav 
      title="One Piece Clicky Game"
      score={this.state.currentScore}
      topScore={this.state.topScore}
      rightWrong={this.state.rightWrong}
    />

      <Header>
       
      </Header>

        {this.state.characters.map(character => (
         <CharacterCard 
          key={character.id}
          id={character.id}
          image={character.image} 
          handleClick={this.handleClick}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          handleShuffle={this.handleShuffle}
          />
        ))}
  </Wrapper>
    );
  }
}
export default App;
