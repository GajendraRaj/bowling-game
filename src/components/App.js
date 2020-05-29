import React from "react";
import Frame from "./frame";
import Constants from "../constants";
import "./App.css";

const App = () => {
  const getFrames = () => {
    let frames = [];
    for (let i = 0; i < 10; i++) {
      frames.push(<Frame key={i} index={i + 1} />);
    }

    return frames;
  };

  return (
    <div className="App">
      <header className="App-header">{Constants.APP_TITLE}</header>
      <div className="scoreBoard">{getFrames()}</div>
    </div>
  );
};

export default App;
