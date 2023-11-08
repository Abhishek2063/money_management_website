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
  const { Option } = Select;

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
        {selectOptionArray && selectOptionArray.length > 0 ? (
          [ ...selectOptionArray,{ _id: "Other", category_name: "Other" }].map(
            (item, index) => (
              <Option key={item._id} value={item._id}>
                {item.category_name}
              </Option>
            )
          )
        ) : (
          <Option value={null} disabled>
            No {label} available
          </Option>
        )}
      </Select>
      {error ? <span className="field-required">{error}</span> : null}
    </div>
  );
};

export default SelectInput;
