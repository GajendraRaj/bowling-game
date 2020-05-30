import React from "react";
import PropTypes from "prop-types";

const Frame = (props) => {
  return (
    <div className="frame">
      <p>{`frame ${props.index}`}</p>
      <div className="pins">
        <span>1</span>
        <span>2</span>
      </div>
    </div>
  );
};

Frame.propTypes = {
  index: PropTypes.number.isRequired,
  roll: PropTypes.number,
};

export default Frame;
