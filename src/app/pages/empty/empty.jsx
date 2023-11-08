import React from "react";
import {
  DASHBOARD,
  Navigate,
  LOGIN,
  REGISTER,
  // User,
  Home,
  LOGINSUCCESS,
  LOGINERROR,
  EXPANSE,
  INCOME,
  BUDGET,
} from "./index";
import { useLocation } from "react-router-dom";
import { isLoggedIn } from "../../routing/authServices";
const Empty = () => {
  const location = useLocation();
  const userLoggedIn = isLoggedIn();

  //   const path = URL.split("/");
  //   const id = path[2];
  var matches = [
    LOGIN,
    REGISTER,
    LOGINSUCCESS,
    LOGINERROR,
    Home,
    EXPANSE,
    INCOME,
    BUDGET,
    DASHBOARD,
  ];

  if (~matches.indexOf(location.pathname)) {
    return <div></div>;
  } else {
    return userLoggedIn ? <Navigate to={Home} /> : <Navigate to={LOGIN} />;
  }
};
export default Empty;
