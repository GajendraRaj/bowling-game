import React from "react";
import PropTypes from "prop-types";
import Constants from "../../constants";

const Score = (props) => {
  return (
    <div className="total">
      <span>{Constants.TOTAL}: </span>
      <span>{props.scoreBoard.length > 0 ? props.scoreBoard : "0"}</span>
    </div>
  );
};

Score.propTypes = {
  scoreBoard: PropTypes.array,
};

export default Score;
