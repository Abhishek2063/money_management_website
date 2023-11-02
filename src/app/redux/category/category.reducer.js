import { DEFAULT_STATE } from "./category.state";
import {
  ERROR_CATEGORYCREATE,
  ERROR_CATEGORYDELETEBYUSERIDCATEGORYID,
  ERROR_CATEGORYGETBYUSERID,
  ERROR_CATEGORYGETBYUSERIDCATEGORYID,
  ERROR_CATEGORYGETBYUSERIDCATEGORYTYPE,
  ERROR_CATEGORYUPDATEBYUSERIDCATEGORYID,
  SUCCESS_CATEGORYCREATE,
  SUCCESS_CATEGORYDELETEBYUSERIDCATEGORYID,
  SUCCESS_CATEGORYGETBYUSERID,
  SUCCESS_CATEGORYGETBYUSERIDCATEGORYID,
  SUCCESS_CATEGORYGETBYUSERIDCATEGORYTYPE,
  SUCCESS_CATEGORYUPDATEBYUSERIDCATEGORYID,
} from "./category.action";

export const categoryReducer = (
  state = DEFAULT_STATE,
  action = {
    type: {},
    data: {},
  }
) => {
  switch (action.type) {
    case SUCCESS_CATEGORYCREATE:
      const categoryCreateData = action.data;
      return { ...state, categoryCreateData };
    case ERROR_CATEGORYCREATE:
      const errorcategoryCreateData = action.data;
      return { ...state, categoryCreateData: errorcategoryCreateData };

    case SUCCESS_CATEGORYGETBYUSERID:
      const categoryGetByUserIdData = action.data;
      return { ...state, categoryGetByUserIdData };
    case ERROR_CATEGORYGETBYUSERID:
      const errorcategoryGetByUserIdData = action.data;
      return {
        ...state,
        categoryGetByUserIdData: errorcategoryGetByUserIdData,
      };

    case SUCCESS_CATEGORYGETBYUSERIDCATEGORYID:
      const categoryGetByUserIdCategoryIdData = action.data;
      return { ...state, categoryGetByUserIdCategoryIdData };
    case ERROR_CATEGORYGETBYUSERIDCATEGORYID:
      const errorcategoryGetByUserIdCategoryIdData = action.data;
      return {
        ...state,
        categoryGetByUserIdCategoryIdData:
          errorcategoryGetByUserIdCategoryIdData,
      };

    case SUCCESS_CATEGORYGETBYUSERIDCATEGORYTYPE:
      const categoryGetByUserIdCategoryTypeData = action.data;
      return { ...state, categoryGetByUserIdCategoryTypeData };
    case ERROR_CATEGORYGETBYUSERIDCATEGORYTYPE:
      const errorcategoryGetByUserIdCategoryTypeData = action.data;
      return {
        ...state,
        categoryGetByUserIdCategoryTypeData:
          errorcategoryGetByUserIdCategoryTypeData,
      };

    case SUCCESS_CATEGORYUPDATEBYUSERIDCATEGORYID:
      const categoryUpdateByUserIdCategoryIdData = action.data;
      return { ...state, categoryUpdateByUserIdCategoryIdData };
    case ERROR_CATEGORYUPDATEBYUSERIDCATEGORYID:
      const errorcategoryUpdateByUserIdCategoryIdData = action.data;
      return {
        ...state,
        categoryUpdateByUserIdCategoryIdData:
          errorcategoryUpdateByUserIdCategoryIdData,
      };

    case SUCCESS_CATEGORYDELETEBYUSERIDCATEGORYID:
      const categoryDeleteByUserIdCategoryIdData = action.data;
      return { ...state, categoryDeleteByUserIdCategoryIdData };
    case ERROR_CATEGORYDELETEBYUSERIDCATEGORYID:
      const errorcategoryDeleteByUserIdCategoryIdData = action.data;
      return {
        ...state,
        categoryDeleteByUserIdCategoryIdData:
          errorcategoryDeleteByUserIdCategoryIdData,
      };

    default:
      return state;
  }
};
