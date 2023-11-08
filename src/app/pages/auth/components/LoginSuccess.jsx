import React, { useEffect } from "react";

const successMessageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  fontSize: "24px",
  backgroundColor: "#f0f0f0",
};

const messageContainerStyle = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
};

export function LoginSuccessMain() {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);

  return (
    <div style={successMessageStyle}>
      <div style={messageContainerStyle}>
        <p>Thank you for logging in successfully!</p>
        <p>Your Google login was successful, and you can now access our services.</p>
        <p>If you are not automatically redirected, you can close this window.</p>
      </div>
    </div>
  );
}
