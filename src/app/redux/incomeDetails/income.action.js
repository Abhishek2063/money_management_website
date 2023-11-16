// incomeStore
export const INCOMESTORE = "INCOMESTORE";
export const incomeStore = (data) => ({ type: INCOMESTORE, data });
export const SUCCESS_INCOMESTORE = "SUCCESS_INCOMESTORE";
export const ERROR_INCOMESTORE = "ERROR_INCOMESTORE";
export const incomeStoreResponse = (type, data) => ({ type, data });

// incomeGetByUserId
export const INCOMEGETBYUSERID = "INCOMEGETBYUSERID";
export const incomeGetByUserId = (data) => ({ type: INCOMEGETBYUSERID, data });
export const SUCCESS_INCOMEGETBYUSERID = "SUCCESS_INCOMEGETBYUSERID";
export const ERROR_INCOMEGETBYUSERID = "ERROR_INCOMEGETBYUSERID";
export const incomeGetByUserIdResponse = (type, data) => ({ type, data });

// incomeUpdateByUserIdIncomeId
export const INCOMEUPDATEBYUSERIDINCOMEID = "INCOMEUPDATEBYUSERIDINCOMEID";
export const incomeUpdateByUserIdIncomeId = (data) => ({
  type: INCOMEUPDATEBYUSERIDINCOMEID,
  data,
});
export const SUCCESS_INCOMEUPDATEBYUSERIDINCOMEID =
  "SUCCESS_INCOMEUPDATEBYUSERIDINCOMEID";
export const ERROR_INCOMEUPDATEBYUSERIDINCOMEID =
  "ERROR_INCOMEUPDATEBYUSERIDINCOMEID";
export const incomeUpdateByUserIdIncomeIdResponse = (type, data) => ({
  type,
  data,
});

// incomeDeleteByUserIdIncomeId
export const INCOMEDELETEBYUSERIDINCOMEID = "INCOMEDELETEBYUSERIDINCOMEID";
export const incomeDeleteByUserIdIncomeId = (data) => ({
  type: INCOMEDELETEBYUSERIDINCOMEID,
  data,
});
export const SUCCESS_INCOMEDELETEBYUSERIDINCOMEID =
  "SUCCESS_INCOMEDELETEBYUSERIDINCOMEID";
export const ERROR_INCOMEDELETEBYUSERIDINCOMEID =
  "ERROR_INCOMEDELETEBYUSERIDINCOMEID";
export const incomeDeleteByUserIdIncomeIdResponse = (type, data) => ({
  type,
  data,
});

// incomeImportExcelFile
export const INCOMEIMPORTEXCELFILE = "INCOMEIMPORTEXCELFILE";
export const incomeImportExcelFile = (data) => ({
  type: INCOMEIMPORTEXCELFILE,
  data,
});
export const SUCCESS_INCOMEIMPORTEXCELFILE = "SUCCESS_INCOMEIMPORTEXCELFILE";
export const ERROR_INCOMEIMPORTEXCELFILE = "ERROR_INCOMEIMPORTEXCELFILE";
export const incomeImportExcelFileResponse = (type, data) => ({
  type,
  data,
});
