import { Navigate } from "react-router-dom";
import { Tokens, User } from "../storage";
import { LOGIN } from "./routeConstants";

export const onLogout = () => {
  Tokens.removeLocalData();
  <Navigate to={LOGIN} />
  return true;
};

export const getToken = () => Tokens.getToken();
export const getUserDetails = () => User.getUserDetails();

export const isLoggedIn = () => {
  if (getToken() && getUserDetails()) {
    return true;
  } else {
    Tokens.removeLocalData();
    return false;
  }
};
