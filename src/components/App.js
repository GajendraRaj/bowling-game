import React from "react";
import "./App.css";
import Constants from "../constants";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">{Constants.APP_TITLE}</header>
      <div className="scoreBoard">
        <div className="frame">
          <p>frame 1</p>
        </div>
        <div className="frame">
          <p>frame 2</p>
        </div>
        <div className="frame">
          <p>frame 3</p>
        </div>
        <div className="frame">
          <p>frame 4</p>
        </div>
        <div className="frame">
          <p>frame 5</p>
        </div>
        <div className="frame">
          <p>frame 6</p>
        </div>
        <div className="frame">
          <p>frame 7</p>
        </div>
        <div className="frame">
          <p>frame 8</p>
        </div>
        <div className="frame">
          <p>frame 9</p>
        </div>
        <div className="frame">
          <p>frame 10</p>
        </div>
      </div>
    </div>
  );
};

export default App;
