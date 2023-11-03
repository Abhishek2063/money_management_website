import React from "react";
import {
  Button,
  NavigationButton,
  PasswordInput,
  TextInput,
  handleInputChange,
  handleSubmit,
} from "../index";
import { LOGIN } from "../../../routing/routeConstants";
const FormFields = (props) => {
  return (
    <>
      <TextInput
        name="firstName"
        label="First Name"
        value={props.formData.firstName}
        onChange={(e) =>
          handleInputChange(
            e,
            "alphabetics",
            20,
            3,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        onBlur={(e) =>
          handleInputChange(
            e,
            "alphabetics",
            20,
            3,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        error={props.formDataError.firstNameErr}
        isRequired={true}
      />

      <TextInput
        name="lastName"
        label="Last Name"
        value={props.formData.lastName}
        onChange={(e) =>
          handleInputChange(
            e,
            "alphabetics",
            20,
            3,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        onBlur={(e) =>
          handleInputChange(
            e,
            "alphabetics",
            20,
            3,
            props.setFormDataError,
            props.formDataError,
            props.setFormData,
            props.formData
          )
        }
        error={props.formDataError.lastNameErr}
        isRequired={true}
      />

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

      <PasswordInput
        name="confirmPassword"
        label="Confirm Password"
        value={props.formData.confirmPassword}
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
        error={props.formDataError.confirmPasswordErr}
        isRequired={true}
      />

      <Button
        type="submit"
        text="Register"
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
        text="Go To Login"
        className="navigation-button"
        NavigateTo={LOGIN}
      />
    </>
  );
};

export default FormFields;
