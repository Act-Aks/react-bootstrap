import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

export default class Pokedex extends Component {
  render() {
    let status;
    if (this.props.isWinner) {
      status = <h1 className="Pokedex-winner">WINNER!!!</h1>;
    } else {
      status = <h1 className="Pokedex-loser">LOSER!</h1>;
    }
    return (
      <div className="Pokedex">
        {status}
        <h3>Total Experience: {this.props.experience}</h3>
        <div className="Pokedex-card">
          {this.props.pokemon.map((pkMon) => (
            <Pokecard
              id={pkMon.id}
              name={pkMon.name}
              type={pkMon.type}
              exp={pkMon.exp}
            />
          ))}
        </div>
      </div>
    );
  }
}
