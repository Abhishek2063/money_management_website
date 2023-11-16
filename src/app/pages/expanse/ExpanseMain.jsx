import React, { useEffect, useRef, useState } from "react";
import "../../assets/css/Expanse.css";
import ExpanseModal from "./modal/ExpanseModal";
import { handleFileSelect, handleSubmitButton } from "./eventHandler/event";
import ExpanseTable from "./table/ExpanseTable";
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
  expanseGetByUserId,
} from "./index";
import { ImportOutlined } from "@ant-design/icons";
const ExpanseMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanseData, setExpanseData] = useState({
    expanseDate: "",
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

  const [expanseDataErr, setExpanseDataErr] = useState([]);
  const [expanseDataList, setExpanseDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setlimit] = useState(10);
  const [editModalBox, setEditModalBox] = useState(false);
  // Reference to the file input element
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      categoryGetByUserIdCategoryType({
        user_id: userData.userId,
        category_type: "expense",
      })
    );
    dispatch(expanseGetByUserId({ user_id: userData.userId, page: page }));
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

  const expanseStoreData = useSelector(
    (state) => state.expanse.expanseStoreData
  );
  const prevexpanseStoreData = usePrevious({
    expanseStoreData,
  });
  useEffect(() => {
    if (
      prevexpanseStoreData &&
      prevexpanseStoreData.expanseStoreData !== expanseStoreData
    ) {
      if (expanseStoreData && expanseStoreData.success === true) {
        setIsModalOpen(false);
        setExpanseData({
          ...expanseData,
          expanseDate: "",
          description: "",
          amount: "",
          category_name: "",
          other_category_show: false,
          other_category: "",
        });
        message.success(expanseStoreData.message);
        dispatch(expanseGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (expanseStoreData && expanseStoreData.success === false) {
        setLoader(false);

        if (Array.isArray(expanseStoreData.error)) {
          message.error("Invalid Data");
        } else if (typeof expanseStoreData.error === "string") {
          message.error(expanseStoreData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [expanseStoreData, prevexpanseStoreData]);

  const expanseGetByUserIdData = useSelector(
    (state) => state.expanse.expanseGetByUserIdData
  );
  const prevexpanseGetByUserIdData = usePrevious({
    expanseGetByUserIdData,
  });
  useEffect(() => {
    if (
      prevexpanseGetByUserIdData &&
      prevexpanseGetByUserIdData.expanseGetByUserIdData !==
        expanseGetByUserIdData
    ) {
      if (
        expanseGetByUserIdData &&
        _.has(expanseGetByUserIdData, "data") &&
        expanseGetByUserIdData.success === true
      ) {
        message.success(expanseGetByUserIdData.message);
        setExpanseDataList(expanseGetByUserIdData.data.recordsList);
        setPage(expanseGetByUserIdData.data.page);
        setTotalRecords(expanseGetByUserIdData.data.totalRecords);
        setlimit(expanseGetByUserIdData.data.limit);
        setTotalPage(expanseGetByUserIdData.data.totalPages);
        setLoader(false);
      }
      if (expanseGetByUserIdData && expanseGetByUserIdData.success === false) {
        setLoader(false);
        if (Array.isArray(expanseGetByUserIdData.error)) {
          message.error("Invalid Data");
        } else if (typeof expanseGetByUserIdData.error === "string") {
          message.error(expanseGetByUserIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [expanseGetByUserIdData, prevexpanseGetByUserIdData]);

  const expanseUpdateByUserIdIncomeIdData = useSelector(
    (state) => state.expanse.expanseUpdateByUserIdIncomeIdData
  );
  const prevexpanseUpdateByUserIdIncomeIdData = usePrevious({
    expanseUpdateByUserIdIncomeIdData,
  });
  useEffect(() => {
    if (
      prevexpanseUpdateByUserIdIncomeIdData &&
      prevexpanseUpdateByUserIdIncomeIdData.expanseUpdateByUserIdIncomeIdData !==
        expanseUpdateByUserIdIncomeIdData
    ) {
      if (
        expanseUpdateByUserIdIncomeIdData &&
        expanseUpdateByUserIdIncomeIdData.success === true
      ) {
        setEditModalBox(false);
        setExpanseData({
          ...expanseData,
          expanseDate: "",
          description: "",
          amount: "",
          category_name: "",
          other_category_show: false,
          other_category: "",
        });
        message.success(expanseUpdateByUserIdIncomeIdData.message);
        dispatch(expanseGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (
        expanseUpdateByUserIdIncomeIdData &&
        expanseUpdateByUserIdIncomeIdData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(expanseUpdateByUserIdIncomeIdData.error)) {
          message.error("Invalid Data");
        } else if (
          typeof expanseUpdateByUserIdIncomeIdData.error === "string"
        ) {
          message.error(expanseUpdateByUserIdIncomeIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [
    expanseUpdateByUserIdIncomeIdData,
    prevexpanseUpdateByUserIdIncomeIdData,
  ]);

  const expanseDeleteByUserIdIncomeIdData = useSelector(
    (state) => state.expanse.expanseDeleteByUserIdIncomeIdData
  );
  const prevexpanseDeleteByUserIdIncomeIdData = usePrevious({
    expanseDeleteByUserIdIncomeIdData,
  });
  useEffect(() => {
    if (
      prevexpanseDeleteByUserIdIncomeIdData &&
      prevexpanseDeleteByUserIdIncomeIdData.expanseDeleteByUserIdIncomeIdData !==
        expanseDeleteByUserIdIncomeIdData
    ) {
      if (
        expanseDeleteByUserIdIncomeIdData &&
        expanseDeleteByUserIdIncomeIdData.success === true
      ) {
        message.success(expanseDeleteByUserIdIncomeIdData.message);
        dispatch(expanseGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (
        expanseDeleteByUserIdIncomeIdData &&
        expanseDeleteByUserIdIncomeIdData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(expanseDeleteByUserIdIncomeIdData.error)) {
          message.error("Invalid Data");
        } else if (
          typeof expanseDeleteByUserIdIncomeIdData.error === "string"
        ) {
          message.error(expanseDeleteByUserIdIncomeIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [
    expanseDeleteByUserIdIncomeIdData,
    prevexpanseDeleteByUserIdIncomeIdData,
  ]);

  const expanseImportExcelFileData = useSelector(
    (state) => state.expanse.expanseImportExcelFileData
  );
  const prevexpanseImportExcelFileData = usePrevious({
    expanseImportExcelFileData,
  });
  useEffect(() => {
    if (
      prevexpanseImportExcelFileData &&
      prevexpanseImportExcelFileData.expanseImportExcelFileData !==
        expanseImportExcelFileData
    ) {
      if (
        expanseImportExcelFileData &&
        expanseImportExcelFileData.success === true
      ) {
        message.success(expanseImportExcelFileData.message);
        dispatch(expanseGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (
        expanseImportExcelFileData &&
        expanseImportExcelFileData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(expanseImportExcelFileData.error)) {
          message.error("Invalid Data");
        } else if (typeof expanseImportExcelFileData.error === "string") {
          message.error(expanseImportExcelFileData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [expanseImportExcelFileData, prevexpanseImportExcelFileData]);

  return (
    <>
      <div className="expanse-main">
        <div className="page-name">
          <h2>Expense</h2>
        </div>
        {/* Import Data Button */}
        <div className="add-income-button">
          <label htmlFor="fileInput">
            <Button
              type="button"
              text="Import Data"
              className="add-income-button"
              icon={<ImportOutlined />}
              onClick={() => fileInputRef.current.click()}
            />
          </label>
          {/* File Input Hidden Element */}
          <input
            ref={fileInputRef}
            id="fileInput"
            type="file"
            accept=".xlsx"
            onChange={(e) => handleFileSelect(e, userData, dispatch, setLoader)}
            style={{ display: "none" }}
          />
        </div>
        <div className="add-expanse-button">
          <Button
            type="button"
            text="Add Expanse"
            className="add-expanse-button"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <div className="mt-5">
        <ExpanseTable
          expanseDataList={expanseDataList}
          page={page}
          totalRecords={totalRecords}
          limit={limit}
          userData={userData}
          dispatch={dispatch}
          setLoader={setLoader}
          totalPage={totalPage}
          setEditModalBox={setEditModalBox}
          editModalBox={editModalBox}
          expanseData={expanseData}
          setExpanseData={setExpanseData}
          expanseDataErr={expanseDataErr}
          setExpanseDataErr={setExpanseDataErr}
          categoryList={categoryList}
        />
      </div>
      <ExpanseModal
        setIsModalOpen={setIsModalOpen}
        modalTitle="Add Expanse Details"
        isModalOpen={isModalOpen}
        handleSubmitButton={(e) =>
          handleSubmitButton(
            e,
            setLoader,
            expanseData,
            setExpanseData,
            expanseDataErr,
            setExpanseDataErr,
            dispatch,
            userData
          )
        }
        state={expanseData}
        setState={setExpanseData}
        errorState={expanseDataErr}
        setErrorState={setExpanseDataErr}
        categoryList={categoryList}
      />

      {loader && <Loader />}
    </>
  );
};

export default ExpanseMain;
