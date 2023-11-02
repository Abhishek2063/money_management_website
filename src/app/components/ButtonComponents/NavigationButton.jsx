// NavigationButton.js
import React from "react";
// import PropTypes from "prop-types";

const NavigationButton = ({ text, onClick , className}) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

// NavigationButton.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default NavigationButton;
