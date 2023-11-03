import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DASHBOARD, LOGIN, REGISTER } from "./routeConstants";
import { isLoggedIn } from "./authServices";

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
        element={isLoggedIn() ? <Navigate to={DASHBOARD} /> : <Navigate to={LOGIN} />}
      />
      <Route path={REGISTER} element={<RegistrationMain />} />
    </Routes>
  );
};

export default PublicRoutes;
