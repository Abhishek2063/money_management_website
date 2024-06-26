import {
  dayjs,
  fieldValidator,
  incomeDeleteByUserIdIncomeId,
  incomeGetByUserId,
  incomeImportExcelFile,
  incomeStore,
  incomeUpdateByUserIdIncomeId,
  message,
  Swal,
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
    setState({ ...state, incomeDate: pickUp });
    setErrorState({
      ...errorState,
      incomeDateErr: "",
      incomeDateCls: "",
    });
  } else {
    setState({ ...state, incomeDate: "" });
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
  incomeData,
  setIncomeData,
  incomeDataErr,
  setIncomeDataErr,
  dispatch,
  userData
) => {
  e.preventDefault();
  const isFormValid = validateForm(incomeData, incomeDataErr, setIncomeDataErr);
  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      user_id: userData.userId,
      date: new Date(incomeData.incomeDate),
      description: incomeData.description,
      amount: incomeData.amount,
    };
    if (incomeData.other_category_show) {
      data.other_category = {
        category_name: incomeData.other_category,
        category_type: "income",
        category_description: incomeData.other_category_description,
      };
    } else {
      data.category_id = incomeData.category_name;
    }
    dispatch(incomeStore(data));
  }
};

export const validateForm = (incomeData, incomeDataErr, setIncomeDataErr) => {
  const errors = {};
  // Check if incomeDate is empty
  if (!incomeData.incomeDate) {
    errors.incomeDateErr = "Income Date is required";
    errors.incomeDateCls = true;
  }

  // Check if category_name is empty
  if (!incomeData.category_name) {
    errors.category_nameErr = "Category Name is required";
    errors.category_nameCls = true;
  }
  for (const key in incomeData) {
    if (incomeData.hasOwnProperty(key)) {
      let type = "";
      let maxLength = null;
      let minLength = null;
      if (key === "amount") {
        type = "onlynumber";
        maxLength = null;
        minLength = null;
      }
      if (key === "other_category" && incomeData.other_category_show) {
        type = "alphabetics";
        maxLength = null;
        minLength = null;
      }
      if (
        key === "other_category_description" &&
        incomeData.other_category_show
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
          incomeData[key],
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
  setIncomeDataErr(errors);
  return Object.keys(errors).length === 0; // Form is valid if no errors are present
};

export const getPageData = (page, userdata, dispatch, setLoader) => {
  dispatch(incomeGetByUserId({ user_id: userdata.userId, page: page }));
  setLoader(true);
};

export const handleEditIncomeDetails = (
  incomeData,
  setIncomeData,
  setIsModalOpen,
  data,
  setEditIncomeDetailsId
) => {
  setIncomeData({
    ...incomeData,
    incomeDate: data.date,
    description: data.description,
    amount: data.amount,
    category_name: data.category_id._id,
    other_category_show: false,
    other_category: "",
    other_category_description: "",
  });
  setIsModalOpen(true);
  setEditIncomeDetailsId(data._id);
};

export const handleEditIncomeButton = (
  e,
  setLoader,
  incomeData,
  setIncomeData,
  incomeDataErr,
  setIncomeDataErr,
  dispatch,
  userData,
  editIncomeDetailsId
) => {
  e.preventDefault();
  const isFormValid = validateForm(incomeData, incomeDataErr, setIncomeDataErr);
  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      user_id: userData.userId,
      date: new Date(incomeData.incomeDate),
      description: incomeData.description,
      amount: incomeData.amount,
      incomeId: editIncomeDetailsId,
    };
    if (incomeData.other_category_show) {
      data.other_category = {
        category_name: incomeData.other_category,
        category_type: "income",
        category_description: incomeData.other_category_description,
      };
    } else {
      data.category_id = incomeData.category_name;
    }
    dispatch(incomeUpdateByUserIdIncomeId(data));
  }
};

export const handleDeleteIncomeDetails = (
  data,
  userData,
  setLoader,
  dispatch
) => {
  Swal.fire({
    title: "Permission Before Delete",
    text: " Are you sure? You will not be able to recover the deleted income details!",
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCloseButton: true,
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      const deleteUserData = {
        user_id: userData.userId,
        incomeId: data._id,
      };
      setLoader(true);
      dispatch(incomeDeleteByUserIdIncomeId(deleteUserData));
    }
  });
};

export const handleFileSelect = (event, userData, dispatch,setLoader) => {
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
      dispatch(incomeImportExcelFile(data));
      setLoader(true)
    } else {
      message.error("Only xlsx and xls extension files are allowed.");
    }
  }
};
