import React, { useEffect, useState } from "react";
import Button from "../../components/ButtonComponents/Button";
import { PlusOutlined } from "@ant-design/icons";
import "../../assets/css/Income.css";
import IncomeModal from "./modal/IncomeModal";
import { useDispatch, useSelector } from "react-redux";
import { categoryGetByUserIdCategoryType } from "../../redux/category/category.action";
import { getUserDetails } from "../../storage/user";
import { usePrevious } from "../../common/custom";
import _ from "lodash";
import { message } from "antd";
import Loader from "../../common/loader";
import { handleSubmitButton } from "./eventHandler/event";
const IncomeMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [incomeData, setIncomeData] = useState({
    incomeDate: "",
    description: "",
    amount: "",
    category_name: "",
    other_category_show: false,
    other_category: "",
    other_category_description:""
  });
  const [categoryList, setCategoryList] = useState([]);
  const [loader, setLoader] = useState(false);
  const userData = getUserDetails();

  const [incomeDataErr, setIncomeDataErr] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      categoryGetByUserIdCategoryType({
        user_id: userData.userId,
        category_type: "income",
      })
    );
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
        setLoader(false);
      }
      if (
        categoryGetByUserIdCategoryTypeData &&
        categoryGetByUserIdCategoryTypeData.success === false
      ) {
        setLoader(false);

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

  const incomeStoreData = useSelector(
    (state) => state.income.incomeStoreData
  );
  const previncomeStoreData = usePrevious({
    incomeStoreData,
  });
  useEffect(() => {
   
    if (
      previncomeStoreData &&
      previncomeStoreData.incomeStoreData !==
        incomeStoreData
    ) {
      if (
        incomeStoreData &&
        incomeStoreData.success === true
      ) {
        setIsModalOpen(false)
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
        setLoader(false);
      }
      if (
        incomeStoreData &&
        incomeStoreData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(incomeStoreData.error)) {
          message.error("Invalid Data");
        } else if (
          typeof incomeStoreData.error === "string"
        ) {
          message.error(incomeStoreData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [
    incomeStoreData,
    previncomeStoreData,
  ]);

  return (
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
    </div>
  );
};

export default IncomeMain;
