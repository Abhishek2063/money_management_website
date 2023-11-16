import {
  Swal,
  budgetDeleteByUserIdBudgetId,
  budgetGetByUserId,
  budgetStore,
  budgetUpdateByUserIdBudgetId,
  dayjs,
  fieldValidator,
} from "./index";

export const handleBudgetStartDateChange = (
  val,
  state,
  setState,
  setErrorState,
  errorState
) => {
  if (val) {
    const pickUp = dayjs(val).format("MM-DD-YYYY");
    setState({ ...state, budgetStartDate: pickUp });
    setErrorState({
      ...errorState,
      budgetStartDateErr: "",
      budgetStartDateCls: "",
    });
  } else {
    setState({ ...state, budgetStartDate: "" });
  }
};

export const handleBudgetEndDateChange = (
  val,
  state,
  setState,
  setErrorState,
  errorState
) => {
  if (val) {
    const pickUp = dayjs(val).format("MM-DD-YYYY");
    setState({ ...state, budgetEndDate: pickUp });
    setErrorState({
      ...errorState,
      budgetEndDateErr: "",
      budgetEndDateCls: "",
    });
  } else {
    setState({ ...state, budgetEndDate: "" });
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

export const handleSubmitButton = (
  e,
  setLoader,
  budgetData,
  setBudgetData,
  budgetDataErr,
  setbudgetDataErr,
  dispatch,
  userData
) => {
  e.preventDefault();
  const isFormValid = validateForm(budgetData, budgetDataErr, setbudgetDataErr);
  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      user_id: userData.userId,
      start_date: new Date(budgetData.budgetStartDate),
      end_date: new Date(budgetData.budgetEndDate),
      amount: budgetData.amount,
    };

    dispatch(budgetStore(data));
  }
};

export const validateForm = (budgetData, budgetDataErr, setbudgetDataErr) => {
  const errors = {};
  // Check if budgetStartDate is empty
  if (!budgetData.budgetStartDate) {
    errors.budgetStartDateErr = "Budget Start date is required";
    errors.budgetStartDateCls = true;
  }

  // Check if budgetEndDate is empty
  if (!budgetData.budgetEndDate) {
    errors.budgetEndDateErr = "Budget Start date is required";
    errors.budgetEndDateCls = true;
  }

  for (const key in budgetData) {
    if (budgetData.hasOwnProperty(key)) {
      let type = "";
      let maxLength = null;
      let minLength = null;
      if (key === "amount") {
        type = "onlynumber";
        maxLength = null;
        minLength = null;
      }

      if (key === "amount") {
        const error = checkValidation(
          key,
          budgetData[key],
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
  setbudgetDataErr(errors);
  return Object.keys(errors).length === 0; // Form is valid if no errors are present
};

export const getPageData = (page, userdata, dispatch, setLoader) => {
  dispatch(budgetGetByUserId({ user_id: userdata.userId, page: page }));
  setLoader(true);
};

export const handleEditBudgetDetails = (
  budgetData,
  setBudgetData,
  setIsModalOpen,
  data,
  setEditBudgetDetailsId
) => {
  setBudgetData({
    ...budgetData,
    budgetStartDate: data.start_date,
    budgetEndDate: data.end_date,
    amount: data.amount,
  });
  setIsModalOpen(true);
  setEditBudgetDetailsId(data._id);
};

export const handleEditBudgetButton = (
  e,
  setLoader,
  budgetData,
  setBudgetData,
  budgetDataErr,
  setbudgetDataErr,
  dispatch,
  userData,
  editBudgetDetailsId
) => {
  e.preventDefault();
  const isFormValid = validateForm(budgetData, budgetDataErr, setbudgetDataErr);
  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      user_id: userData.userId,
      start_date: new Date(budgetData.budgetStartDate),
      end_date: new Date(budgetData.budgetEndDate),
      amount: budgetData.amount,
      budgetId:editBudgetDetailsId
    };

    dispatch(budgetUpdateByUserIdBudgetId(data));
  }
};

export const handleDeleteBudgetDetails = (
  data,
  userData,
  setLoader,
  dispatch
) => {
  Swal.fire({
    title: "Permission Before Delete",
    text: " Are you sure? You will not be able to recover the deleted Budget details!",
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCloseButton: true,
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      const deleteUserData = {
        user_id: userData.userId,
        budgetId: data._id,
      };
      setLoader(true);
      dispatch(budgetDeleteByUserIdBudgetId(deleteUserData));
    }
  });
};
