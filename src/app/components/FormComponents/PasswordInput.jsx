// PasswordInput.js
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const PasswordInput = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  isRequired,
}) => {
  const [passwordShow, setPasswordShow] = useState(false);
  const handlePasswordShow = (e) => {
    e.preventDefault()
    setPasswordShow(!passwordShow);
  };
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
        {isRequired ? <span className="field-required">*</span> : ""}
      </label>
      <div className="password-input-container">
      <input
        type={passwordShow ? "text" : "password"}
        name={name}
        id={name}
        className="form-input"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}.`}
        onBlur={onBlur}
      />
      <button onClick={handlePasswordShow}  className="password-toggle-button">
        {passwordShow ? <EyeInvisibleOutlined /> : <EyeOutlined />}
      </button>
      </div>
      {error ? <span className="field-required">{error}</span> : null}
    </div>
  );
};

export default PasswordInput;
