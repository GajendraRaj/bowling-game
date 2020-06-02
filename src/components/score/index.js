import React from "react";
import PropTypes from "prop-types";

const Score = (props) => {
  return (
    <div className="total">
      <span>Total :</span>
      <span>{props.scoreBoard.length > 0 ? props.scoreBoard : "0"}</span>
    </div>
  );
};

Score.propTypes = {
  scoreBoard: PropTypes.array,
};

export default Score;
