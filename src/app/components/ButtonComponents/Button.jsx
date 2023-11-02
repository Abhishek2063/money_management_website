// Button.js
import React from "react";

const Button = ({ type, text, onClick,className }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
