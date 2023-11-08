import React from 'react';

const errorContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  fontSize: '24px',
  backgroundColor: '#f0f0f0',
};

const errorMessageStyle = {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
};

const LoginErrorMain = () => {
  return (
    <div style={errorContainerStyle}>
      <div style={errorMessageStyle}>
        <p>Oops! Something went wrong.</p>
        <p>Please try again later.</p>
      </div>
    </div>
  );
}

export default LoginErrorMain;
