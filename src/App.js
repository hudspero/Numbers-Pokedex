import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Search from './Search';
import Pokedex from './Pokedex';
import './App.css';

class App extends Component {

  state = {
    dex: [],
    number: []
  };

  async componentDidMount() {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    this.setState({ dex: res.data });
    const queryNumber = this.state.dex.id;
    const res2 = await axios.get(`http://numbersapi.com/${queryNumber}/trivia`);
    this.setState({ number: res2.data });
  }

  searchPokemon = async text => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);
    this.setState({ dex: res.data });
    if (this.state.dex) {
      const queryNumber = (this.state.dex.id);
      const res2 = await axios.get(`http://numbersapi.com/${queryNumber}/trivia`);
      this.setState({ number: res2.data });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Numbers Pokedex</p>
          <p><a href="http://github.com/hudspero">Github: hudspero</a></p>
        </header>

        <Fragment>
          <Search searchPokemon={this.searchPokemon} />
        </Fragment>

        <Fragment>
          <Pokedex dexEntry={this.state.dex} numberResponse={this.state.number} />
        </Fragment>

      </div>
    )
  }
}

export default App;
