import React from "react";
import { LOGIN, LOGINERROR, LOGINSUCCESS, REGISTER } from "../routeConstants";
import {LoginSuccessMain} from "../../pages/auth/components/LoginSuccess";

import LoginErrorMain from "../../pages/auth/components/LoginErrorMain";
export const LoginMain = React.lazy(() => import("../../pages/auth/LoginMain"));

export const RegistrationMain = React.lazy(() =>
  import("../../pages/registration/registrationMain")
);

export const PublicRoutes = [
  { path: LOGIN, component: <LoginMain />, exact: true },
  { path: REGISTER, component: <RegistrationMain /> },
  { path: LOGINSUCCESS, component: <LoginSuccessMain /> },
  { path: LOGINERROR, component: <LoginErrorMain /> },
];
