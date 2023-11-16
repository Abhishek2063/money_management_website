import React from "react";
import { Modal, DateInput, dayjs, TextInput } from "./index";
import {
  handleBudgetEndDateChange,
  handleBudgetStartDateChange,
  handleInputChange,
} from "./budgetEvent";
const BudgetModel = (props) => {
  const handleCancel = () => {
    props.setIsModalOpen(false);
    props.setState({
      ...props.state,
      budgetStartDate: "",
      budgetEndDate: "",
      amount: "",
    });
    props.setErrorState([]);
  };
  return (
    <>
      <Modal
        title={props.modalTitle}
        open={props.isModalOpen}
        onOk={props.handleSubmitButton}
        onCancel={handleCancel}
        maskClosable={false}
        okText={props.modalTitle}
      >
        <div>
          {/* date input field */}
          <DateInput
            name="budgetStartDate"
            label="Budget Start Date"
            value={
              props.state.budgetStartDate
                ? dayjs(props.state.budgetStartDate)
                : ""
            }
            onChange={(val) =>
              handleBudgetStartDateChange(
                val,
                props.state,
                props.setState,
                props.setErrorState,
                props.errorState
              )
            }
            error={props.errorState.budgetStartDateErr}
            isRequired={true}
          />

          <DateInput
            name="budgetEndDate"
            label="Budget End Date"
            value={
              props.state.budgetEndDate ? dayjs(props.state.budgetEndDate) : ""
            }
            onChange={(val) =>
              handleBudgetEndDateChange(
                val,
                props.state,
                props.setState,
                props.setErrorState,
                props.errorState
              )
            }
            error={props.errorState.budgetEndDateErr}
            isRequired={true}
          />
          {/* amount */}

          <TextInput
            name="amount"
            label="Amount"
            value={props.state.amount}
            onChange={(e) =>
              handleInputChange(
                e,
                "onlynumber",
                null,
                1,
                props.setErrorState,
                props.errorState,
                props.setState,
                props.state
              )
            }
            onBlur={(e) =>
              handleInputChange(
                e,
                "onlynumber",
                null,
                1,
                props.setErrorState,
                props.errorState,
                props.setState,
                props.state
              )
            }
            error={props.errorState.amountErr}
            isRequired={true}
          />
        </div>
      </Modal>
    </>
  );
};

export default BudgetModel;
