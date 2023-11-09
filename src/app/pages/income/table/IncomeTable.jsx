import React, { useState } from "react";
import {
  getPageData,
  handleDeleteIncomeDetails,
  handleEditIncomeButton,
  handleEditIncomeDetails,
} from "../eventHandler/event";
import IncomeModal from "../modal/IncomeModal";
import {
  Table,
  _,
  dayjs,
  PaginationFooter,
  EditOutlined,
  DeleteOutlined,
  Button,
} from "../index";
const IncomeTable = (props) => {
  const [editIncomeDetailsId, setEditIncomeDetailsId] = useState("");
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
          {props.incomeDataList && props.incomeDataList.length > 0 ? (
            _.map(props.incomeDataList, (data, i) => {
              return (
                <tr key={i + 1}>
                  <td>{dayjs(data.date).format("MM-DD-YYYY")}</td>
                  <td>{data.amount}</td>
                  <td>{data.category_id.category_name}</td>
                  <td>{data.description}</td>
                  <td>
                    <Button
                      type="button"
                      //   text="Add Income"
                      className="edit-icon"
                      icon={<EditOutlined />}
                      onClick={() =>
                        handleEditIncomeDetails(
                          props.incomeData,
                          props.setIncomeData,
                          props.setEditModalBox,
                          data,
                          setEditIncomeDetailsId
                        )
                      }
                    />
                    <Button
                      type="button"
                      //   text="Add Income"
                      className="delete-icon "
                      icon={<DeleteOutlined />}
                      onClick={() =>
                        handleDeleteIncomeDetails(
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
            getPageData(data, props.userdata, props.dispatch, props.setLoader)
          }
          pageNo={props.page}
          totalRecords={props.totalRecords}
          limit={props.limit}
        />
      ) : (
        ""
      )}

      <IncomeModal
        setIsModalOpen={props.setEditModalBox}
        modalTitle="Edit Income Details"
        isModalOpen={props.editModalBox}
        handleSubmitButton={(e) =>
          handleEditIncomeButton(
            e,
            props.setLoader,
            props.incomeData,
            props.setIncomeData,
            props.incomeDataErr,
            props.setIncomeDataErr,
            props.dispatch,
            props.userData,
            editIncomeDetailsId
          )
        }
        state={props.incomeData}
        setState={props.setIncomeData}
        errorState={props.incomeDataErr}
        setErrorState={props.setIncomeDataErr}
        categoryList={props.categoryList}
      />
    </>
  );
};

export default IncomeTable;
