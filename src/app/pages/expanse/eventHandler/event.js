import {
  dayjs,
  fieldValidator,
  expanseDeleteByUserIdIncomeId,
  expanseGetByUserId,
  expanseStore,
  expanseUpdateByUserIdIncomeId,
  Swal,
  message,
  expanseImportExcelFile,
} from "../index";
export const handlePickUpDateChange = (
  val,
  state,
  setState,
  setErrorState,
  errorState
) => {
  if (val) {
    const pickUp = dayjs(val).format("MM-DD-YYYY");
    setState({ ...state, expanseDate: pickUp });
    setErrorState({
      ...errorState,
      expanseDateErr: "",
      expanseDateCls: "",
    });
  } else {
    setState({ ...state, expanseDate: "" });
  }
};

export const handleInputChange = (
  e,
  type,
  maxLength,
  minLength,
  setErrorState,
  errorState,
  setState,
  state
) => {
  let value = e.target.value;
  if (type === "password" || type === "email") {
    value = e.target.value.replace(/\s+/g, "");
  }
  let error = checkValidation(
    e.target.name,
    value,
    type,
    maxLength,
    minLength,
    state
  );
  setErrorState({
    ...errorState,
    [error.fieldNameErr]: error.errorMsg,
    [error.fieldCls]: error.setClassName,
  });
  setState({
    ...state,
    [e.target.name]: value,
  });
};

// Check Validation Function
export const checkValidation = (
  field,
  value,
  type,
  maxLength,
  minLength,
  state
) => {
  return fieldValidator(field, value, type, maxLength, minLength);
};

export const handleSelectChange = (value, state, setState) => {
  if (value === "Other") {
    setState({
      ...state,
      category_name: "Other",
      other_category_show: true,
      other_category: "",
    });
  } else {
    setState({
      ...state,
      category_name: value,
      other_category_show: false,
      other_category: "",
    });
  }
};

export const handleSubmitButton = (
  e,
  setLoader,
  expanseData,
  setExpanseData,
  expanseDataErr,
  setExpanseDataErr,
  dispatch,
  userData
) => {
  e.preventDefault();
  const isFormValid = validateForm(
    expanseData,
    expanseDataErr,
    setExpanseDataErr
  );
  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      user_id: userData.userId,
      date: new Date(expanseData.expanseDate),
      description: expanseData.description,
      amount: expanseData.amount,
    };
    if (expanseData.other_category_show) {
      data.other_category = {
        category_name: expanseData.other_category,
        category_type: "expense",
        category_description: expanseData.other_category_description,
      };
    } else {
      data.category_id = expanseData.category_name;
    }
    dispatch(expanseStore(data));
  }
};

export const validateForm = (
  expanseData,
  expanseDataErr,
  setExpanseDataErr
) => {
  const errors = {};
  // Check if expanseDate is empty
  if (!expanseData.expanseDate) {
    errors.expanseDateErr = "Expanse Date is required";
    errors.expanseDateCls = true;
  }

  // Check if category_name is empty
  if (!expanseData.category_name) {
    errors.category_nameErr = "Category Name is required";
    errors.category_nameCls = true;
  }
  for (const key in expanseData) {
    if (expanseData.hasOwnProperty(key)) {
      let type = "";
      let maxLength = null;
      let minLength = null;
      if (key === "amount") {
        type = "onlynumber";
        maxLength = null;
        minLength = null;
      }
      if (key === "other_category" && expanseData.other_category_show) {
        type = "alphabetics";
        maxLength = null;
        minLength = null;
      }
      if (
        key === "other_category_description" &&
        expanseData.other_category_show
      ) {
        type = "alphabetics";
        maxLength = null;
        minLength = null;
      }
      if (key === "description") {
        type = "string";
        maxLength = null;
        minLength = null;
      }
      if (
        key === "amount" ||
        key === "other_category" ||
        key === "other_category_description" ||
        key === "description"
      ) {
        const error = checkValidation(
          key,
          expanseData[key],
          type,
          maxLength,
          minLength
        );
        if (error.errorMsg) {
          errors[error.fieldNameErr] = error.errorMsg;
          errors[error.fieldCls] = error.setClassName;
        }
      }
    }
  }
  setExpanseDataErr(errors);
  return Object.keys(errors).length === 0; // Form is valid if no errors are present
};

export const getPageData = (page, userdata, dispatch, setLoader) => {
  dispatch(expanseGetByUserId({ user_id: userdata.userId, page: page }));
  setLoader(true);
};

export const handleEditExpanseDetails = (
  expanseData,
  setExpanseData,
  setIsModalOpen,
  data,
  setEditExpanseDetailsId
) => {
  setExpanseData({
    ...expanseData,
    expanseDate: data.date,
    description: data.description,
    amount: data.amount,
    category_name: data.category_id._id,
    other_category_show: false,
    other_category: "",
    other_category_description: "",
  });
  setIsModalOpen(true);
  setEditExpanseDetailsId(data._id);
};

export const handleEditExpanseButton = (
  e,
  setLoader,
  expanseData,
  setExpanseData,
  expanseDataErr,
  setExpanseDataErr,
  dispatch,
  userData,
  editExpanseDetailsId
) => {
  e.preventDefault();
  const isFormValid = validateForm(
    expanseData,
    expanseDataErr,
    setExpanseDataErr
  );
  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      user_id: userData.userId,
      date: new Date(expanseData.expanseDate),
      description: expanseData.description,
      amount: expanseData.amount,
      expanseId: editExpanseDetailsId,
    };
    if (expanseData.other_category_show) {
      data.other_category = {
        category_name: expanseData.other_category,
        category_type: "expense",
        category_description: expanseData.other_category_description,
      };
    } else {
      data.category_id = expanseData.category_name;
    }
    dispatch(expanseUpdateByUserIdIncomeId(data));
  }
};

export const handleDeleteExpanseDetails = (
  data,
  userData,
  setLoader,
  dispatch
) => {
  Swal.fire({
    title: "Permission Before Delete",
    text: " Are you sure? You will not be able to recover the deleted expanse details!",
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCloseButton: true,
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      const deleteUserData = {
        user_id: userData.userId,
        expanseId: data._id,
      };
      setLoader(true);
      dispatch(expanseDeleteByUserIdIncomeId(deleteUserData));
    }
  });
};

export const handleFileSelect = (event, userData, dispatch, setLoader) => {
  if (event.target.files) {
    const selectedFile = event.target.files[0];
    console.log(selectedFile, "selectedFile.type");
    if (
      selectedFile.type === "text/xlsx" ||
      selectedFile.type === "text/xls" ||
      selectedFile.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      const data = {
        file: selectedFile,
        user_id: userData.userId,
      };
      dispatch(expanseImportExcelFile(data));
      setLoader(true);
    } else {
      message.error("Only xlsx and xls extension files are allowed.");
    }
  }
};
