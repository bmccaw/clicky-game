import React, { Component } from 'react';
import Nav from './components/NavBar/NavBar';
import Wrapper from './components/Wrapper/Wrapper';
import Card from './components/Card/Card';
import Hero from './components/HeroImage/HeroImage';
import cards from './cards.json';
import Styled from 'styled-components';


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
        <Hero />
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
