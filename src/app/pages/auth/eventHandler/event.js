import { fieldValidator, login, verifyOtp } from "../index";

// Check Validation Function
export const checkValidation = (
  field,
  value,
  type,
  maxLength,
  minLength,
  formData
) => {
  return fieldValidator(
    field,
    value,
    type,
    maxLength,
    minLength,
    formData.password
  );
};

export const handleInputChange = (
  e,
  type,
  maxLength,
  minLength,
  setFormDataError,
  formDataError,
  setFormData,
  formData
) => {
  let value = e.target.value;
  if (type === "password" || type === "email") {
    value = e.target.value.replace(/\s+/g, "");
  }
  let error = checkValidation(
    e.target.name,
    value,
    type,
    maxLength,
    minLength,
    formData
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
export const validateForm = (formData, setFormDataError) => {
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
        minLength,
        formData
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

export const handleSubmit = (
  e,
  setLoader,
  formData,
  setFormDataError,
  dispatch
) => {
  e.preventDefault();
  const isFormValid = validateForm(formData, setFormDataError);

  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      password: formData.password,
    };
    dispatch(login(data));
  }
};

export const handleOTPSubmit = (
  e,
  setLoader,
  formData,
  setFormDataError,
  dispatch
) => {
  e.preventDefault();
  const isFormValid = validateOTPForm(formData, setFormDataError);

  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      userId: formData.userId,
      otpId: formData.otpId,
      enteredOTP: formData.enteredOTP,
    };
    dispatch(verifyOtp(data));
  }
};

export const validateOTPForm = (formData, setFormDataError) => {
  const errors = {};
  for (const key in formData) {
    if (formData.hasOwnProperty(key)) {
      let type = "";
      let maxLength = null;
      let minLength = null;
      if (key === "enteredOTP") {
        type = "onlynumber";
        maxLength = 4;
        minLength = null;
      }
      const error = checkValidation(
        key,
        formData[key],
        type,
        maxLength,
        minLength,
        formData
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
