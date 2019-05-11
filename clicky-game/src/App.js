import React, {Component} from 'react';
import Nav from "./components/Nav/"
import Jumbotron from "../src/components/Jumbotron"
import characters from "./characters.json"
import CharacterCard from './components/CharacterCard';
import Wrapper from "./components/Wrapper"

class App extends Component {

  state = {
  characters
  };

  render() {
  return (

    <Wrapper>
          <Nav />
          <Jumbotron />
      {this.state.characters.map(character => (
      <CharacterCard 
       id={character.id}
       key={character.id}
       name={character.name}
       image={character.image}
       occupation={character.occupation}
       crew={character.crew}/>
      ))}
    </Wrapper>
    );
  }
}
export default App;
