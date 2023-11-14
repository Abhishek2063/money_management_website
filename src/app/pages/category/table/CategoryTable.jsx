import React, { useState } from "react";
import {
  Button,
  DeleteOutlined,
  EditOutlined,
  PaginationFooter,
  Table,
  _,
} from "../index";
import {
  getPageData,
  handleDeleteCategoryDetails,
  handleEditCategoryButton,
  handleEditCategoryDetails,
} from "../eventHandler/event";
import CategoryModal from "../modal/CategoryModal";
const CategoryTable = (props) => {
  const [editCategoryDetailsId, setEditCategoryDetailsId] = useState("");

  // Function to capitalize the first letter of each word
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Description</th>
            <th>Category Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.categoryDataList && props.categoryDataList.length > 0 ? (
            _.map(props.categoryDataList, (data, i) => {
              return (
                <tr key={i + 1}>
                  <td>
                    {data.category_name
                      ? capitalizeFirstLetter(data.category_name)
                      : "N/A"}
                  </td>
                  <td>
                    {data.description
                      ? capitalizeFirstLetter(data.description)
                      : "N/A"}
                  </td>
                  <td>
                    {data.category_type
                      ? capitalizeFirstLetter(data.category_type)
                      : "N/A"}
                  </td>
                  <td>
                    <Button
                      type="button"
                      //   text="Add expanse"
                      className="edit-icon"
                      icon={<EditOutlined />}
                      onClick={() =>
                        handleEditCategoryDetails(
                          props.categoryData,
                          props.setCategoryData,
                          props.setEditModalBox,
                          data,
                          setEditCategoryDetailsId
                        )
                      }
                    />
                    <Button
                      type="button"
                      //   text="Add Expanse"
                      className="delete-icon "
                      icon={<DeleteOutlined />}
                      onClick={() =>
                        handleDeleteCategoryDetails(
                          data,
                          props.userData,
                          props.setLoader,
                          props.dispatch
                        )
                      }
                    />
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="12" className="text-center">
                No Record Found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {props.totalPage > 1 ? (
        <PaginationFooter
          getPageData={(data) =>
            getPageData(data, props.userData, props.dispatch, props.setLoader)
          }
          pageNo={props.page}
          totalRecords={props.totalRecords}
          limit={props.limit}
        />
      ) : (
        ""
      )}

      <CategoryModal
        setIsModalOpen={props.setEditModalBox}
        modalTitle="Edit Category Details"
        isModalOpen={props.editModalBox}
        handleSubmitButton={(e) =>
          handleEditCategoryButton(
            e,
            props.setLoader,
            props.categoryData,
            props.setCategoryData,
            props.categoryDataErr,
            props.setCategoryDataErr,
            props.dispatch,
            props.userData,
            editCategoryDetailsId
          )
        }
        state={props.categoryData}
        setState={props.setCategoryData}
        errorState={props.categoryDataErr}
        setErrorState={props.setCategoryDataErr}
      />
    </>
  );
};

export default CategoryTable;
