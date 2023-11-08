import React from "react";
import { DASHBOARD, Home, EXPANSE, INCOME, BUDGET } from "../routeConstants";
export const DashboardMain = React.lazy(() =>
  import("../../pages/dashboard/DashboardMain")
);
export const HomeMain = React.lazy(() => import("../../pages/home/HomeMain"));
export const ExpanseMain = React.lazy(() =>
  import("../../pages/expanse/ExpanseMain")
);
export const IncomeMain = React.lazy(() =>
  import("../../pages/income/IncomeMain")
);
export const BudgetMain = React.lazy(() =>
  import("../../pages/budget/BudgetMain")
);

export const PrivateRoute = [
  { path: DASHBOARD, component: <DashboardMain />, exact: true },
  { path: Home, component: <HomeMain /> },
  { path: EXPANSE, component: <ExpanseMain /> },
  { path: INCOME, component: <IncomeMain /> },
  { path: BUDGET, component: <BudgetMain /> },
];
