import React, { useEffect, useState } from "react";
import {
  useDispatch,
  usePrevious,
  useSelector,
  _,
  message,
  handleSubmit,
  FormFields,
  Loader,
} from "./index";

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
  const [loader, setLoader] = useState(true);

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
        message.success(registrationData.data);
        setLoader(false);
      }
      if (registrationData && registrationData.success === false) {
        setLoader(false);

        if (Array.isArray(registrationData.error)) {
          message.error("Invalid Data");
        } else if (typeof registrationData.error === "string") {
          message.error(registrationData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    }
  }, [registrationData, prevregistrationData]);
  return (
    <div className="registration-container">
    <div className="registration-page">
      <div className="registration-form">
        <h1>Register Yourself!!!</h1>
        <form
          onSubmit={(e) =>
            handleSubmit(e, setLoader, formData, setFormDataError, dispatch)
          }
        >
          <FormFields
            formData={formData}
            setFormData={setFormData}
            formDataError={formDataError}
            setFormDataError={setFormDataError}
          />
        </form>
      </div>
    </div>

      {loader && <Loader />}
    </div>
    
  );
};

export default RegistrationMain;
