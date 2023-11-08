import React from "react";

const Footer = (props) => {
  const footerStyle = {
    position: "fixed",
    bottom: "0",
    width: "100%",
    backgroundColor: "lightgray", // You can set your preferred background color
    textAlign: "center",
    padding: "10px",
  };


  return (
    <div>
      <footer style={footerStyle}>
        &copy; {new Date().getFullYear()} Money Management | All Rights Reserved.
      </footer>
    </div>
  );
};

export default Footer;
