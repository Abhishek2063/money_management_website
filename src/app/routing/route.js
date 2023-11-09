import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginMain from "../pages/auth/LoginMain";
import HomeMain from "../pages/home/HomeMain";
import { PublicRoutes } from "./routesDistribution/publicRoute";
import Empty from "../pages/empty/empty";
import PrivateRouteHandler, { LoginRouteHandler, PublicRouteHandler, Template } from "./Layout";
import { PrivateRoute } from "./routesDistribution/privateRoute";

const AllRoutes = () => {
  return (
    <>
      <Routes>
         {/* Login routes  */}
         <Route element={<LoginRouteHandler />}>
          <Route key="/" path="/" element={<LoginMain />} />
        </Route>

        {/* Public routes  */}
        <Route element={<PublicRouteHandler />}>
          <Route key="/" path="/" element={<LoginMain />} />
          {PublicRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Route>

        {/* Private routes */}
        <Route element={<PrivateRouteHandler />}>
          <Route
            key="/"
            path="/"
            element={
              <Template>
                <HomeMain />
              </Template>
            }
          />
          {PrivateRoute.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<Template>{route.component}</Template>}
            />
          ))}
        </Route>

        <Route path="*" element={<Empty />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
