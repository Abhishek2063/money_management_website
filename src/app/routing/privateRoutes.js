import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { isLoggedIn } from "./authServices";
import { DASHBOARD, LOGIN } from "./routeConstants";
export const Empty = React.lazy(() => import("../pages/empty/empty"));
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn() ? <Navigate to={DASHBOARD} /> : <Navigate to={LOGIN} />}
      />
      <Route exact key="empty" path="*" element={<Empty />} />
    </Routes>
  );
};

export default PrivateRoutes;
