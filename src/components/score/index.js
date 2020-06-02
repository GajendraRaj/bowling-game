import React from "react";
import PropTypes from "prop-types";
import Constants from "../../constants";

const Score = (props) => {
  const isSpare = (roll1, roll2) => {
    return roll1 + roll2 === 10;
  };

  const isStrike = (roll1) => {
    return roll1 === 10;
  };

  const calculateScore = (scoreBoard) => {
    let total = 0;
    if (scoreBoard.length > 0) {
      let frameIndex = 1;
      for (let roll = 0; roll < 20; roll = roll + 2) {
        const roll1 = scoreBoard[roll];
        const roll2 = scoreBoard[roll + 1];
        total += roll1 + roll2;

        if (isStrike(roll1)) {
          if (frameIndex === 10) {
            total += scoreBoard[roll + 2];
          } else {
            total += scoreBoard[roll + 2];
            if (isStrike(scoreBoard[roll + 2])) {
              total += scoreBoard[roll + 4];
            } else {
              total += scoreBoard[roll + 3];
            }
          }
        } else if (isSpare(roll1, roll2)) {
          total += scoreBoard[roll + 2];
        }

        frameIndex++;
      }
    }

    return total;
  };

  return (
    <div className="total">
      <span>{Constants.TOTAL}: </span>
      <span>{calculateScore(props.scoreBoard)}</span>
    </div>
  );
};

Score.propTypes = {
  scoreBoard: PropTypes.array,
};

export default Score;
