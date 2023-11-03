import React from "react";
import { isLoggedIn } from "./authServices";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import LoginRoutes from "./loginRoutes";

const AllRoutes = () => {
  // Check if the user is logged in
  const userLoggedIn = isLoggedIn();

  return (
    <>
      {userLoggedIn ? (
        <PrivateRoutes /> // User is logged in, show PrivateRoutes
      ) : (
        <>
          <LoginRoutes /> {/* User is not logged in, show LoginRoutes */}
          <PublicRoutes /> {/* Also allow access to PublicRoutes */}
        </>
      )}
    </>
  );
};

export default AllRoutes;
