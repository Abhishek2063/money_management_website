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
  Loader,
  DateInput,
  dayjs,
  SelectInput,
  Button,
} from "./index";
import {
  expanseDaysWiseMonthlyOptions,
  handleMonthDaySelectChange,
  handleTotalExpanseIncomeCategorySubmit,
  handleTotalExpanseIncomeSubmit,
  handleTotalIncomeExpanseCategoryWiseEndDateChange,
  handleTotalIncomeExpanseCategoryWiseStartDateChange,
  handleTotalIncomeExpanseStateEndDateChange,
  handleTotalIncomeExpanseStateStartDateChange,
  handleTypeSelectChange,
  handleexpanseDaysWiseMonthlyStateSubmit,
  handletotalIncomeTotalExpanseMonthwiseYearWiseStateSubmit,
  totalIncomeExpanseCategoryWiseOption,
  totalIncomeExpanseOption,
  totalIncomeTotalExpanseMonthwiseYearWiseOptions,
} from "./event";
import { Select } from "antd";

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
  // ************************************
  const [
    totalIncomeExpanseCategoryWiseState,
    setTotalIncomeExpanseCategoryWiseState,
  ] = useState({
    startDate: "",
    endDate: "",
  });

  const [totalIncomeExpanseState, setTotalIncomeExpanseState] = useState({
    startDate: "",
    endDate: "",
  });

  const [
    totalIncomeTotalExpanseMonthwiseYearWiseState,
    setTotalIncomeTotalExpanseMonthwiseYearWiseState,
  ] = useState({
    type: "",
  });

  const [expanseDaysWiseMonthlyState, setExpanseDaysWiseMonthlyState] =
    useState({
      month: "",
    });

  const [loader, setLoader] = useState(false);
  const userData = getUserDetails();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getToalIncomeExpanse({ user_id: userData.userId }));
    dispatch(getExpenseByCategory({ user_id: userData.userId }));
    dispatch(getIncomeExpenseSummary({ user_id: userData.userId }));
    dispatch(getExpenseDays({ user_id: userData.userId }));
    setLoader(true);
    // eslint-disable-next-line
  }, []);

  const { Option } = Select;
  const type_section_array = ["yearly", "monthly"];
  // type dropdown handling
  const typeDropDownList = [];
  type_section_array.forEach(function (item, i) {
    typeDropDownList.push(
      <Option key={i + 1} value={item}>
        {item}
      </Option>
    );
  });

  const monthDay_section_array = [
    { id: 1, name: "January" },
    { id: 2, name: "February" },
    { id: 3, name: "March" },
    { id: 4, name: "April" },
    { id: 5, name: "May" },
    { id: 6, name: "June" },
    { id: 7, name: "July" },
    { id: 8, name: "August" },
    { id: 9, name: "September" },
    { id: 10, name: "October" },
    { id: 11, name: "November" },
    { id: 12, name: "December" },
  ];
  // monthDay dropdown handling
  const monthDayDropDownList = [];
  monthDay_section_array.forEach(function (item, i) {
    monthDayDropDownList.push(
      <Option key={i + 1} value={item.id}>
        {item.name}
      </Option>
    );
  });

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
        setLoader(false);
        console.log(getToalIncomeExpanseData, "getToalIncomeExpanseData");
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
        setLoader(false);
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
        setLoader(false);
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
        setLoader(false);
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
  return (
    <>
      <div className="card-container">
        <Row className="mt-0">
          <Col xs={12} md={6} lg={6}>
            <div className="card">
              <h3>Total Income/Expense</h3>
              {/* date input field */}
              <DateInput
                name="startDate"
                label=" Start Date"
                value={
                  totalIncomeExpanseState.startDate
                    ? dayjs(totalIncomeExpanseState.startDate)
                    : ""
                }
                onChange={(val) =>
                  handleTotalIncomeExpanseStateStartDateChange(
                    val,
                    totalIncomeExpanseState,
                    setTotalIncomeExpanseState
                  )
                }
              />

              <DateInput
                name="endDate"
                label=" End Date"
                value={
                  totalIncomeExpanseState.endDate
                    ? dayjs(totalIncomeExpanseState.endDate)
                    : ""
                }
                onChange={(val) =>
                  handleTotalIncomeExpanseStateEndDateChange(
                    val,
                    totalIncomeExpanseState,
                    setTotalIncomeExpanseState
                  )
                }
              />
              <div className="add-dashboard-button">
                <Button
                  type="button"
                  text="Submit"
                  className="submit-button"
                  onClick={() =>
                    handleTotalExpanseIncomeSubmit(
                      dispatch,
                      totalIncomeExpanseState,
                      setLoader,
                      userData
                    )
                  }
                />
              </div>
              <Chart
                chartType="PieChart"
                data={totalIncomeExpanseData}
                options={totalIncomeExpanseOption}
                width={"100%"}
                height={"400px"}
              />
            </div>
          </Col>
          <Col xs={12} md={6} lg={6}>
            <div className="card">
              <h3>Total Income/Expense Category-wise</h3>
              {/* date input field */}
              <DateInput
                name="startDate"
                label=" Start Date"
                value={
                  totalIncomeExpanseCategoryWiseState.startDate
                    ? dayjs(totalIncomeExpanseCategoryWiseState.startDate)
                    : ""
                }
                onChange={(val) =>
                  handleTotalIncomeExpanseCategoryWiseStartDateChange(
                    val,
                    totalIncomeExpanseCategoryWiseState,
                    setTotalIncomeExpanseCategoryWiseState
                  )
                }
              />

              <DateInput
                name="endDate"
                label=" End Date"
                value={
                  totalIncomeExpanseCategoryWiseState.endDate
                    ? dayjs(totalIncomeExpanseCategoryWiseState.endDate)
                    : ""
                }
                onChange={(val) =>
                  handleTotalIncomeExpanseCategoryWiseEndDateChange(
                    val,
                    totalIncomeExpanseCategoryWiseState,
                    setTotalIncomeExpanseCategoryWiseState
                  )
                }
              />
              <div className="add-dashboard-button">
                <Button
                  type="button"
                  text="Submit"
                  className="submit-button"
                  onClick={() =>
                    handleTotalExpanseIncomeCategorySubmit(
                      dispatch,
                      totalIncomeExpanseCategoryWiseState,
                      setLoader,
                      userData
                    )
                  }
                />
              </div>
              <Chart
                chartType="PieChart"
                data={totalIncomeExpanseCategoryWiseData}
                options={totalIncomeExpanseCategoryWiseOption}
                width={"100%"}
                height={"400px"}
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
          <div className="card">
              <h3>Total Income/Expense Month-wise & Year-wise</h3>
          <Row>
          <Col xs={12} md={6} lg={6}>
          <SelectInput
                name="type"
                label="Select Type"
                value={totalIncomeTotalExpanseMonthwiseYearWiseState.type}
                onChange={(value) =>
                  handleTypeSelectChange(
                    value,
                    totalIncomeTotalExpanseMonthwiseYearWiseState,
                    setTotalIncomeTotalExpanseMonthwiseYearWiseState
                  )
                }
                selectOptionArray={typeDropDownList}
              />
            </Col>
            <Col xs={12} md={6} lg={6}>
        
              
              <div className="add-dashboard-button">
                <Button
                  type="button"
                  text="Submit"
                  className="submit-button"
                  onClick={() =>
                    handletotalIncomeTotalExpanseMonthwiseYearWiseStateSubmit(
                      dispatch,
                      totalIncomeTotalExpanseMonthwiseYearWiseState,
                      setLoader,
                      userData
                    )
                  }
                />
              </div>
            </Col>
          </Row>
           
              <Chart
                chartType="Bar"
                width="100%"
                height="400px"
                data={totalIncomeTotalExpanseMonthwiseYearWiseData}
                options={totalIncomeTotalExpanseMonthwiseYearWiseOptions}
              />
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <div className="card">
              <h3>Expense Days-wise Monthly</h3>
              <Row>
                <Col xs={12} md={6} lg={6}>
                  <SelectInput
                    name="month"
                    label="Select Month"
                    value={expanseDaysWiseMonthlyState.month}
                    onChange={(value) =>
                      handleMonthDaySelectChange(
                        value,
                        expanseDaysWiseMonthlyState,
                        setExpanseDaysWiseMonthlyState
                      )
                    }
                    selectOptionArray={monthDayDropDownList}
                  />
                </Col>
                <Col xs={12} md={6} lg={6}>
                  <div className="add-dashboard-button mt-4">
                    <Button
                      type="button"
                      text="Submit"
                      className="submit-button"
                      onClick={() =>
                        handleexpanseDaysWiseMonthlyStateSubmit(
                          dispatch,
                          expanseDaysWiseMonthlyState,
                          setLoader,
                          userData
                        )
                      }
                    />
                  </div>
                </Col>
              </Row>

              <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={expanseDaysWiseMonthlyData}
                options={expanseDaysWiseMonthlyOptions}
              />
            </div>
          </Col>
        </Row>
      </div>

      {loader && <Loader />}
    </>
  );
};

export default DashboardMain;
