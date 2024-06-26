import React from "react";
import {
  Button,
  NavigationButton,
  PasswordInput,
  TextInput,
  handleInputChange,
  handleSubmit,
} from "../index";
import { REGISTER } from "../../../routing/routeConstants";
import { API_URL } from "../../../common/config";
import {
  // facebookLoginCallback,
  googleLoginCallback,
} from "../../../redux/auth/auth.action";
import { handleOTPSubmit } from "../eventHandler/event";
const FormFields = (props) => {
  let timer = null;
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    const newGoogleLoginWindow = window.open(
      `${API_URL}/auth/google/`,
      "_blank",
      "width=500,height=600"
    );
    if (newGoogleLoginWindow) {
      timer = setInterval(() => {
        if (newGoogleLoginWindow.closed) {
          props.setLoader(true);
          props.dispatch(googleLoginCallback());
          if (timer) clearInterval(timer);
        }
      }, 500);
    }
  };

  // const handleFaceBookLogin = (e) => {
  //   e.preventDefault();
  //   const newGoogleLoginWindow = window.open(
  //     `${API_URL}/auth/facebook/`,
  //     "_blank",
  //     "width=500,height=600"
  //   );
  //   if (newGoogleLoginWindow) {
  //     timer = setInterval(() => {
  //       if (newGoogleLoginWindow.closed) {
  //         props.setLoader(true);
  //         props.dispatch(facebookLoginCallback());
  //         if (timer) clearInterval(timer);
  //       }
  //     }, 500);
  //   }
  // };

  return (
    <>
      <TextInput
        name="email"
        label="Email"
        value={props.formData.email}
        onChange={(e) =>
          handleInputChange(
            e,
            "email",
            null,
            null,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        onBlur={(e) =>
          handleInputChange(
            e,
            "email",
            null,
            null,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        error={props.formDataError.emailErr}
        isRequired={true}
      />
      <PasswordInput
        name="password"
        label="Password"
        value={props.formData.password}
        onChange={(e) =>
          handleInputChange(
            e,
            "password",
            20,
            8,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        onBlur={(e) =>
          handleInputChange(
            e,
            "password",
            20,
            8,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        error={props.formDataError.passwordErr}
        isRequired={true}
      />

     {props.showOTPField ? <TextInput
        name="enteredOTP"
        label="OTP"
        value={props.formData.enteredOTP}
        onChange={(e) =>
          handleInputChange(
            e,
            "onlynumber",
            4,
            null,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        onBlur={(e) =>
          handleInputChange(
            e,
            "onlynumber",
            4,
            null,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        error={props.formDataError.enteredOTPErr}
        isRequired={true}
      /> : "" }
       {props.showOTPField ? <p> <span className="time-heading">Time remaining:</span> <span className={props.timer < 15 ? "time-count-danger" : "time-count"}>{props.timer} seconds</span></p> : null}
      {/* <Button
        type="button"
        text=" Login with Facebook"
        className="loginBtn loginBtn--facebook"
        onClick={handleFaceBookLogin}
      /> */}

     {!props.showOTPField ? <Button
        type="submit"
        text="Login"
        className="submit-button"
        onClick={(e) =>
          handleSubmit(
            e,
            props.setLoader,
            props.formData,
            props.setFormDataError,
            props.dispatch
          )
        }
      /> : 
      <Button
        type="submit"
        text="Verify OTP"
        className="submit-button"
        onClick={(e) =>
          handleOTPSubmit(
            e,
            props.setLoader,
            props.formData,
            props.setFormDataError,
            props.dispatch
          )
        }
      />
      }

      <Button
        type="button"
        text="Login with Google"
        className="login-with-google-btn mt-3"
        onClick={handleGoogleLogin}
      />

      <NavigationButton
        text="Go To Registration"
        className="navigation-button"
        NavigateTo={REGISTER}
      />
    </>
  );
};

export default FormFields;
