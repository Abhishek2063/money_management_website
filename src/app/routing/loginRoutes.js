import React from "react";
import { Route, Routes } from "react-router-dom";
import { LOGIN } from "./routeConstants";
export const LoginMain = React.lazy(() =>
  import("../pages/auth/LoginMain")
);
const LoginRoutes = () => {
  return (
    <Routes>
      <Route exact key="login" path={LOGIN} element={<LoginMain />} />;
    </Routes>
  );
};

export default LoginRoutes;
