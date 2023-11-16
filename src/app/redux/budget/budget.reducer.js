import {
  ERROR_BUDGETDELETEBYUSERIDBudgetID,
  ERROR_BUDGETGETBYUSERID,
  ERROR_BUDGETSTORE,
  ERROR_BUDGETUPDATEBYUSERIDBUDGETID,
  SUCCESS_BUDGETDELETEBYUSERIDBudgetID,
  SUCCESS_BUDGETGETBYUSERID,
  SUCCESS_BUDGETSTORE,
  SUCCESS_BUDGETUPDATEBYUSERIDBUDGETID,
} from "./budget.action";
import { DEFAULT_STATE } from "./budget.state";

export const budgetReducer = (
  state = DEFAULT_STATE,
  action = {
    type: {},
    data: {},
  }
) => {
  switch (action.type) {
    case SUCCESS_BUDGETSTORE:
      const budgetStoreData = action.data;
      return { ...state, budgetStoreData };
    case ERROR_BUDGETSTORE:
      const errorbudgetStoreData = action.data;
      return { ...state, budgetStoreData: errorbudgetStoreData };

    case SUCCESS_BUDGETGETBYUSERID:
      const budgetGetByUserIdData = action.data;
      return { ...state, budgetGetByUserIdData };
    case ERROR_BUDGETGETBYUSERID:
      const errorbudgetGetByUserIdData = action.data;
      return { ...state, budgetGetByUserIdData: errorbudgetGetByUserIdData };

    case SUCCESS_BUDGETUPDATEBYUSERIDBUDGETID:
      const budgetUpdateByUserIdIdData = action.data;
      return { ...state, budgetUpdateByUserIdIdData };
    case ERROR_BUDGETUPDATEBYUSERIDBUDGETID:
      const errorbudgetUpdateByUserIdIdData = action.data;
      return {
        ...state,
        budgetUpdateByUserIdIdData: errorbudgetUpdateByUserIdIdData,
      };

    case SUCCESS_BUDGETDELETEBYUSERIDBudgetID:
      const budgetDeleteByUserIdIdData = action.data;
      return { ...state, budgetDeleteByUserIdIdData };
    case ERROR_BUDGETDELETEBYUSERIDBudgetID:
      const errorbudgetDeleteByUserIdIdData = action.data;
      return {
        ...state,
        budgetDeleteByUserIdIdData: errorbudgetDeleteByUserIdIdData,
      };

    default:
      return state;
  }
};
