import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Chart from "react-google-charts";

import {
  useDispatch,
  getToalIncomeExpanse,
  getExpenseByCategory,
  getIncomeExpenseSummary,
  getExpenseDays,
  useSelector,
  usePrevious,
  message,
  getUserDetails,
} from "./index";
import {
  expanseDaysWiseMonthlyOptions,
  totalIncomeExpanseCategoryWiseOption,
  totalIncomeExpanseOption,
  totalIncomeTotalExpanseMonthwiseYearWiseOptions,
} from "./event";

const DashboardMain = () => {
  const [totalIncomeExpanseData, setTotalIncomeExpanseData] = useState([]);
  const [
    totalIncomeExpanseCategoryWiseData,
    setTotalIncomeExpanseCategoryWiseData,
  ] = useState([]);
  const [
    totalIncomeTotalExpanseMonthwiseYearWiseData,
    setTotalIncomeTotalExpanseMonthwiseYearWiseData,
  ] = useState([]);
  const [expanseDaysWiseMonthlyData, setExpanseDaysWiseMonthlyData] = useState(
    []
  );
  const [loader, setLoader] = useState(false);
  const userData = getUserDetails();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToalIncomeExpanse({ user_id: userData.userId }));
    dispatch(getExpenseByCategory({ user_id: userData.userId }));
    dispatch(getIncomeExpenseSummary({ user_id: userData.userId }));
    dispatch(getExpenseDays({ user_id: userData.userId }));
  },[]);

  const getToalIncomeExpanseData = useSelector(
    (state) => state.dashboard.getToalIncomeExpanseData
  );
  const prevgetToalIncomeExpanseData = usePrevious({
    getToalIncomeExpanseData,
  });
  useEffect(() => {

    if (
      prevgetToalIncomeExpanseData &&
      prevgetToalIncomeExpanseData.getToalIncomeExpanseData !==
        getToalIncomeExpanseData
    ) {
      if (
        getToalIncomeExpanseData &&
        getToalIncomeExpanseData.success === true
      ) {
        message.success(getToalIncomeExpanseData.message);
        setLoader(true);
        console.log(getToalIncomeExpanseData,"getToalIncomeExpanseData");
        setTotalIncomeExpanseData(getToalIncomeExpanseData.data);
      }
      if (
        getToalIncomeExpanseData &&
        getToalIncomeExpanseData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(getToalIncomeExpanseData.error)) {
          message.error("Invalid Data");
        } else if (typeof getToalIncomeExpanseData.error === "string") {
          message.error(getToalIncomeExpanseData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [getToalIncomeExpanseData, prevgetToalIncomeExpanseData]);

  const getExpenseByCategoryData = useSelector(
    (state) => state.dashboard.getExpenseByCategoryData
  );
  const prevgetExpenseByCategoryData = usePrevious({
    getExpenseByCategoryData,
  });
  useEffect(() => {
    if (
      prevgetExpenseByCategoryData &&
      prevgetExpenseByCategoryData.getExpenseByCategoryData !==
        getExpenseByCategoryData
    ) {
      if (
        getExpenseByCategoryData &&
        getExpenseByCategoryData.success === true
      ) {
        message.success(getExpenseByCategoryData.message);
        setLoader(true);
        setTotalIncomeExpanseCategoryWiseData(getExpenseByCategoryData.data);
      }
      if (
        getExpenseByCategoryData &&
        getExpenseByCategoryData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(getExpenseByCategoryData.error)) {
          message.error("Invalid Data");
        } else if (typeof getExpenseByCategoryData.error === "string") {
          message.error(getExpenseByCategoryData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [getExpenseByCategoryData, prevgetExpenseByCategoryData]);

  const getIncomeExpenseSummaryData = useSelector(
    (state) => state.dashboard.getIncomeExpenseSummaryData
  );
  const prevgetIncomeExpenseSummaryData = usePrevious({
    getIncomeExpenseSummaryData,
  });
  useEffect(() => {
    if (
      prevgetIncomeExpenseSummaryData &&
      prevgetIncomeExpenseSummaryData.getIncomeExpenseSummaryData !==
        getIncomeExpenseSummaryData
    ) {
      if (
        getIncomeExpenseSummaryData &&
        getIncomeExpenseSummaryData.success === true
      ) {
        message.success(getIncomeExpenseSummaryData.message);
        setLoader(true);
        setTotalIncomeTotalExpanseMonthwiseYearWiseData(
          getIncomeExpenseSummaryData.data
        );
      }
      if (
        getIncomeExpenseSummaryData &&
        getIncomeExpenseSummaryData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(getIncomeExpenseSummaryData.error)) {
          message.error("Invalid Data");
        } else if (typeof getIncomeExpenseSummaryData.error === "string") {
          message.error(getIncomeExpenseSummaryData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [getIncomeExpenseSummaryData, prevgetIncomeExpenseSummaryData]);

  const getExpenseDaysData = useSelector(
    (state) => state.dashboard.getExpenseDaysData
  );
  const prevgetExpenseDaysData = usePrevious({
    getExpenseDaysData,
  });
  useEffect(() => {
    if (
      prevgetExpenseDaysData &&
      prevgetExpenseDaysData.getExpenseDaysData !== getExpenseDaysData
    ) {
      if (getExpenseDaysData && getExpenseDaysData.success === true) {
        message.success(getExpenseDaysData.message);
        setLoader(true);
        setExpanseDaysWiseMonthlyData(getExpenseDaysData.data);
      }
      if (getExpenseDaysData && getExpenseDaysData.success === false) {
        setLoader(false);

        if (Array.isArray(getExpenseDaysData.error)) {
          message.error("Invalid Data");
        } else if (typeof getExpenseDaysData.error === "string") {
          message.error(getExpenseDaysData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [getExpenseDaysData, prevgetExpenseDaysData]);

  console.log(totalIncomeExpanseData, "totalIncomeExpanseData");
  return (
    <>
      <Row className="mt-0">
        <Col xs={12} md={6} lg={6}>
          <Chart
            chartType="PieChart"
            data={totalIncomeExpanseData}
            options={totalIncomeExpanseOption}
            width={"100%"}
            height={"400px"}
          />
        </Col>
        <Col xs={12} md={6} lg={6}>
          <Chart
            chartType="PieChart"
            data={totalIncomeExpanseCategoryWiseData}
            options={totalIncomeExpanseCategoryWiseOption}
            width={"100%"}
            height={"400px"}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={totalIncomeTotalExpanseMonthwiseYearWiseData}
            options={totalIncomeTotalExpanseMonthwiseYearWiseOptions}
          />
        </Col>
      </Row>

       
      <Row>
        <Col>
          <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={expanseDaysWiseMonthlyData}
            options={expanseDaysWiseMonthlyOptions}
          />
        </Col>
      </Row>

    </>
  );
};

export default DashboardMain;
