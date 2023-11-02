// categoryCreate
export const CATEGORYCREATE = "CATEGORYCREATE";
export const categoryCreate = (data) => ({ type: CATEGORYCREATE, data });
export const SUCCESS_CATEGORYCREATE = "SUCCESS_CATEGORYCREATE";
export const ERROR_CATEGORYCREATE = "ERROR_CATEGORYCREATE";
export const categoryCreateResponse = (type, data) => ({ type, data });

// categoryGetByUserId
export const CATEGORYGETBYUSERID = "CATEGORYGETBYUSERID";
export const categoryGetByUserId = (data) => ({
  type: CATEGORYGETBYUSERID,
  data,
});
export const SUCCESS_CATEGORYGETBYUSERID = "SUCCESS_CATEGORYGETBYUSERID";
export const ERROR_CATEGORYGETBYUSERID = "ERROR_CATEGORYGETBYUSERID";
export const categoryGetByUserIdResponse = (type, data) => ({ type, data });

// categoryGetByUserIdCategoryId
export const CATEGORYGETBYUSERIDCATEGORYID = "CATEGORYGETBYUSERIDCATEGORYID";
export const categoryGetByUserIdCategoryId = (data) => ({
  type: CATEGORYGETBYUSERIDCATEGORYID,
  data,
});
export const SUCCESS_CATEGORYGETBYUSERIDCATEGORYID =
  "SUCCESS_CATEGORYGETBYUSERIDCATEGORYID";
export const ERROR_CATEGORYGETBYUSERIDCATEGORYID =
  "ERROR_CATEGORYGETBYUSERIDCATEGORYID";
export const categoryGetByUserIdCategoryIdResponse = (type, data) => ({
  type,
  data,
});

// categoryGetByUserIdCategoryType
export const CATEGORYGETBYUSERIDCATEGORYTYPE =
  "CATEGORYGETBYUSERIDCATEGORYTYPE";
export const categoryGetByUserIdCategoryType = (data) => ({
  type: CATEGORYGETBYUSERIDCATEGORYTYPE,
  data,
});
export const SUCCESS_CATEGORYGETBYUSERIDCATEGORYTYPE =
  "SUCCESS_CATEGORYGETBYUSERIDCATEGORYTYPE";
export const ERROR_CATEGORYGETBYUSERIDCATEGORYTYPE =
  "ERROR_CATEGORYGETBYUSERIDCATEGORYTYPE";
export const categoryGetByUserIdCategoryTypeResponse = (type, data) => ({
  type,
  data,
});

// categoryUpdateByUserIdCategoryId
export const CATEGORYUPDATEBYUSERIDCATEGORYID =
  "CATEGORYUPDATEBYUSERIDCATEGORYID";
export const categoryUpdateByUserIdCategoryId = (data) => ({
  type: CATEGORYUPDATEBYUSERIDCATEGORYID,
  data,
});
export const SUCCESS_CATEGORYUPDATEBYUSERIDCATEGORYID =
  "SUCCESS_CATEGORYUPDATEBYUSERIDCATEGORYID";
export const ERROR_CATEGORYUPDATEBYUSERIDCATEGORYID =
  "ERROR_CATEGORYUPDATEBYUSERIDCATEGORYID";
export const categoryUpdateByUserIdCategoryIdResponse = (type, data) => ({
  type,
  data,
});

// categoryDeleteByUserIdCategoryId
export const CATEGORYDELETEBYUSERIDCATEGORYID =
  "CATEGORYDELETEBYUSERIDCATEGORYID";
export const categoryDeleteByUserIdCategoryId = (data) => ({
  type: CATEGORYDELETEBYUSERIDCATEGORYID,
  data,
});
export const SUCCESS_CATEGORYDELETEBYUSERIDCATEGORYID =
  "SUCCESS_CATEGORYDELETEBYUSERIDCATEGORYID";
export const ERROR_CATEGORYDELETEBYUSERIDCATEGORYID =
  "ERROR_CATEGORYDELETEBYUSERIDCATEGORYID";
export const categoryDeleteByUserIdCategoryIdResponse = (type, data) => ({
  type,
  data,
});
