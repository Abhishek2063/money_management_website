import React, { useState } from "react";
import {
  Table,
  _,
  dayjs,
  PaginationFooter,
  EditOutlined,
  DeleteOutlined,
  Button,
} from "./index";
import {
  getPageData,
  handleDeleteBudgetDetails,
  handleEditBudgetButton,
  handleEditBudgetDetails,
} from "./budgetEvent";
import BudgetModel from "./BudgetModel";
const BudgetTable = (props) => {
  const [editBudgetDetailsId, setEditBudgetDetailsId] = useState("");

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Budget Start Date</th>
            <th>Budget End Date</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.budgetDataList && props.budgetDataList.length > 0 ? (
            _.map(props.budgetDataList, (data, i) => {
              return (
                <tr key={i + 1}>
                  <td>{dayjs(data.start_date).format("MM-DD-YYYY")}</td>
                  <td>{dayjs(data.end_date).format("MM-DD-YYYY")}</td>
                  <td>{data.amount}</td>
                  <td>
                    <Button
                      type="button"
                      className="edit-icon"
                      icon={<EditOutlined />}
                      onClick={() =>
                        handleEditBudgetDetails(
                          props.budgetData,
                          props.setBudgetData,
                          props.setEditModalBox,
                          data,
                          setEditBudgetDetailsId
                        )
                      }
                    />
                    <Button
                      type="button"
                      className="delete-icon "
                      icon={<DeleteOutlined />}
                      onClick={() =>
                        handleDeleteBudgetDetails(
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

      <BudgetModel
        setIsModalOpen={props.setEditModalBox}
        modalTitle="Edit Budget Details"
        isModalOpen={props.editModalBox}
        handleSubmitButton={(e) =>
          handleEditBudgetButton(
            e,
            props.setLoader,
            props.budgetData,
            props.setBudgetData,
            props.budgetDataErr,
            props.setbudgetDataErr,
            props.dispatch,
            props.userData,
            editBudgetDetailsId
          )
        }
        state={props.budgetData}
        setState={props.setBudgetData}
        errorState={props.budgetDataErr}
        setErrorState={props.setbudgetDataErr}
      />
    </>
  );
};

export default BudgetTable;
