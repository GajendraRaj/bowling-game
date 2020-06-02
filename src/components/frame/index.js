import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import Constants from "../../constants";

const Frame = (props) => {
  const isStrike = (roll) => {
    return roll === 10;
  };

  const isSpare = (frame) => {
    return frame.roll1 + frame.roll2 === 10;
  };

  const getRoll2Value = (frame) => {
    let roll2Value;
    if (frame.index !== 10) {
      if (isStrike(frame.roll1)) {
        roll2Value = "";
      } else if (isSpare(frame)) {
        roll2Value = Constants.SPARE;
      } else {
        roll2Value = frame.roll2;
      }
    } else {
      if (isStrike(frame.roll1) && isStrike(frame.roll2)) {
        roll2Value = "X";
      } else if (isSpare(frame) && !isStrike(frame.roll1)) {
        roll2Value = Constants.SPARE;
      } else {
        roll2Value = frame.roll2;
      }
    }

    return roll2Value;
  };

  const getRoll3Value = (frame) => {
    let roll3Value;
    if ((isStrike(frame.roll1) || isSpare(frame)) && frame.index === 10) {
      roll3Value = <span>{frame.roll3}</span>;
    }
    return roll3Value;
  };

  return (
    <div className="frame">
      <p>{`frame ${props.index}`}</p>
      <div className="pins">
        <span>{isStrike(props.roll1) ? Constants.STRIKE : props.roll1}</span>
        <span>{getRoll2Value(props)}</span>
        {getRoll3Value(props)}
      </div>
    </div>
  );
};

Frame.propTypes = {
  index: PropTypes.number.isRequired,
  roll1: PropTypes.number,
  roll2: PropTypes.number,
  roll3: PropTypes.number,
};

export default Frame;
