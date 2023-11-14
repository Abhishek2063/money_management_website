import React, { useEffect, useState } from "react";
import "../../assets/css/Category.css";
import {
  Button,
  Loader,
  PlusOutlined,
  _,
  categoryGetByUserId,
  getUserDetails,
  message,
  useDispatch,
  usePrevious,
  useSelector,
} from "./index";
import CategoryModal from "./modal/CategoryModal";
import { handleSubmitButton } from "./eventHandler/event";
import CategoryTable from "./table/CategoryTable";

const CategoryMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryData, setCategoryData] = useState({
    category_name: "",
    category_type: "",
    description: "",
  });
  const [loader, setLoader] = useState(false);
  const userData = getUserDetails();

  const [categoryDataErr, setCategoryDataErr] = useState([]);
  const [categoryDataList, setCategoryDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setlimit] = useState(10);
  const [editModalBox, setEditModalBox] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      categoryGetByUserId({
        user_id: userData.userId,
        page: page,
      })
    );
    setLoader(true);
    // eslint-disable-next-line
  }, []);

  const categoryCreateData = useSelector(
    (state) => state.category.categoryCreateData
  );
  const prevcategoryCreateData = usePrevious({
    categoryCreateData,
  });
  useEffect(() => {
    if (
      prevcategoryCreateData &&
      prevcategoryCreateData.categoryCreateData !== categoryCreateData
    ) {
      if (categoryCreateData && categoryCreateData.success === true) {
        setIsModalOpen(false);
        setCategoryData({
          ...categoryData,
          category_name: "",
          category_type: "",
          description: "",
        });
        message.success(categoryCreateData.message);
        dispatch(categoryGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (categoryCreateData && categoryCreateData.success === false) {
        setLoader(false);

        if (Array.isArray(categoryCreateData.error)) {
          message.error("Invalid Data");
        } else if (typeof categoryCreateData.error === "string") {
          message.error(categoryCreateData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [categoryCreateData, prevcategoryCreateData]);

  const categoryGetByUserIdData = useSelector(
    (state) => state.category.categoryGetByUserIdData
  );
  const prevcategoryGetByUserIdData = usePrevious({
    categoryGetByUserIdData,
  });
  useEffect(() => {
    if (
      prevcategoryGetByUserIdData &&
      prevcategoryGetByUserIdData.categoryGetByUserIdData !==
        categoryGetByUserIdData
    ) {
      if (
        categoryGetByUserIdData &&
        _.has(categoryGetByUserIdData, "data") &&
        categoryGetByUserIdData.success === true
      ) {
        message.success(categoryGetByUserIdData.message);
        setCategoryDataList(categoryGetByUserIdData.data.recordsList);
        setPage(categoryGetByUserIdData.data.page);
        setTotalRecords(categoryGetByUserIdData.data.totalRecords);
        setlimit(categoryGetByUserIdData.data.limit);
        setTotalPage(categoryGetByUserIdData.data.totalPages);
        setLoader(false);
      }
      if (
        categoryGetByUserIdData &&
        categoryGetByUserIdData.success === false
      ) {
        setLoader(false);
        if (Array.isArray(categoryGetByUserIdData.error)) {
          message.error("Invalid Data");
        } else if (typeof categoryGetByUserIdData.error === "string") {
          message.error(categoryGetByUserIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [categoryGetByUserIdData, prevcategoryGetByUserIdData]);

  const categoryUpdateByUserIdCategoryIdData = useSelector(
    (state) => state.category.categoryUpdateByUserIdCategoryIdData
  );
  const prevcategoryUpdateByUserIdCategoryIdData = usePrevious({
    categoryUpdateByUserIdCategoryIdData,
  });
  useEffect(() => {
    if (
      prevcategoryUpdateByUserIdCategoryIdData &&
      prevcategoryUpdateByUserIdCategoryIdData.categoryUpdateByUserIdCategoryIdData !==
        categoryUpdateByUserIdCategoryIdData
    ) {
      if (
        categoryUpdateByUserIdCategoryIdData &&
        categoryUpdateByUserIdCategoryIdData.success === true
      ) {
        setEditModalBox(false);
        setCategoryData({
          ...categoryData,
          category_name: "",
          category_type: "",
          description: "",
        });
        message.success(categoryUpdateByUserIdCategoryIdData.message);
        dispatch(categoryGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (
        categoryUpdateByUserIdCategoryIdData &&
        categoryUpdateByUserIdCategoryIdData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(categoryUpdateByUserIdCategoryIdData.error)) {
          message.error("Invalid Data");
        } else if (
          typeof categoryUpdateByUserIdCategoryIdData.error === "string"
        ) {
          message.error(categoryUpdateByUserIdCategoryIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [
    categoryUpdateByUserIdCategoryIdData,
    prevcategoryUpdateByUserIdCategoryIdData,
  ]);

  const categoryDeleteByUserIdCategoryIdData = useSelector(
    (state) => state.category.categoryDeleteByUserIdCategoryIdData
  );
  const prevcategoryDeleteByUserIdCategoryIdData = usePrevious({
    categoryDeleteByUserIdCategoryIdData,
  });
  useEffect(() => {
    if (
      prevcategoryDeleteByUserIdCategoryIdData &&
      prevcategoryDeleteByUserIdCategoryIdData.categoryDeleteByUserIdCategoryIdData !==
        categoryDeleteByUserIdCategoryIdData
    ) {
      if (
        categoryDeleteByUserIdCategoryIdData &&
        categoryDeleteByUserIdCategoryIdData.success === true
      ) {
        message.success(categoryDeleteByUserIdCategoryIdData.message);
        dispatch(categoryGetByUserId({ user_id: userData.userId, page: page }));
        setLoader(true);
      }
      if (
        categoryDeleteByUserIdCategoryIdData &&
        categoryDeleteByUserIdCategoryIdData.success === false
      ) {
        setLoader(false);

        if (Array.isArray(categoryDeleteByUserIdCategoryIdData.error)) {
          message.error("Invalid Data");
        } else if (
          typeof categoryDeleteByUserIdCategoryIdData.error === "string"
        ) {
          message.error(categoryDeleteByUserIdCategoryIdData.error);
        } else {
          message.error("An error occurred."); // Handle other error types as needed
        }
      }
    } // eslint-disable-next-line
  }, [
    categoryDeleteByUserIdCategoryIdData,
    prevcategoryDeleteByUserIdCategoryIdData,
  ]);

  return (
    <>
      <div className="category-main">
        <div className="page-name">
          <h2>Category</h2>
        </div>
        <div className="add-category-button">
          <Button
            type="button"
            text="Add Category"
            className="add-category-button"
            icon={<PlusOutlined />}
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>
      <div className="mt-5">
        <CategoryTable
          categoryDataList={categoryDataList}
          page={page}
          totalRecords={totalRecords}
          limit={limit}
          userData={userData}
          dispatch={dispatch}
          setLoader={setLoader}
          totalPage={totalPage}
          setEditModalBox={setEditModalBox}
          editModalBox={editModalBox}
          categoryData={categoryData}
          setCategoryData={setCategoryData}
          categoryDataErr={categoryDataErr}
          setCategoryDataErr={setCategoryDataErr}
        />
      </div>

      <CategoryModal
        setIsModalOpen={setIsModalOpen}
        modalTitle="Add Category Details"
        isModalOpen={isModalOpen}
        handleSubmitButton={(e) =>
          handleSubmitButton(
            e,
            setLoader,
            categoryData,
            setCategoryData,
            categoryDataErr,
            setCategoryDataErr,
            dispatch,
            userData
          )
        }
        state={categoryData}
        setState={setCategoryData}
        errorState={categoryDataErr}
        setErrorState={setCategoryDataErr}
      />

      {loader && <Loader />}
    </>
  );
};

export default CategoryMain;
