import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { isLoggedIn } from "./authServices";
import { DASHBOARD, LOGIN } from "./routeConstants";
import DashboardMain from "../pages/dashboard/DashboardMain";
import Footer from "../components/footer/footer";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn() ? <Navigate to={DASHBOARD} /> : <Navigate to={LOGIN} />}
      />
      <Route path={DASHBOARD} element={<DashboardMain />} />
      <Footer />

    </Routes>
  );
};

export default PrivateRoutes;
