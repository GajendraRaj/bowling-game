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
    if (isStrike(frame.roll1)) {
      roll2Value = "";
    } else if (isSpare(frame)) {
      roll2Value = Constants.SPARE;
    } else {
      roll2Value = frame.roll2;
    }

    return roll2Value;
  };

  return (
    <div className="frame">
      <p>{`frame ${props.index}`}</p>
      <div className="pins">
        <span>{isStrike(props.roll1) ? Constants.STRIKE : props.roll1}</span>
        <span>{getRoll2Value(props)}</span>
        {(isStrike(props.roll1) || isSpare(props)) && props.index === 10 && (
          <span>{props.roll3}</span>
        )}
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
