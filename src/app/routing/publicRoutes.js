import React from "react";
import { Route, Routes } from "react-router-dom";
import { DASHBOARD } from "./routeConstants";
export const DashboardMain = React.lazy(() =>
  import("../pages/dashboard/DashboardMain")
);
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path={DASHBOARD} element={<DashboardMain />} />
    </Routes>
  );
};

export default PublicRoutes;
