// budgetStore 
export const BUDGETSTORE = "BUDGETSTORE";
export const budgetStore = (data) => ({ type: BUDGETSTORE, data });
export const SUCCESS_BUDGETSTORE = "SUCCESS_BUDGETSTORE";
export const ERROR_BUDGETSTORE = "ERROR_BUDGETSTORE";
export const budgetStoreResponse = (type, data) => ({ type, data });

// budgetGetByUserId
export const BUDGETGETBYUSERID = "BUDGETGETBYUSERID";
export const budgetGetByUserId = (data) => ({
  type: BUDGETGETBYUSERID,
  data,
});
export const SUCCESS_BUDGETGETBYUSERID = "SUCCESS_BUDGETGETBYUSERID";
export const ERROR_BUDGETGETBYUSERID = "ERROR_BUDGETGETBYUSERID";
export const budgetGetByUserIdResponse = (type, data) => ({ type, data });

// budgetUpdateByUserIdBudgetId
export const BUDGETUPDATEBYUSERIDBUDGETID = "BUDGETUPDATEBYUSERIDBUDGETID";
export const budgetUpdateByUserIdBudgetId = (data) => ({
  type: BUDGETUPDATEBYUSERIDBUDGETID,
  data,
});
export const SUCCESS_BUDGETUPDATEBYUSERIDBUDGETID =
  "SUCCESS_BUDGETUPDATEBYUSERIDBUDGETID";
export const ERROR_BUDGETUPDATEBYUSERIDBUDGETID =
  "ERROR_BUDGETUPDATEBYUSERIDBUDGETID";
export const budgetUpdateByUserIdBudgetIdResponse = (type, data) => ({
  type,
  data,
});

// budgetDeleteByUserIdBudgetId
export const BUDGETDELETEBYUSERIDBudgetID = "BUDGETDELETEBYUSERIDBudgetID";
export const budgetDeleteByUserIdBudgetId = (data) => ({
  type: BUDGETDELETEBYUSERIDBudgetID,
  data,
});
export const SUCCESS_BUDGETDELETEBYUSERIDBudgetID =
  "SUCCESS_BUDGETDELETEBYUSERIDBudgetID";
export const ERROR_BUDGETDELETEBYUSERIDBudgetID =
  "ERROR_BUDGETDELETEBYUSERIDBudgetID";
export const budgetDeleteByUserIdBudgetIdResponse = (type, data) => ({
  type,
  data,
});
