import React, { useState } from "react";
import {
  getPageData,
  handleDeleteExpanseDetails,
  handleEditExpanseButton,
  handleEditExpanseDetails,
} from "../eventHandler/event";
import ExpanseModal from "../modal/ExpanseModal";
import {
  Table,
  _,
  dayjs,
  PaginationFooter,
  EditOutlined,
  DeleteOutlined,
  Button,
} from "../index";
const ExpanseTable = (props) => {
  const [editExpanseDetailsId, setEditExpanseDetailsId] = useState("");
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.expanseDataList && props.expanseDataList.length > 0 ? (
            _.map(props.expanseDataList, (data, i) => {
              return (
                <tr key={i + 1}>
                  <td>{dayjs(data.date).format("MM-DD-YYYY")}</td>
                  <td>{data.amount}</td>
                  <td>{data.category_id.category_name}</td>
                  <td>{data.description}</td>
                  <td>
                    <Button
                      type="button"
                      //   text="Add expanse"
                      className="edit-icon"
                      icon={<EditOutlined />}
                      onClick={() =>
                        handleEditExpanseDetails(
                          props.expanseData,
                          props.setExpanseData,
                          props.setEditModalBox,
                          data,
                          setEditExpanseDetailsId
                        )
                      }
                    />
                    <Button
                      type="button"
                      //   text="Add Expanse"
                      className="delete-icon "
                      icon={<DeleteOutlined />}
                      onClick={() =>
                        handleDeleteExpanseDetails(
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

      <ExpanseModal
        setIsModalOpen={props.setEditModalBox}
        modalTitle="Edit Expanse Details"
        isModalOpen={props.editModalBox}
        handleSubmitButton={(e) =>
          handleEditExpanseButton(
            e,
            props.setLoader,
            props.expanseData,
            props.setExpanseData,
            props.expanseDataErr,
            props.setExpanseDataErr,
            props.dispatch,
            props.userData,
            editExpanseDetailsId
          )
        }
        state={props.expanseData}
        setState={props.setExpanseData}
        errorState={props.expanseDataErr}
        setErrorState={props.setExpanseDataErr}
        categoryList={props.categoryList}
      />
    </>
  );
};

export default ExpanseTable;
