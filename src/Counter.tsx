import React, { Component } from "react";

class Counter extends Component<{}, { count: number }> {
  constructor(props: any) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // Update the state by incrementing the count by 1
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  incrementByFive = () => {
    // Update the state by incrementing the count by 5
    this.setState((prevState) => ({
      count: prevState.count + 5,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {/* Call the methods using this.increment and this.incrementByFive */}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementByFive}>Increment 5</button>
      </div>
    );
  }
}

export default Counter;
