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
const FormFields = (props) => {
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

      <Button
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
