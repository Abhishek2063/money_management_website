import React from "react";
import { LOGIN, LOGINERROR, LOGINSUCCESS, REGISTER } from "../routeConstants";
export const LoginMain = React.lazy(() => import("../../pages/auth/LoginMain"));

export const RegistrationMain = React.lazy(() =>
  import("../../pages/registration/registrationMain")
);

export const LoginSuccessMain = React.lazy(() =>
  import("../../pages/auth/components/LoginSuccess")
);

export const LoginErrorMain = React.lazy(() =>
  import("../../pages/auth/components/LoginErrorMain")
);
export const PublicRoutes = [
  { path: LOGIN, component: <LoginMain />, exact: true },
  { path: REGISTER, component: <RegistrationMain /> },
  { path: LOGINSUCCESS, component: <LoginSuccessMain /> },
  { path: LOGINERROR, component: <LoginErrorMain /> },
];
