import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DASHBOARD, LOGIN } from "./routeConstants";
import { isLoggedIn } from "./authServices";

export const DashboardMain = React.lazy(() =>
  import("../pages/dashboard/DashboardMain")
);

const PublicRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn() ? <Navigate to={DASHBOARD} /> : <Navigate to={LOGIN} />}
      />
      <Route path={DASHBOARD} element={<DashboardMain />} />
    </Routes>
  );
};

export default PublicRoutes;
