import React, { useState } from "react";
import Frame from "./frame";
import Constants from "../constants";
import "./App.css";

const App = () => {
  const [scoreBoard, setScoreBoard] = useState([]);

  const getFrames = () => {
    let frames = [];
    for (let i = 0; i < 10; i++) {
      frames.push(<Frame key={i} index={i + 1} roll={scoreBoard.length} />);
    }

    return frames;
  };

  const generateRollsScore = () => {
    let rollsScore = [];
    for (let i = 0; i < 20; i++) {
      rollsScore.push(Math.random());
    }

    setScoreBoard(rollsScore);
  };

  return (
    <div className="App">
      <header className="App-header">{Constants.APP_TITLE}</header>
      <button onClick={generateRollsScore}>{Constants.START_BUTTON}</button>
      <div className="scoreBoard">{getFrames()}</div>
    </div>
  );
};

export default App;
