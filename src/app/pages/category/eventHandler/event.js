import {
  Swal,
  categoryCreate,
  categoryDeleteByUserIdCategoryId,
  categoryGetByUserId,
  categoryUpdateByUserIdCategoryId,
  fieldValidator,
} from "../index";

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
  setState({
    ...state,
    category_type: value,
  });
};

export const handleSubmitButton = (
  e,
  setLoader,
  categoryData,
  setCategoryData,
  categoryDataErr,
  setCategoryDataErr,
  dispatch,
  userData
) => {
  e.preventDefault();
  const isFormValid = validateForm(
    categoryData,
    categoryDataErr,
    setCategoryDataErr
  );
  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      user_id: userData.userId,
      description: categoryData.description,
      category_name: categoryData.category_name,
      category_type: categoryData.category_type,
    };
    dispatch(categoryCreate(data));
  }
};

export const validateForm = (
  categoryData,
  categoryDataErr,
  setCategoryDataErr
) => {
  const errors = {};
  // Check if expanseDate is empty
  if (!categoryData.category_type) {
    errors.category_typeErr = "Expanse Date is required";
    errors.category_typeCls = true;
  }

  for (const key in categoryData) {
    if (categoryData.hasOwnProperty(key)) {
      let type = "";
      let maxLength = null;
      let minLength = null;
      if (key === "category_name") {
        type = "alphabetics";
        maxLength = null;
        minLength = null;
      }
      if (key === "description") {
        type = "string";
        maxLength = null;
        minLength = null;
      }
      if (key === "category_name" || key === "description") {
        const error = checkValidation(
          key,
          categoryData[key],
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
  setCategoryDataErr(errors);
  return Object.keys(errors).length === 0; // Form is valid if no errors are present
};

export const getPageData = (page, userData, dispatch, setLoader) => {
  dispatch(categoryGetByUserId({ user_id: userData.userId, page: page }));
  setLoader(true);
};

export const handleEditCategoryDetails = (
  categoryData,
  setCategoryData,
  setEditModalBox,
  data,
  setEditCategoryDetailsId
) => {
  setCategoryData({
    ...categoryData,
    category_name: data.category_name,
    category_type: data.category_type,
    description: data.description,
  });
  setEditModalBox(true);
  setEditCategoryDetailsId(data._id);
};

export const handleEditCategoryButton = (
  e,
  setLoader,
  categoryData,
  setCategoryData,
  categoryDataErr,
  setCategoryDataErr,
  dispatch,
  userData,
  editCategoryDetailsId
) => {
  e.preventDefault();
  const isFormValid = validateForm(
    categoryData,
    categoryDataErr,
    setCategoryDataErr
  );
  if (isFormValid) {
    // Proceed with registration logic
    setLoader(true);
    const data = {
      user_id: userData.userId,
      category_name: categoryData.category_name,
      category_type: categoryData.category_type,
      description: categoryData.description,
      categoryId: editCategoryDetailsId,
    };

    dispatch(categoryUpdateByUserIdCategoryId(data));
  }
};

export const handleDeleteCategoryDetails = (
  data,
  userData,
  setLoader,
  dispatch
) => {
  Swal.fire({
    title: "Permission Before Delete",
    text: " Are you sure? You will not be able to recover the deleted category details!",
    confirmButtonText: "OK",
    allowOutsideClick: false,
    allowEscapeKey: false,
    showCloseButton: true,
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      const deleteUserData = {
        user_id: userData.userId,
        categoryId: data._id,
      };
      setLoader(true);
      dispatch(categoryDeleteByUserIdCategoryId(deleteUserData));
    }
  });
};
