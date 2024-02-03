import React, { Component } from "react";

export class EventHandling extends Component {
  clickHandler() {
    console.log("Someone clicked the button");
  }

  render() {
    return (
      <div>
        <h2>Click the button below:</h2>
        <button onClick={this.clickHandler.bind(this)}>Click here</button>
      </div>
    );
  }
}

export default EventHandling;
