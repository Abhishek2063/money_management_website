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
import "../../assets/css/login.css";
import logoImage from "../../assets/images/favicon-3.png";
import { Tokens, User } from "../../storage";
import { useNavigate } from "react-router-dom";
const LoginMain = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formDataError, setFormDataError] = useState([]);
  const [loader, setLoader] = useState(false);

  const loginData = useSelector((state) => state.auth.loginData);
  const prevloginData = usePrevious({ loginData });
  const navigate = useNavigate();
  useEffect(() => {
    if (prevloginData && prevloginData.loginData !== loginData) {
      if (loginData && _.has(loginData, "data") && loginData.success === true) {
        message.success(loginData.message);
        Tokens.setToken(loginData.data);
        User.setUserDetails(loginData.data);
        navigate("/dashboard");
        setLoader(false);
      }
      if (loginData && loginData.success === false) {
        setLoader(false);

        if (Array.isArray(loginData.error)) {
          message.error("Invalid Data");
        } else if (typeof loginData.error === "string") {
          message.error(loginData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [loginData, prevloginData]);
  return (
    <div className="login-container position-relative">
      <div className="login-page">
        <div className="login-form">
          <div className="logo-container">
            <img src={logoImage} alt="Company Logo" className="logo" />
          </div>
          <h1>Welcome to Money Management</h1>
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

export default LoginMain;
