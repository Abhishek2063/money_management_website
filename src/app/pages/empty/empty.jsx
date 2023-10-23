import React from "react";
import { DASHBOARD, Navigate, LOGIN, REGISTER } from "./index";
import { useLocation } from "react-router-dom";
const Empty = () => {
    const location = useLocation()
    // console.log(location,'location');
//   const URL = location.pathname;
//   const path = URL.split("/");
//   const id = path[2];
  var matches = [LOGIN, REGISTER, DASHBOARD];
  if (~matches.indexOf(location.pathname)) {
    return <div></div>;
  } else {
    return <Navigate to={DASHBOARD} />;
  }
};
export default Empty;
