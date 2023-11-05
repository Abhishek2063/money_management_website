import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/Header";
import "../../assets/css/HomePage.css";
import MainCoverImage from "../../assets/images/stocks-charts.png";
import { NavigationButton } from "../registration";
import { DASHBOARD } from "../../routing/routeConstants";

const HomeMain = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        {/* First Section */}
        <section className="first-section">
          <img src={MainCoverImage} alt="MainCoverImage" />
          <div className="content">
            <h1>Welcome to Money Manager</h1>
            <p>Your ultimate solution for managing your finances</p>
            <NavigationButton
              text="Go to Dashboard"
              className="go-to-dashboard-button"
              NavigateTo={DASHBOARD}
            />
          </div>
        </section>

        {/* Second Section */}
        <section className="second-section">
          <div className="site-details">
            <p>
              Money Manager is a powerful financial management tool that helps
              you track your income, expenses, and savings. You can view your
              financial data in tables and graphs, set budgets, and receive
              notifications to stay on top of your finances.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomeMain;
