// expanseStore
export const EXPANSESTORE = "EXPANSESTORE";
export const expanseStore = (data) => ({ type: EXPANSESTORE, data });
export const SUCCESS_EXPANSESTORE = "SUCCESS_EXPANSESTORE";
export const ERROR_EXPANSESTORE = "ERROR_EXPANSESTORE";
export const expanseStoreResponse = (type, data) => ({ type, data });

// expanseGetByUserId
export const EXPANSEGETBYUSERID = "EXPANSEGETBYUSERID";
export const expanseGetByUserId = (data) => ({
  type: EXPANSEGETBYUSERID,
  data,
});
export const SUCCESS_EXPANSEGETBYUSERID = "SUCCESS_EXPANSEGETBYUSERID";
export const ERROR_EXPANSEGETBYUSERID = "ERROR_EXPANSEGETBYUSERID";
export const expanseGetByUserIdResponse = (type, data) => ({ type, data });

// expanseUpdateByUserIdIncomeId
export const EXPANSEUPDATEBYUSERIDEXPANSEID = "EXPANSEUPDATEBYUSERIDEXPANSEID";
export const expanseUpdateByUserIdIncomeId = (data) => ({
  type: EXPANSEUPDATEBYUSERIDEXPANSEID,
  data,
});
export const SUCCESS_EXPANSEUPDATEBYUSERIDEXPANSEID =
  "SUCCESS_EXPANSEUPDATEBYUSERIDEXPANSEID";
export const ERROR_EXPANSEUPDATEBYUSERIDEXPANSEID =
  "ERROR_EXPANSEUPDATEBYUSERIDEXPANSEID";
export const expanseUpdateByUserIdIncomeIdResponse = (type, data) => ({
  type,
  data,
});

// expanseDeleteByUserIdIncomeId
export const EXPANSEDELETEBYUSERIDINCOMEID = "EXPANSEDELETEBYUSERIDINCOMEID";
export const expanseDeleteByUserIdIncomeId = (data) => ({
  type: EXPANSEDELETEBYUSERIDINCOMEID,
  data,
});
export const SUCCESS_EXPANSEDELETEBYUSERIDINCOMEID =
  "SUCCESS_EXPANSEDELETEBYUSERIDINCOMEID";
export const ERROR_EXPANSEDELETEBYUSERIDINCOMEID =
  "ERROR_EXPANSEDELETEBYUSERIDINCOMEID";
export const expanseDeleteByUserIdIncomeIdResponse = (type, data) => ({
  type,
  data,
});
