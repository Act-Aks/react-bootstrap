import React, { Component } from "react";
import Pokedex from "./Pokedex";

export default class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "Charmander", type: "fire", exp: 62 },
      { id: 7, name: "Squirtle", type: "water", exp: 63 },
      { id: 11, name: "Metapod", type: "bug", exp: 72 },
      { id: 12, name: "Butterfree", type: "flying", exp: 178 },
      { id: 25, name: "Pikachu", type: "electric", exp: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", exp: 95 },
      { id: 94, name: "Gengar", type: "poison", exp: 225 },
      { id: 133, name: "Eevee", type: "normal", exp: 65 },
    ],
  };
  render() {
    let topHand = [];
    let bottomHand = [...this.props.pokemon];
    while (topHand.length < bottomHand.length) {
      let randomIndex = Math.floor(Math.random() * bottomHand.length);
      let randomPokemon = bottomHand.splice(randomIndex, 1)[0];
      topHand.push(randomPokemon);
    }
    let topTotalExp = topHand.reduce((exp, pokemon) => exp + pokemon.exp, 0);
    let bottomTotalExp = bottomHand.reduce(
      (exp, pokemon) => exp + pokemon.exp,
      0
    );
    return (
      <div>
        <Pokedex
          pokemon={topHand}
          experience={topTotalExp}
          isWinner={topTotalExp > bottomTotalExp}
        />
        <Pokedex
          pokemon={bottomHand}
          experience={bottomTotalExp}
          isWinner={bottomTotalExp > topTotalExp}
        />
      </div>
    );
  }
}
