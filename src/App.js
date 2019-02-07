import React, { Component } from 'react';
import './App.css';
import Nav from './components/NavBar/NavBar';
import Wrapper from './components/Wrapper/Wrapper';
import Card from './components/Card/Card';
import cards from './cards.json';


class App extends Component {

  state = {
    cards,
    score: 0,
    topscore: 0
  }

  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topscore} />
        <Wrapper>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />))}
        </Wrapper>
      </div>

    );
  }
}

export default App;
