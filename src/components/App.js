import React from "react";
import Frame from "./frame";
import Constants from "../constants";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">{Constants.APP_TITLE}</header>
      <div className="scoreBoard">
        <Frame index={1} />
        <Frame index={2} />
        <Frame index={3} />
        <Frame index={4} />
        <Frame index={5} />
        <Frame index={6} />
        <Frame index={7} />
        <Frame index={8} />
        <Frame index={9} />
        <Frame index={10} />
      </div>
    </div>
  );
};

export default App;
