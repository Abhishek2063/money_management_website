import React, { useEffect, useState } from "react";
import "../../assets/css/Budget.css";

import {
  Button,
  PlusOutlined,
  useDispatch,
  useSelector,
  getUserDetails,
  usePrevious,
  _,
  message,
  Loader,
  budgetGetByUserId,
} from "./index";
import BudgetModel from "./BudgetModel";
import { handleSubmitButton } from "./budgetEvent";
import BudgetTable from "./BudgetTable";
const BudgetMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budgetData, setBudgetData] = useState({
    budgetStartDate: "",
    budgetEndDate: "",
    amount: "",
  });
  const [loader, setLoader] = useState(false);
  const userData = getUserDetails();
  const [budgetDataErr, setbudgetDataErr] = useState([]);
  const [budgetDataList, setbudgetDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setlimit] = useState(10);
  const [editModalBox, setEditModalBox] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(budgetGetByUserId({ user_id: userData.userId, page: page }));
    setLoader(true);
    // eslint-disable-next-line
  }, []);

  const budgetGetByUserIdData = useSelector(
    (state) => state.budget.budgetGetByUserIdData
  );
  const prevbudgetGetByUserIdData = usePrevious({
    budgetGetByUserIdData,
  });
  useEffect(() => {
    if (
      prevbudgetGetByUserIdData &&
      prevbudgetGetByUserIdData.budgetGetByUserIdData !== budgetGetByUserIdData
    ) {
      if (
        budgetGetByUserIdData &&
        _.has(budgetGetByUserIdData, "data") &&
        budgetGetByUserIdData.success === true
      ) {
        message.success(budgetGetByUserIdData.message);
        setbudgetDataList(budgetGetByUserIdData.data.recordsList);
        setPage(budgetGetByUserIdData.data.page);
        setTotalRecords(budgetGetByUserIdData.data.totalRecords);
        setlimit(budgetGetByUserIdData.data.limit);
        setTotalPage(budgetGetByUserIdData.data.totalPages);
        setLoader(false);
      }
      if (budgetGetByUserIdData && budgetGetByUserIdData.success === false) {
        setLoader(false);
        if (Array.isArray(budgetGetByUserIdData.error)) {
          message.error("Invalid Data");
        } else if (typeof budgetGetByUserIdData.error === "string") {
          message.error(budgetGetByUserIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [budgetGetByUserIdData, prevbudgetGetByUserIdData]);

  const budgetStoreData = useSelector((state) => state.budget.budgetStoreData);
  const prevbudgetStoreData = usePrevious({
    budgetStoreData,
  });
  useEffect(() => {
    if (
      prevbudgetStoreData &&
      prevbudgetStoreData.budgetStoreData !== budgetStoreData
    ) {
      if (budgetStoreData && budgetStoreData.success === true) {
        setIsModalOpen(false);
        setBudgetData({
          ...budgetData,
          budgetStartDate: "",
          budgetEndDate: "",
          amount: "",
        });
        message.success(budgetStoreData.message);
        dispatch(budgetGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (budgetStoreData && budgetStoreData.success === false) {
        setLoader(false);

        if (Array.isArray(budgetStoreData.error)) {
          message.error("Invalid Data");
        } else if (typeof budgetStoreData.error === "string") {
          message.error(budgetStoreData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [budgetStoreData, prevbudgetStoreData]);

  const budgetUpdateByUserIdIdData = useSelector(
    (state) => state.budget.budgetUpdateByUserIdIdData
  );
  const prevbudgetUpdateByUserIdIdData = usePrevious({
    budgetUpdateByUserIdIdData,
  });
  useEffect(() => {
    if (
      prevbudgetUpdateByUserIdIdData &&
      prevbudgetUpdateByUserIdIdData.budgetUpdateByUserIdIdData !==
        budgetUpdateByUserIdIdData
    ) {
      if (
        budgetUpdateByUserIdIdData &&
        budgetUpdateByUserIdIdData.success === true
      ) {
        setEditModalBox(false);
        setBudgetData({
          ...budgetData,
          budgetStartDate: "",
          budgetEndDate: "",
          amount: "",
        });
        message.success(budgetUpdateByUserIdIdData.message);
        dispatch(budgetGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (
        budgetUpdateByUserIdIdData &&
        budgetUpdateByUserIdIdData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(budgetUpdateByUserIdIdData.error)) {
          message.error("Invalid Data");
        } else if (typeof budgetUpdateByUserIdIdData.error === "string") {
          message.error(budgetUpdateByUserIdIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [budgetUpdateByUserIdIdData, prevbudgetUpdateByUserIdIdData]);

  const budgetDeleteByUserIdIdData = useSelector(
    (state) => state.budget.budgetDeleteByUserIdIdData
  );
  const prevbudgetDeleteByUserIdIdData = usePrevious({
    budgetDeleteByUserIdIdData,
  });
  useEffect(() => {
    if (
      prevbudgetDeleteByUserIdIdData &&
      prevbudgetDeleteByUserIdIdData.budgetDeleteByUserIdIdData !==
        budgetDeleteByUserIdIdData
    ) {
      if (
        budgetDeleteByUserIdIdData &&
        budgetDeleteByUserIdIdData.success === true
      ) {
        message.success(budgetDeleteByUserIdIdData.message);
        dispatch(budgetGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (
        budgetDeleteByUserIdIdData &&
        budgetDeleteByUserIdIdData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(budgetDeleteByUserIdIdData.error)) {
          message.error("Invalid Data");
        } else if (typeof budgetDeleteByUserIdIdData.error === "string") {
          message.error(budgetDeleteByUserIdIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [budgetDeleteByUserIdIdData, prevbudgetDeleteByUserIdIdData]);
  return (
    <>
      <div className="budget-main">
        <div className="page-name">
          <h2>Budget</h2>
        </div>
        <div className="add-budget-button">
          <Button
            type="button"
            text="Add Budget"
            className="add-budget-button"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <BudgetModel
        setIsModalOpen={setIsModalOpen}
        modalTitle="Add Budget Details"
        isModalOpen={isModalOpen}
        handleSubmitButton={(e) =>
          handleSubmitButton(
            e,
            setLoader,
            budgetData,
            setBudgetData,
            budgetDataErr,
            setbudgetDataErr,
            dispatch,
            userData
          )
        }
        state={budgetData}
        setState={setBudgetData}
        errorState={budgetDataErr}
        setErrorState={setbudgetDataErr}
      />
      <BudgetTable
        budgetDataList={budgetDataList}
        page={page}
        totalRecords={totalRecords}
        limit={limit}
        userData={userData}
        dispatch={dispatch}
        setLoader={setLoader}
        totalPage={totalPage}
        setEditModalBox={setEditModalBox}
        editModalBox={editModalBox}
        budgetData={budgetData}
        setBudgetData={setBudgetData}
        budgetDataErr={budgetDataErr}
        setbudgetDataErr={setbudgetDataErr}
      />
      {loader && <Loader />}
    </>
  );
};

export default BudgetMain;
