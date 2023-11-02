import React, { useEffect, useState } from "react";
import { fieldValidator, usePrevious } from "../../common/custom";
import Loader from "../../common/loader";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../redux/auth/auth.action";
import _ from "lodash";
import { message } from "antd";

const RegistrationMain = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [formDataError, setFormDataError] = useState([]);
  const [loader, setLoader] = useState(false);

  // Check Validation Function
  const checkValidation = (field, value, type, maxLength, minLength) => {
    return fieldValidator(
      field,
      value,
      type,
      maxLength,
      minLength,
      formData.password
    );
  };

  const handleInputChange = (e, type, maxLength, minLength) => {
    let value = e.target.value;
    if (type === "password" || type === "email") {
      value = e.target.value.replace(/\s+/g, "");
    }
    let error = checkValidation(
      e.target.name,
      value,
      type,
      maxLength,
      minLength
    );
    setFormDataError({
      ...formDataError,
      [error.fieldNameErr]: error.errorMsg,
      [error.fieldCls]: error.setClassName,
    });
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };
  const validateForm = () => {
    const errors = {};
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        let type = "";
        let maxLength = null;
        let minLength = null;
        if (key === "firstName" || key === "lastName") {
          type = "alphabetics";
          maxLength = 20;
          minLength = 3;
        } else if (key === "email") {
          type = "email";
          maxLength = null;
          minLength = 3;
        }
        if (key === "password" || key === "confirmPassword") {
          type = "password";
          maxLength = 20;
          minLength = 8;
        }
        const error = checkValidation(
          key,
          formData[key],
          type,
          maxLength,
          minLength
        );
        if (error.errorMsg) {
          errors[error.fieldNameErr] = error.errorMsg;
          errors[error.fieldCls] = error.setClassName;
        }
      }
    }
    setFormDataError(errors);
    return Object.keys(errors).length === 0; // Form is valid if no errors are present
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      // Proceed with registration logic
      setLoader(true);
      const data = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
      };
      dispatch(registration(data));
    }
  };

  const registrationData = useSelector((state) => state.auth.registerData);
  const prevregistrationData = usePrevious({ registrationData });

  useEffect(() => {
    if (
      prevregistrationData &&
      prevregistrationData.registrationData !== registrationData
    ) {
      if (
        registrationData &&
        _.has(registrationData, "data") &&
        registrationData.success === true
      ) {
        message.success(registrationData.data)
        setLoader(false);
      }
      if (registrationData && registrationData.success === false) {
        setLoader(false);
       
      
        if (Array.isArray(registrationData.error)) {
          message.error("Invalid Data");
        } else if (typeof registrationData.error === 'string') {
          message.error(registrationData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      
      }
      
    }
  }, [registrationData, prevregistrationData]);
  return (
    <div className="registration-page">
      <div className="registration-form">
        <h1>Register Yourself!!!</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name <span className="field-required">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              className="form-input"
              value={formData.firstName}
              onChange={(e) => handleInputChange(e, "alphabetics", 20, 3)}
              placeholder="Enter First Name."
              onBlur={(e) => handleInputChange(e, "alphabetics", 20, 3)}
            />
            {formDataError && formDataError.firstNameErr ? (
              <span className="field-required">
                {formDataError.firstNameErr}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name <span className="field-required">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="form-input"
              value={formData.lastName}
              onChange={(e) => handleInputChange(e, "alphabetics", 20, 3)}
              placeholder="Enter Last Name."
              onBlur={(e) => handleInputChange(e, "alphabetics", 20, 3)}
            />
            {formDataError && formDataError.lastNameErr ? (
              <span className="field-required">
                {formDataError.lastNameErr}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              Email <span className="field-required">*</span>
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-input"
              value={formData.email}
              onChange={(e) => handleInputChange(e, "email", null, null)}
              placeholder="Enter Email."
              onBlur={(e) => handleInputChange(e, "email", null, null)}
            />
            {formDataError && formDataError.emailErr ? (
              <span className="field-required">{formDataError.emailErr}</span>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              Password <span className="field-required">*</span>
            </label>
            <input
              type="text"
              name="password"
              id="password"
              className="form-input"
              value={formData.password}
              onChange={(e) => handleInputChange(e, "password", 20, 8)}
              placeholder="Enter Password."
              onBlur={(e) => handleInputChange(e, "password", 20, 8)}
            />
            {formDataError && formDataError.passwordErr ? (
              <span className="field-required">
                {formDataError.passwordErr}
              </span>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              Confirm Password <span className="field-required">*</span>
            </label>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              className="form-input"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange(e, "password", 20, 8)}
              placeholder="Enter Confirm Password."
              onBlur={(e) => handleInputChange(e, "password", 20, 8)}
            />
            {formDataError && formDataError.confirmPasswordErr ? (
              <span className="field-required">
                {formDataError.confirmPasswordErr}
              </span>
            ) : (
              ""
            )}
          </div>

          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
      {loader && <Loader />}
    </div>
  );
};

export default RegistrationMain;
