import React, { useEffect, useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import {
  BellOutlined,
  DashboardOutlined,
  RadarChartOutlined,
  BankOutlined,
  CreditCardOutlined,
  HomeOutlined,
  ApartmentOutlined,
  FundOutlined,
} from "@ant-design/icons";
import LogoImage from "../../assets/images/favicon-3.png";
import { useDispatch, useSelector } from "react-redux";
import { clearUserDetails, getUserDetails } from "../../storage/user";
import { logout } from "../../redux/auth/auth.action";
import { usePrevious } from "../../common/custom";
import { NavLink, useNavigate } from "react-router-dom";
import { message } from "antd";
import { Tokens } from "../../storage";
import _ from "lodash";
import Loader from "../../common/loader";
import {
  BUDGET,
  CATEGORY,
  DASHBOARD,
  EXPANSE,
  Home,
  INCOME,
  LOGIN,
} from "../../routing/routeConstants";

const Header = () => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const userData = getUserDetails();
  const handleLogout = () => {
    const data = {
      userId: userData.userId,
    };
    dispatch(logout(data));
  };

  const logoutUser = useSelector((state) => state.auth.logoutUserData);
  const prevlogoutUser = usePrevious({ logoutUser });
  const navigate = useNavigate();
  useEffect(() => {
    if (prevlogoutUser && prevlogoutUser.logoutUser !== logoutUser) {
      if (
        logoutUser &&
        _.has(logoutUser, "data") &&
        logoutUser.success === true
      ) {
        message.success(logoutUser.message);
        Tokens.removeLocalData();
        clearUserDetails();
        navigate(LOGIN);
        setLoader(false);
      }
      if (logoutUser && logoutUser.success === false) {
        setLoader(false);
        if (Array.isArray(logoutUser.error)) {
          message.error("Invalid Data");
        } else if (typeof logoutUser.error === "string") {
          message.error(logoutUser.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [logoutUser, prevlogoutUser]);

  return (
    <div className="money-management">
      <Navbar
        className="money-management-navbar"
        expand="lg"
        fixed="top"
        style={{ background: "linear-gradient(to right, #4CAF50, #2196F3)" }}
      >
        <Container>
          <Navbar.Brand as={NavLink} to={Home}>
            <img src={LogoImage} alt="Logo" width="40" height="40" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to={Home} className="nav-link">
              <HomeOutlined /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to={DASHBOARD} className="nav-link">
              <DashboardOutlined /> Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to={EXPANSE} className="nav-link">
              <RadarChartOutlined /> Expense
            </Nav.Link>
            <Nav.Link as={NavLink} to={INCOME} className="nav-link">
              <BankOutlined /> Income
            </Nav.Link>
            <Nav.Link as={NavLink} to={CATEGORY} className="nav-link">
              <ApartmentOutlined /> Category
            </Nav.Link>
           
            <Nav.Link as={NavLink} to={BUDGET} className="nav-link">
            <FundOutlined />Budget
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="outline-secondary notification-icon">
              <BellOutlined />
            </Button>
            <span className="user-email">
              {userData && userData.email ? userData.email : ""}
            </span>
            <Button variant="outline-danger" onClick={handleLogout}>
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
      {loader && <Loader />}
    </div>
  );
};

export default Header;
