// Button.js
import React from "react";

const Button = ({ type, text, onClick,className, icon }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {icon ? icon : ""}{text}
    </button>
  );
};

export default Button;
