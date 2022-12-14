import React, { Component } from "react";
import "./Pokecard.css";

const POKECARD_IMG_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";
// const POKECARD_IMG_API = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon`;
const padToThreeDigit = (number) =>
  number <= 999 ? `00${number}`.slice(-3) : number;

export default class Pokecard extends Component {
  render() {
    let imgSrc = `${POKECARD_IMG_API}/${padToThreeDigit(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-img">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">Exp: {this.props.exp}</div>
      </div>
    );
  }
}
