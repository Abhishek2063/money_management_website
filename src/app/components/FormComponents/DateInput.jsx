// DateInput.js
import { DatePicker } from "antd";
import React from "react";

const DateInput = ({
  name,
  label,
  value,
  onChange,
  error,
  isRequired,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label} {isRequired ? <span className="field-required">*</span> : ""}
      </label>
      <DatePicker
        size={12}
        name={name}
        id={name}
        className="form-input"
        value={value}
        placeholderText="MM/DD/YYYY"
        format="MM-DD-YYYY"
        onChange={onChange}
        onOk={onChange}
      />
      {error ? <span className="field-required">{error}</span> : null}
    </div>
  );
};

export default DateInput;
