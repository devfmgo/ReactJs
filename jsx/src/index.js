// import React and ReactDOM lirary
import React from "react";
import ReactDOM from "react-dom";

// Crate a react component
const App = () => {
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        Submit
      </button>
    </div>
  );
};
// Take the react component adn show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
