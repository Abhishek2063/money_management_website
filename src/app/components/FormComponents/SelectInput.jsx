// SelectInput.js
import { Select } from "antd";
import React from "react";

const SelectInput = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  error,
  isRequired,
  selectOptionArray,
}) => {

  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label} {isRequired ? <span className="field-required">*</span> : ""}
      </label>
      <Select
        allowClear
        style={{ width: "100%" }}
        name={name}
        id={name}
        className="form-input"
        value={value || undefined}
        onChange={onChange}
        placeholder={`Choose ${label}.`}
      >
        {selectOptionArray}
      </Select>
      {error ? <span className="field-required">{error}</span> : null}
    </div>
  );
};

export default SelectInput;
