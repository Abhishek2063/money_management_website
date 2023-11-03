import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import {
  BellOutlined,
  DashboardOutlined,
  RadarChartOutlined,
  BankOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";
import LogoImage from "../../assets/images/favicon-3.png";

const Header = () => {
  const userEmail = sessionStorage.getItem("userEmail");

  return (
    <div className="money-management mb-10">
      <Navbar className="money-management-navbar d-flex justify-content-center" expand="lg" fixed="top">
        <Navbar.Brand href="/dashboard">
          <img src={LogoImage} alt="Logo" width="40" height="40" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard" className="nav-link">
            <DashboardOutlined /> Dashboard
          </Nav.Link>
          <Nav.Link href="/dashboard" className="nav-link">
            <RadarChartOutlined /> Expense
          </Nav.Link>
          <Nav.Link href="/dashboard" className="nav-link">
            <BankOutlined /> Income
          </Nav.Link>
          <Nav.Link href="/dashboard" className="nav-link">
            <CreditCardOutlined /> Budget
          </Nav.Link>
        </Nav>
        <Nav>
        <Button variant="outline-secondary ml-2">
            <BellOutlined />
          </Button>
          <span className="user-email">
            {userEmail}
          </span>
          
          <Button variant="outline-danger ml-2">Logout</Button>
          
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
