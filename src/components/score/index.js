import React from "react";
import PropTypes from "prop-types";
import Constants from "../../constants";

const Score = (props) => {
  const calculateScore = (scoreBoard) => {
    if (scoreBoard.length > 0) {
      return scoreBoard.reduce((total, currentValue) => {
        return total + currentValue;
      });
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
