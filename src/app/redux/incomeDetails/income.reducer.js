import { DEFAULT_STATE } from "./income.state";
import {
  ERROR_INCOMEDELETEBYUSERIDINCOMEID,
  ERROR_INCOMEGETBYUSERID,
  ERROR_INCOMEIMPORTEXCELFILE,
  ERROR_INCOMESTORE,
  ERROR_INCOMEUPDATEBYUSERIDINCOMEID,
  SUCCESS_INCOMEDELETEBYUSERIDINCOMEID,
  SUCCESS_INCOMEGETBYUSERID,
  SUCCESS_INCOMEIMPORTEXCELFILE,
  SUCCESS_INCOMESTORE,
  SUCCESS_INCOMEUPDATEBYUSERIDINCOMEID,
} from "./income.action";

export const incomeReducer = (
  state = DEFAULT_STATE,
  action = {
    type: {},
    data: {},
  }
) => {
  switch (action.type) {
    case SUCCESS_INCOMESTORE:
      const incomeStoreData = action.data;
      return { ...state, incomeStoreData };
    case ERROR_INCOMESTORE:
      const errorincomeStoreData = action.data;
      return { ...state, incomeStoreData: errorincomeStoreData };

    case SUCCESS_INCOMEGETBYUSERID:
      const incomeGetByUserIdData = action.data;
      return { ...state, incomeGetByUserIdData };
    case ERROR_INCOMEGETBYUSERID:
      const errorincomeGetByUserIdData = action.data;
      return { ...state, incomeGetByUserIdData: errorincomeGetByUserIdData };

    case SUCCESS_INCOMEUPDATEBYUSERIDINCOMEID:
      const incomeUpdateByUserIdIncomeIdData = action.data;
      return { ...state, incomeUpdateByUserIdIncomeIdData };
    case ERROR_INCOMEUPDATEBYUSERIDINCOMEID:
      const errorincomeUpdateByUserIdIncomeIdData = action.data;
      return {
        ...state,
        incomeUpdateByUserIdIncomeIdData: errorincomeUpdateByUserIdIncomeIdData,
      };

    case SUCCESS_INCOMEDELETEBYUSERIDINCOMEID:
      const incomeDeleteByUserIdIncomeIdData = action.data;
      return { ...state, incomeDeleteByUserIdIncomeIdData };
    case ERROR_INCOMEDELETEBYUSERIDINCOMEID:
      const errorincomeDeleteByUserIdIncomeIdData = action.data;
      return {
        ...state,
        incomeDeleteByUserIdIncomeIdData: errorincomeDeleteByUserIdIncomeIdData,
      };

    case SUCCESS_INCOMEIMPORTEXCELFILE:
      const incomeImportExcelFileData = action.data;
      return { ...state, incomeImportExcelFileData };
    case ERROR_INCOMEIMPORTEXCELFILE:
      const errorincomeImportExcelFileData = action.data;
      return {
        ...state,
        incomeImportExcelFileData: errorincomeImportExcelFileData,
      };

    default:
      return state;
  }
};
