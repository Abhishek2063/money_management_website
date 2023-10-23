import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { isLoggedIn } from "./authServices";
import { LOGIN, DASHBOARD } from "./routeConstants";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";
import LoginRoutes from "./loginRoutes";
import LoginMain from "../pages/auth/LoginMain";



const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          render={() => {
            return !isLoggedIn() ? (
              <Navigate to={LOGIN} />
            ) : (
              <Navigate to={DASHBOARD} />
            );
          }}
        />
      </Routes>
      {isLoggedIn() ? <PrivateRoutes /> : <LoginRoutes />}
      {!isLoggedIn() || isLoggedIn() ? (
        <PublicRoutes />
      ) : (
        <Navigate to={DASHBOARD} />
      )}
    </>
  );
};

export default AllRoutes;
