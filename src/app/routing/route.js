import React from "react";
import { isLoggedIn } from "./authServices";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import { Navigate, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./routesDistribution/publicRoute";
import { PrivateRoute } from "./routesDistribution/privateRoute";
import { DASHBOARD, LOGIN } from "./routeConstants";
import DashboardMain from "../pages/dashboard/DashboardMain";
import LoginMain from "../pages/auth/LoginMain";
import Empty from "../pages/empty/empty";

export const PrivateRouteHandler = ({ children }) => {
  const userLoggedIn = isLoggedIn();
  if (!userLoggedIn) {
    return <Navigate to={LOGIN} />;
  }
  return <>{children}</>;
};

export const PublicRouteHandler = ({ children }) => {
  const userLoggedIn = isLoggedIn();
  if (userLoggedIn) {
    return <Navigate to={DASHBOARD} />;
  }
  return <>{children}</>;
};

export const LoginRouteHandler = ({ children }) => {
  const userLoggedIn = isLoggedIn();
  return userLoggedIn ? <Navigate to={DASHBOARD} /> : <Navigate to={LOGIN} />;
};

const AllRoutes = () => {
  // Check if the user is logged in
  const userLoggedIn = isLoggedIn();

  return (
    <>
      {userLoggedIn ? (
        <>
          <Header />
          <div className="container mt-4">
            <Routes>
              <Route
                key="/"
                path="/"
                element={
                  <LoginRouteHandler>
                    {userLoggedIn ? <DashboardMain /> : <LoginMain />}
                  </LoginRouteHandler>
                }
              />
              {PrivateRoute.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <PrivateRouteHandler>{route.component}</PrivateRouteHandler>
                  }
                />
              ))}
              <Route path="*" element={<Empty />} />
            </Routes>
          </div>

          <Footer />
        </>
      ) : (
        <Routes>
          <Route
            key="/"
            path="/"
            element={
              <LoginRouteHandler>
                {userLoggedIn ? <DashboardMain /> : <LoginMain />}
              </LoginRouteHandler>
            }
          />
          {PublicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <PublicRouteHandler>{route.component}</PublicRouteHandler>
              }
            />
          ))}
          <Route path="*" element={<Empty />} />
        </Routes>
      )}
    </>
  );
};

export default AllRoutes;
