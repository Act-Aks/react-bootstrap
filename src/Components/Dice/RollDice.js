import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  state = {
    die_1: "one",
    die_2: "one",
    isRolling: false,
  };

  onRoll = () => {
    const new_die_1 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const new_die_2 =
      this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    this.setState({
      die_1: new_die_1,
      die_2: new_die_2,
      isRolling: true,
    });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className="RollDice">
        <div className="Die-container">
          <Die face={this.state.die_1} rolling={this.state.isRolling} />
          <Die face={this.state.die_2} rolling={this.state.isRolling} />
        </div>
        <button onClick={this.onRoll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice!!!"}
        </button>
      </div>
    );
  }
}
