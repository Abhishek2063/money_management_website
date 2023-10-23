import React from "react";
import { Route, Routes } from "react-router-dom";
export const Empty = React.lazy(() =>
  import("../pages/empty/empty")
);
const PrivateRoutes = () => {
  return (
    <Routes>
      <Route exact key="empty" path="*" element={<Empty />} />
    </Routes>
  );
};

export default PrivateRoutes;
