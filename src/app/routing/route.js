import React from "react";
import { isLoggedIn } from "./authServices";
import PrivateRoutes from "./privateRoutes";
import LoginRoutes from "./loginRoutes";
import PublicRoutes from "./publicRoutes";

const AllRoutes = () => {
  return (
    <>
      {!isLoggedIn() || isLoggedIn() ? (
        <PublicRoutes />
      ) : isLoggedIn() ? (
        <PrivateRoutes />
      ) : (
        <LoginRoutes />
      )}
     
    </>
  );
};

export default AllRoutes;
