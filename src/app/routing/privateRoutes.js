import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { isLoggedIn } from "./authServices";
import { DASHBOARD, Home, LOGIN } from "./routeConstants";
import DashboardMain from "../pages/dashboard/DashboardMain";
import HomeMain from "../pages/home/HomeMain";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn() ? <Navigate to={DASHBOARD} /> : <Navigate to={LOGIN} />}
      />
      <Route path={DASHBOARD} element={<DashboardMain />} />
      <Route path={Home} element={<HomeMain />} />


    </Routes>
  );
};

export default PrivateRoutes;
