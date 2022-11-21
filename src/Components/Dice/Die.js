import React, { Component } from "react";
import "./Die.css";

export default class Die extends Component {
  render() {
    return (
      <i
        class={`Die fas fa-dice-${this.props.face} ${
          this.props.rolling && "Die-rolling"
        }`}
      />
    );
  }
}
