import React, { Component } from "react";

interface States {
  email: string;
  address: string;
  topic: string;
}
export class FormHandling extends Component<{}, States> {
  constructor({}) {
    super({});
    this.state = {
      email: "",
      address: "",
      topic: "",
    };
  }

  render() {
    return (
      <div>
        <form
          onSubmit={(event) => {
            alert(
              `${this.state.email},${this.state.address},${this.state.topic}`
            );
          }}
        >
          <input
            type="text"
            value={this.state.email}
            onChange={(event) => this.setState({ email: event.target.value })}
          />
          <textarea
            value={this.state.address}
            onChange={(event) => this.setState({ address: event.target.value })}
          />
          <select
            value={this.state.topic}
            onChange={(event) => this.setState({ topic: event.target.value })}
          >
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormHandling;
