import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { name: "Fikri", age: 26 },
      { name: "Gita", age: 25 },
    ],
    otherState:'some other value'
  };
  switchNameHandler = ()=>{
    // console.log('Was Clicked')
    // Don't do this this.state.persons[0].name = 'Muhamad Fikri';
    this.setState({
      persons:[
      { name: "Muhamad Fikri", age: 26 },
      { name: "Gita", age: 25 },
    ]})
  }
  render() {
    return (
      <div className="App">
          <h1>Hi, I'am React App</h1>
          <p>it's realy working</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
        </div>
    );
  }
}
export default App;
