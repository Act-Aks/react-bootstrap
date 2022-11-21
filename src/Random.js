import React, { Component } from "react";

export default class Random extends Component {
  state = { num: 1 };

  getRandomNumber = () => {
    let randomNum = Math.floor(Math.random() * 10);
    this.setState({ num: randomNum });
  };

  render() {
    return (
      <div>
        <h1>Number: {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h1>You Win!!!</h1>
        ) : (
          <button onClick={this.getRandomNumber}>Random Number</button>
        )}
      </div>
    );
  }
}
