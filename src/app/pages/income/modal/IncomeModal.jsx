import React from "react";
import {
  handleInputChange,
  handlePickUpDateChange,
  handleSelectChange,
} from "../eventHandler/event";
import { Modal, DateInput, dayjs, TextInput, SelectInput } from "../index";
import { Select } from "antd";
const IncomeModal = (props) => {
  const handleCancel = () => {
    props.setIsModalOpen(false);
    props.setState({
      ...props.state,
      incomeDate: "",
      description: "",
      amount: "",
      category_name: "",
      other_category_show: false,
      other_category: "",
    });
    props.setErrorState([]);
  };

  const { Option } = Select;
  // category dropdown handling
  const categoryDropDownList = [];
  props.categoryList.forEach(function (item, i) {
    categoryDropDownList.push(
      <Option key={item._id} value={item._id}>
        {item.category_name}
      </Option>
    );
  });

  // Adding the "Other" option with ID 0
  categoryDropDownList.push(
    <Option key={0} value="Other">
      Other
    </Option>
  );
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
            name="incomeDate"
            label="Income Date"
            value={props.state.incomeDate ? dayjs(props.state.incomeDate) : ""}
            onChange={(val) =>
              handlePickUpDateChange(
                val,
                props.state,
                props.setState,
                props.setErrorState,
                props.errorState
              )
            }
            error={props.errorState.incomeDateErr}
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

          {/* category */}
          <SelectInput
            name="category_name"
            label="Category"
            value={props.state.category_name}
            onChange={(value) =>
              handleSelectChange(value, props.state, props.setState)
            }
            error={props.errorState.category_nameErr}
            isRequired={true}
            selectOptionArray={categoryDropDownList}
          />

          {/* other category */}
          {props.state.other_category_show ? (
            <TextInput
              name="other_category"
              label="Other Category"
              value={props.state.other_category}
              onChange={(e) =>
                handleInputChange(
                  e,
                  "alphabetics",
                  null,
                  null,
                  props.setErrorState,
                  props.errorState,
                  props.setState,
                  props.state
                )
              }
              onBlur={(e) =>
                handleInputChange(
                  e,
                  "alphabetics",
                  null,
                  null,
                  props.setErrorState,
                  props.errorState,
                  props.setState,
                  props.state
                )
              }
              error={props.errorState.other_categoryErr}
              isRequired={true}
            />
          ) : (
            ""
          )}
          {props.state.other_category_show ? (
            <TextInput
              name="other_category_description"
              label="Other Category Description"
              value={props.state.other_category_description}
              onChange={(e) =>
                handleInputChange(
                  e,
                  "alphabetics",
                  null,
                  null,
                  props.setErrorState,
                  props.errorState,
                  props.setState,
                  props.state
                )
              }
              onBlur={(e) =>
                handleInputChange(
                  e,
                  "alphabetics",
                  null,
                  null,
                  props.setErrorState,
                  props.errorState,
                  props.setState,
                  props.state
                )
              }
              error={props.errorState.other_category_descriptionErr}
              isRequired={true}
            />
          ) : (
            ""
          )}
          {/* Description */}

          <TextInput
            name="description"
            label="Description"
            value={props.state.description}
            onChange={(e) =>
              handleInputChange(
                e,
                "string",
                null,
                null,
                props.setErrorState,
                props.errorState,
                props.setState,
                props.state
              )
            }
            onBlur={(e) =>
              handleInputChange(
                e,
                "string",
                null,
                null,
                props.setErrorState,
                props.errorState,
                props.setState,
                props.state
              )
            }
            error={props.errorState.descriptionErr}
            isRequired={false}
          />
        </div>
      </Modal>
    </>
  );
};
export default IncomeModal;
