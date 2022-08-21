import React, { Component } from "react";

class Exercise1 extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
    };
  }

  changeState = (e) => {
    let target = e.target;
    if (target.id === "name-input") {
      let name = target.value;
      this.setState({ name: name });
    } else {
      let age = target.value;
      this.setState({ age: age });
    }
  };

  alertText = () => {
    alert(`Come in ${this.state.name}, you’re ${this.state.age}`);
  };

  render() {
    return (
      <div>
        <input
          id="name-input"
          value={this.state.name}
          onChange={this.changeState}
        />
        <input
          id="age-input"
          value={this.state.age}
          onChange={this.changeState}
        />
        <button onClick={this.alertText}>Go to Bar</button>
      </div>
    );
  }
}

export default Exercise1;
