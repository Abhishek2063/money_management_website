import { Outlet, Navigate } from "react-router-dom";
import { isLoggedIn } from "./authServices";
import { DASHBOARD, LOGIN } from "./routeConstants";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";

export const Template = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body-content">{children}</div>

      <Footer />
    </>
  );
};

export const LoginRouteHandler = () => {
    const userLoggedIn = isLoggedIn();
  
    if (!userLoggedIn) {
      return <Navigate to={LOGIN} replace />;
    } else {
      return <Navigate to={DASHBOARD} replace />;
    }
  };

export const PublicRouteHandler = () => {
    const userLoggedIn = isLoggedIn();
  
    if (!userLoggedIn) {
      return <Outlet />;
    } else {
      return <Navigate to={DASHBOARD} replace />;
    }
  };

const PrivateRouteHandler = () => {
  const userLoggedIn = isLoggedIn();

  if (userLoggedIn) {
    return <Outlet />;
  } else {
    return <Navigate to={LOGIN} replace />;
  }
};

export default PrivateRouteHandler;



