import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Fikri", age: 26 },
      { name: "Gita", age: 25 },
    ],
  };
  return (
    <div className="App">
      <h1>Hi, I'am React App</h1>
      <p>it's realy working</p>
      <button>Switch Name</button>
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
      <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
      />
    </div>
  );
}

export default App;
