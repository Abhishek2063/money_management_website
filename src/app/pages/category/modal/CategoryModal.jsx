import React from "react";
import { Modal, SelectInput, TextInput } from "../index";
import { handleInputChange, handleSelectChange } from "../eventHandler/event";
import { Select } from "antd";
const CategoryModal = (props) => {
  const handleCancel = () => {
    props.setIsModalOpen(false);
    props.setState({
      ...props.state,
      category_name: "",
      category_type: "",
      description: "",
    });
    props.setErrorState([]);
  };
  const { Option } = Select;
  const category_section_array = ['income', 'expense', 'debit', 'credit'];
  // category dropdown handling
  const categoryDropDownList = [];
  category_section_array.forEach(function (item, i) {
    categoryDropDownList.push(
      <Option key={i+1} value={item}>
        {item}
      </Option>
    );
  });
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
          {/* category_name */}

          <TextInput
            name="category_name"
            label="Category Name"
            value={props.state.category_name}
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
            error={props.errorState.category_nameErr}
            isRequired={true}
          />

          <TextInput
            name="description"
            label="Description"
            value={props.state.description}
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
            error={props.errorState.descriptionErr}
            isRequired={true}
          />

          {/* category_type */}
          <SelectInput
            name="category_type"
            label="Category Type"
            value={props.state.category_type}
            onChange={(value) =>
              handleSelectChange(value, props.state, props.setState)
            }
            error={props.errorState.category_typeErr}
            isRequired={true}
            selectOptionArray={categoryDropDownList}
          />
        </div>
      </Modal>
    </>
  );
};

export default CategoryModal;
