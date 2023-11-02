// PasswordInput.js
import React from "react";

const PasswordInput = ({ name, label, value, onChange, onBlur, error,isRequired }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}{isRequired ? <span className="field-required">*</span> : ""}
      </label>
      <input
        type="password"
        name={name}
        id={name}
        className="form-input"
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}.`}
        onBlur={onBlur}
      />
      {error ? <span className="field-required">{error}</span> : null}
    </div>
  );
};

export default PasswordInput;
