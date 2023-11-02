import React from "react";
import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./authServices";
import { DASHBOARD, LOGIN } from "./routeConstants";
import PrivateRoutes from "./privateRoutes";
import LoginRoutes from "./loginRoutes";

const AllRoutes = () => {
  return (
    <>
      {isLoggedIn() ? <PrivateRoutes /> : <LoginRoutes />}
      <Navigate to={isLoggedIn() ? DASHBOARD : LOGIN} replace={true} />
    </>
  );
};

export default AllRoutes;
