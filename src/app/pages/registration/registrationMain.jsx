import React, { useEffect, useState } from "react";
import {
  useDispatch,
  usePrevious,
  useSelector,
  _,
  message,
  FormFields,
  Loader,
} from "./index";
import "../../assets/css/registration.css";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../../routing/routeConstants";
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
  const navigate = useNavigate();
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
        message.success(registrationData.message);
        setLoader(false);
        navigate(LOGIN);
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
    }// eslint-disable-next-line
  }, [registrationData, prevregistrationData]);
  return (
    <div className="registration-container position-relative">
      <div className="registration-page">
        <div className="registration-form">
          <h1>Register Yourself!!!</h1>
          <form>
            <FormFields
              formData={formData}
              setFormData={setFormData}
              formDataError={formDataError}
              setFormDataError={setFormDataError}
              setLoader={setLoader}
              dispatch={dispatch}
            />
          </form>
        </div>
      </div>
      {loader && (
        <div className="overlay position-absolute">
          <div className="">{loader && <Loader />}</div>
        </div>
      )}
    </div>
  );
};

export default RegistrationMain;
