import React from "react";
import Table from "react-bootstrap/Table";
import _ from "lodash";
import dayjs from "dayjs";
import { PaginationFooter } from "../../../common/pagination";
import { getPageData } from "../eventHandler/event";

const IncomeTable = (props) => {
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
      {props.totalPage > 1 ? <PaginationFooter
        getPageData={(data) => getPageData(data,props.userdata, props.dispatch, props.setLoader)}
        pageNo={props.page}
        totalRecords={props.totalRecords}
        limit={props.limit}
      /> : ""}
      
    </>
  );
};

export default IncomeTable;
