import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DASHBOARD, LOGIN } from "./routeConstants";
import { isLoggedIn } from "./authServices";

export const LoginMain = React.lazy(() =>
  import("../pages/auth/LoginMain")
);
const LoginRoutes = () => {
  return (
    <Routes>
       <Route
        path="/"
        element={isLoggedIn() ? <Navigate to={DASHBOARD} /> : <Navigate to={LOGIN} />}
      />
      <Route exact key="/auth/login" path={LOGIN} element={<LoginMain />} />;
    </Routes>
  );
};

export default LoginRoutes;
