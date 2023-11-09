import React, { useEffect, useState } from "react";
import "../../assets/css/Income.css";
import IncomeModal from "./modal/IncomeModal";
import { handleSubmitButton } from "./eventHandler/event";
import IncomeTable from "./table/IncomeTable";
import {
  Button,
  PlusOutlined,
  useDispatch,
  useSelector,
  categoryGetByUserIdCategoryType,
  getUserDetails,
  usePrevious,
  _,
  message,
  Loader,
  incomeGetByUserId,
} from "./index";
const IncomeMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incomeData, setIncomeData] = useState({
    incomeDate: "",
    description: "",
    amount: "",
    category_name: "",
    other_category_show: false,
    other_category: "",
    other_category_description: "",
  });
  const [categoryList, setCategoryList] = useState([]);
  const [loader, setLoader] = useState(false);
  const userData = getUserDetails();

  const [incomeDataErr, setIncomeDataErr] = useState([]);
  const [incomeDataList, setIncomeDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setlimit] = useState(10);
  const [editModalBox, setEditModalBox] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      categoryGetByUserIdCategoryType({
        user_id: userData.userId,
        category_type: "income",
      })
    );
    dispatch(incomeGetByUserId({ user_id: userData.userId, page: page }));
    setLoader(true);
    // eslint-disable-next-line
  }, []);

  const categoryGetByUserIdCategoryTypeData = useSelector(
    (state) => state.category.categoryGetByUserIdCategoryTypeData
  );
  const prevcategoryGetByUserIdCategoryTypeData = usePrevious({
    categoryGetByUserIdCategoryTypeData,
  });
  useEffect(() => {
    if (
      prevcategoryGetByUserIdCategoryTypeData &&
      prevcategoryGetByUserIdCategoryTypeData.categoryGetByUserIdCategoryTypeData !==
        categoryGetByUserIdCategoryTypeData
    ) {
      if (
        categoryGetByUserIdCategoryTypeData &&
        _.has(categoryGetByUserIdCategoryTypeData, "data") &&
        categoryGetByUserIdCategoryTypeData.success === true
      ) {
        message.success(categoryGetByUserIdCategoryTypeData.message);
        setCategoryList(categoryGetByUserIdCategoryTypeData.data);
      }
      if (
        categoryGetByUserIdCategoryTypeData &&
        categoryGetByUserIdCategoryTypeData.success === false
      ) {
        if (Array.isArray(categoryGetByUserIdCategoryTypeData.error)) {
          message.error("Invalid Data");
        } else if (
          typeof categoryGetByUserIdCategoryTypeData.error === "string"
        ) {
          message.error(categoryGetByUserIdCategoryTypeData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [
    categoryGetByUserIdCategoryTypeData,
    prevcategoryGetByUserIdCategoryTypeData,
  ]);

  const incomeStoreData = useSelector((state) => state.income.incomeStoreData);
  const previncomeStoreData = usePrevious({
    incomeStoreData,
  });
  useEffect(() => {
    if (
      previncomeStoreData &&
      previncomeStoreData.incomeStoreData !== incomeStoreData
    ) {
      if (incomeStoreData && incomeStoreData.success === true) {
        setIsModalOpen(false);
        setIncomeData({
          ...incomeData,
          incomeDate: "",
          description: "",
          amount: "",
          category_name: "",
          other_category_show: false,
          other_category: "",
        });
        message.success(incomeStoreData.message);
        dispatch(incomeGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (incomeStoreData && incomeStoreData.success === false) {
        setLoader(false);

        if (Array.isArray(incomeStoreData.error)) {
          message.error("Invalid Data");
        } else if (typeof incomeStoreData.error === "string") {
          message.error(incomeStoreData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [incomeStoreData, previncomeStoreData]);

  const incomeGetByUserIdData = useSelector(
    (state) => state.income.incomeGetByUserIdData
  );
  const previncomeGetByUserIdData = usePrevious({
    incomeGetByUserIdData,
  });
  useEffect(() => {
    if (
      previncomeGetByUserIdData &&
      previncomeGetByUserIdData.incomeGetByUserIdData !== incomeGetByUserIdData
    ) {
      if (
        incomeGetByUserIdData &&
        _.has(incomeGetByUserIdData, "data") &&
        incomeGetByUserIdData.success === true
      ) {
        message.success(incomeGetByUserIdData.message);
        setIncomeDataList(incomeGetByUserIdData.data.recordsList);
        setPage(incomeGetByUserIdData.data.page);
        setTotalRecords(incomeGetByUserIdData.data.totalRecords);
        setlimit(incomeGetByUserIdData.data.limit);
        setTotalPage(incomeGetByUserIdData.data.totalPages);
        setLoader(false);
      }
      if (incomeGetByUserIdData && incomeGetByUserIdData.success === false) {
        setLoader(false);
        if (Array.isArray(incomeGetByUserIdData.error)) {
          message.error("Invalid Data");
        } else if (typeof incomeGetByUserIdData.error === "string") {
          message.error(incomeGetByUserIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [incomeGetByUserIdData, previncomeGetByUserIdData]);

  const incomeUpdateByUserIdIncomeIdData = useSelector(
    (state) => state.income.incomeUpdateByUserIdIncomeIdData
  );
  const previncomeUpdateByUserIdIncomeIdData = usePrevious({
    incomeUpdateByUserIdIncomeIdData,
  });
  useEffect(() => {
    if (
      previncomeUpdateByUserIdIncomeIdData &&
      previncomeUpdateByUserIdIncomeIdData.incomeUpdateByUserIdIncomeIdData !==
        incomeUpdateByUserIdIncomeIdData
    ) {
      if (
        incomeUpdateByUserIdIncomeIdData &&
        incomeUpdateByUserIdIncomeIdData.success === true
      ) {
        setEditModalBox(false);
        setIncomeData({
          ...incomeData,
          incomeDate: "",
          description: "",
          amount: "",
          category_name: "",
          other_category_show: false,
          other_category: "",
        });
        message.success(incomeUpdateByUserIdIncomeIdData.message);
        dispatch(incomeGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (
        incomeUpdateByUserIdIncomeIdData &&
        incomeUpdateByUserIdIncomeIdData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(incomeUpdateByUserIdIncomeIdData.error)) {
          message.error("Invalid Data");
        } else if (typeof incomeUpdateByUserIdIncomeIdData.error === "string") {
          message.error(incomeUpdateByUserIdIncomeIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [incomeUpdateByUserIdIncomeIdData, previncomeUpdateByUserIdIncomeIdData]);

  const incomeDeleteByUserIdIncomeIdData = useSelector(
    (state) => state.income.incomeDeleteByUserIdIncomeIdData
  );
  const previncomeDeleteByUserIdIncomeIdData = usePrevious({
    incomeDeleteByUserIdIncomeIdData,
  });
  useEffect(() => {
    if (
      previncomeDeleteByUserIdIncomeIdData &&
      previncomeDeleteByUserIdIncomeIdData.incomeDeleteByUserIdIncomeIdData !==
        incomeDeleteByUserIdIncomeIdData
    ) {
      if (
        incomeDeleteByUserIdIncomeIdData &&
        incomeDeleteByUserIdIncomeIdData.success === true
      ) {
        message.success(incomeDeleteByUserIdIncomeIdData.message);
        dispatch(incomeGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (
        incomeDeleteByUserIdIncomeIdData &&
        incomeDeleteByUserIdIncomeIdData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(incomeDeleteByUserIdIncomeIdData.error)) {
          message.error("Invalid Data");
        } else if (typeof incomeDeleteByUserIdIncomeIdData.error === "string") {
          message.error(incomeDeleteByUserIdIncomeIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [incomeDeleteByUserIdIncomeIdData, previncomeDeleteByUserIdIncomeIdData]);

  return (
    <>
      <div className="income-main">
        <div className="page-name">
          <h2>INCOME</h2>
        </div>
        <div className="add-income-button">
          <Button
            type="button"
            text="Add Income"
            className="add-income-button"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <div className="mt-5">
        <IncomeTable
          incomeDataList={incomeDataList}
          page={page}
          totalRecords={totalRecords}
          limit={limit}
          userData={userData}
          dispatch={dispatch}
          setLoader={setLoader}
          totalPage={totalPage}
          setEditModalBox={setEditModalBox}
          editModalBox={editModalBox}
          incomeData={incomeData}
          setIncomeData={setIncomeData}
          incomeDataErr={incomeDataErr}
          setIncomeDataErr={setIncomeDataErr}
          categoryList={categoryList}
        />
      </div>
      <IncomeModal
        setIsModalOpen={setIsModalOpen}
        modalTitle="Add Income Details"
        isModalOpen={isModalOpen}
        handleSubmitButton={(e) =>
          handleSubmitButton(
            e,
            setLoader,
            incomeData,
            setIncomeData,
            incomeDataErr,
            setIncomeDataErr,
            dispatch,
            userData
          )
        }
        state={incomeData}
        setState={setIncomeData}
        errorState={incomeDataErr}
        setErrorState={setIncomeDataErr}
        categoryList={categoryList}
      />

      {loader && <Loader />}
    </>
  );
};

export default IncomeMain;
