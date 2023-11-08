import React from "react";
import { isLoggedIn } from "./authServices";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { PublicRoutes } from "./routesDistribution/publicRoute";
import { PrivateRoute } from "./routesDistribution/privateRoute";
import { Home, LOGIN } from "./routeConstants";
import LoginMain from "../pages/auth/LoginMain";
import Empty from "../pages/empty/empty";
import HomeMain from "../pages/home/HomeMain";

export const PrivateRouteHandler = () => {
  const userLoggedIn = isLoggedIn();

  return userLoggedIn ? <Outlet /> : <Navigate to={LOGIN} />;
};

export const PublicRouteHandler = () => {
  const userLoggedIn = isLoggedIn();
  return !userLoggedIn ? <Outlet /> : <Navigate to={Home} />;
};

export const LoginRouteHandler = () => {
  const userLoggedIn = isLoggedIn();
  return userLoggedIn ? <Navigate to={Home} /> : <Navigate to={LOGIN} />;
};

const AllRoutes = () => {
  // Check if the user is logged in
  const userLoggedIn = isLoggedIn();

  return (
    <>
      {userLoggedIn ? (
        <>
          <Header />
          <div className="body-content">
            <Routes>
              <Route element={<LoginRouteHandler />}>
                <Route
                  key="/"
                  path="/"
                  element={userLoggedIn ? <HomeMain /> : <LoginMain />}
                />
              </Route>
              <Route element={<PrivateRouteHandler />}>
                {PrivateRoute.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={route.component}
                  />
                ))}
              </Route>

              <Route path="*" element={<Empty />} />
            </Routes>
          </div>

          <Footer />
        </>
      ) : (
        <Routes>
          <Route element={<LoginRouteHandler />}>
            <Route
              key="/"
              path="/"
              element={userLoggedIn ? <HomeMain /> : <LoginMain />}
            />
          </Route>
          <Route element={<PublicRouteHandler />}>
            {PublicRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Route>
          <Route path="*" element={<Empty />} />
        </Routes>
      )}
    </>
  );
};

export default AllRoutes;
