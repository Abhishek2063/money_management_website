import axios from "axios";
import { config as defaultConfig } from "../config/api.config";
import { Tokens } from "../../app/storage";
import { setUserDetails, getUserDetails } from "../../app/storage/user";
import { LOGIN } from "../../app/routing/routeConstants";
import { getErrorMessages } from "../../app/common/errorMessageParser";
import _ from "lodash";
import { Navigate } from "react-router-dom";
export const request = async (config) => {
  let requestData = {
    ...defaultConfig(),
    ...config,
  };

  let response;
  try {
    response = await axios.request(requestData);
  } catch (error) {
    return createResponseFromAxiosError(error);
  }

  return createResponseFromAxiosResponse(response);
};

function createResponseFromAxiosError(error) {
  // handle  error
  let status, message, data;

  if (error.response) {
    if (error.response.status === 401) {
      Tokens.removeLocalData();
      <Navigate to={LOGIN}/>
    }
    status = error.response.status;
    message = error.message;
    data = error.response.data;
  } else if (error.request) {
    status = 0;
    message = error.message;
  } else {
    status = -1;
    message = error.message;
  }

  if (data.message && _.has(data.message, "message")) {
    data.message = data.message.message;
  }
  if (data.message && _.has(data.message, "validation")) {
    data.message = getErrorMessages(data.message.validation);
  }

  return { success: false, data, error: { status, message } };
}

function createResponseFromAxiosResponse(response) {
  if (
    response.data &&
    response.data.user_preferences &&
    response.data.user_preferences[0]
  ) {
    let userData = getUserDetails();
    userData = userData === "" ? {} : userData;
    userData.planData = response.data.user_preferences[0];
    setUserDetails(userData);
  }
  return { success: true, data: response.data };
}
