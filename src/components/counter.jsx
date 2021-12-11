import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    count: 0,
    foo: 72,
  };
  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? `Zero` : count;
  }

  /*formatCount() {
    const { count, foo } = this.state;
    return count === 0 ? `Zero` : foo;
  }*/

  /*formatCount() {
    const count = this.state.count;
    return count === 0 ? `Zero` : count;
  }*/
}

export default Counter;
