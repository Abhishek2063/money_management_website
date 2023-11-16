import { DEFAULT_STATE } from "./expanse.state";
import {
  ERROR_EXPANSEDELETEBYUSERIDINCOMEID,
  ERROR_EXPANSEGETBYUSERID,
  ERROR_EXPANSEIMPORTEXCELFILE,
  ERROR_EXPANSESTORE,
  ERROR_EXPANSEUPDATEBYUSERIDEXPANSEID,
  SUCCESS_EXPANSEDELETEBYUSERIDINCOMEID,
  SUCCESS_EXPANSEGETBYUSERID,
  SUCCESS_EXPANSEIMPORTEXCELFILE,
  SUCCESS_EXPANSESTORE,
  SUCCESS_EXPANSEUPDATEBYUSERIDEXPANSEID,
} from "./expanse.action";

export const expanseReducer = (
  state = DEFAULT_STATE,
  action = {
    type: {},
    data: {},
  }
) => {
  switch (action.type) {
    case SUCCESS_EXPANSESTORE:
      const expanseStoreData = action.data;
      return { ...state, expanseStoreData };
    case ERROR_EXPANSESTORE:
      const errorexpanseStoreData = action.data;
      return { ...state, expanseStoreData: errorexpanseStoreData };

    case SUCCESS_EXPANSEGETBYUSERID:
      const expanseGetByUserIdData = action.data;
      return { ...state, expanseGetByUserIdData };
    case ERROR_EXPANSEGETBYUSERID:
      const errorexpanseGetByUserIdData = action.data;
      return { ...state, expanseGetByUserIdData: errorexpanseGetByUserIdData };

    case SUCCESS_EXPANSEUPDATEBYUSERIDEXPANSEID:
      const expanseUpdateByUserIdIncomeIdData = action.data;
      return { ...state, expanseUpdateByUserIdIncomeIdData };
    case ERROR_EXPANSEUPDATEBYUSERIDEXPANSEID:
      const errorexpanseUpdateByUserIdIncomeIdData = action.data;
      return {
        ...state,
        expanseUpdateByUserIdIncomeIdData:
          errorexpanseUpdateByUserIdIncomeIdData,
      };

    case SUCCESS_EXPANSEDELETEBYUSERIDINCOMEID:
      const expanseDeleteByUserIdIncomeIdData = action.data;
      return { ...state, expanseDeleteByUserIdIncomeIdData };
    case ERROR_EXPANSEDELETEBYUSERIDINCOMEID:
      const errorexpanseDeleteByUserIdIncomeIdData = action.data;
      return {
        ...state,
        expanseDeleteByUserIdIncomeIdData:
          errorexpanseDeleteByUserIdIncomeIdData,
      };

    case SUCCESS_EXPANSEIMPORTEXCELFILE:
      const expanseImportExcelFileData = action.data;
      return { ...state, expanseImportExcelFileData };
    case ERROR_EXPANSEIMPORTEXCELFILE:
      const errorexpanseImportExcelFileData = action.data;
      return {
        ...state,
        expanseImportExcelFileData: errorexpanseImportExcelFileData,
      };

    default:
      return state;
  }
};
