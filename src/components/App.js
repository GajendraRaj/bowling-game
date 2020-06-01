import React, { useState } from "react";
import Frame from "./frame";
import Constants from "../constants";
import "./App.css";

const App = () => {
  const [scoreBoard, setScoreBoard] = useState([]);

  const getFrames = () => {
    let frames = [];
    let frameIndex = 1;

    for (let i = 0; i < 20; i = i + 2) {
      if (frameIndex === 10) {
        frames.push(
          <Frame
            key={i}
            index={frameIndex}
            roll1={scoreBoard[i]}
            roll2={scoreBoard[i + 1]}
            roll3={scoreBoard[i + 2]}
          />
        );
      } else {
        frames.push(
          <Frame
            key={i}
            index={frameIndex}
            roll1={scoreBoard[i]}
            roll2={scoreBoard[i + 1]}
          />
        );
      }
      frameIndex++;
    }

    return frames;
  };

  const generateRandomValue = (max) => {
    return Math.round(Math.random() * max);
  };

  const generateRollsScore = () => {
    let rollsScore = [];
    for (let i = 0; i < 10; i++) {
      const roll1 = generateRandomValue(10);
      const roll2 = generateRandomValue(10 - roll1);

      if (i === 9 && roll1 === 10) {
        rollsScore.push(roll1);
        const frame10roll = generateRandomValue(10);
        rollsScore.push(frame10roll);

        if (frame10roll === 10) {
          rollsScore.push(generateRandomValue(10));
        } else {
          rollsScore.push(generateRandomValue(10 - frame10roll));
        }
      } else if (i === 9 && roll1 + roll2 === 10) {
        rollsScore.push(roll1);
        rollsScore.push(roll2);
        rollsScore.push(generateRandomValue(10));
      } else {
        rollsScore.push(roll1);
        rollsScore.push(roll2);
      }
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
