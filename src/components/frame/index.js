import React from "react";
import PropTypes from "prop-types";

const Frame = (props) => {
  return (
    <div className="frame">
      <p>{`frame ${props.index}`}</p>
      <div className="pins">
        <span>{props.roll1}</span>
        <span>{props.roll2}</span>
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
