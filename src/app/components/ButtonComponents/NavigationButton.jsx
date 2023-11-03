// NavigationButton.js
import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const NavigationButton = ({ text, onClick, className, NavigateTo }) => {
  return (
    <Link to={NavigateTo}>
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};

// NavigationButton.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

export default NavigationButton;
