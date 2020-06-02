import React from "react";
import PropTypes from "prop-types";
import Constants from "../../constants";

const Score = (props) => {
  const calculateScore = (scoreBoard) => {
    if (scoreBoard.length > 0) {
      let total = 0;
      for (let roll = 0; roll < 20; roll = roll + 2) {
        total += scoreBoard[roll] + scoreBoard[roll + 1];
        if (scoreBoard[roll] === 10) {
          total += scoreBoard[roll + 2] + scoreBoard[roll + 3];
        } else if (scoreBoard[roll] + scoreBoard[roll + 1] === 10) {
          total += scoreBoard[roll + 2];
        }
      }

      return total;
    } else {
      return "0";
    }
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
