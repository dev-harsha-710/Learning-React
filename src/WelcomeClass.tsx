import React, { Component } from "react";

class WelcomeClass extends Component<{ name: string }> {
  render() {
    return <h1>Welcome {this.props.name}</h1>;
  }
}
export default WelcomeClass;
