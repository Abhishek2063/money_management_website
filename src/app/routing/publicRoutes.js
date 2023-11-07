import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  DASHBOARD,
  LOGIN,
  LOGINERROR,
  LOGINSUCCESS,
  REGISTER,
} from "./routeConstants";
import { isLoggedIn } from "./authServices";
import { LoginSuccessMain } from "../pages/auth/components/LoginSuccess";
import LoginErrorMain from "../pages/auth/components/LoginErrorMain";

export const DashboardMain = React.lazy(() =>
  import("../pages/dashboard/DashboardMain")
);
export const RegistrationMain = React.lazy(() =>
  import("../pages/registration/registrationMain")
);

const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn() ? <Navigate to={DASHBOARD} /> : <Navigate to={LOGIN} />
        }
      />
      <Route path={REGISTER} element={<RegistrationMain />} />
      <Route path={LOGINSUCCESS} element={<LoginSuccessMain />} />
      <Route path={LOGINERROR} element={<LoginErrorMain />} />
    </Routes>
  );
};

export default PublicRoutes;
