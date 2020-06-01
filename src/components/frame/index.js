import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import Constants from "../../constants";

const Frame = (props) => {
  const isStrike = (roll) => {
    return roll === 10;
  };

  return (
    <div className="frame">
      <p>{`frame ${props.index}`}</p>
      <div className="pins">
        <span>{isStrike(props.roll1) ? Constants.STRIKE : props.roll1}</span>
        <span>
          {isStrike(props.roll1)
            ? ""
            : props.roll1 + props.roll2 === 10
            ? "/"
            : props.roll2}
        </span>
      </div>
    </div>
  );
};

Frame.propTypes = {
  index: PropTypes.number.isRequired,
  roll1: PropTypes.number,
  roll2: PropTypes.number,
};

export default Frame;
