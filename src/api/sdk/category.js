import { request } from "../request/axios.request";
import {
  CATEGORYCREATE,
  CATEGORYDELETEBYUSERIDCATEGORYID,
  CATEGORYGETBYUSERID,
  CATEGORYGETBYUSERIDCATEGORYID,
  CATEGORYGETBYUSERIDCATEGORYTYPE,
  CATEGORYUPDATEBYUSERIDCATEGORYID,
} from "../routing/route";

// categoryCreate api
export async function categoryCreateApi(data) {
  let userData = data.data;
  return request({
    url: CATEGORYCREATE,
    method: "post",
    data: userData,
  });
}

// categoryGetByUserId api
export async function categoryGetByUserIdApi(data) {
  const userData = data.data;
  const URL = `${CATEGORYGETBYUSERID}/${userData.user_id}`;
  const queryParams = {
    page: userData.page,
  };

  return request({
    url: URL,
    method: "get",
    params: queryParams, // Use "params" for query parameters
  });
}

// categoryGetByUserIdCategoryId api
export async function categoryGetByUserIdCategoryIdApi(data) {
  let userData = data.data;
  return request({
    url: CATEGORYGETBYUSERIDCATEGORYID,
    method: "get",
    data: userData,
  });
}

// categoryGetByUserIdCategoryType api
export async function categoryGetByUserIdCategoryTypeApi(data) {
  let userData = data.data;
  const URL = `${CATEGORYGETBYUSERIDCATEGORYTYPE}/${userData.user_id}/${userData.category_type}`;
  return request({
    url: URL,
    method: "get",
    data: userData,
  });
}

// categoryUpdateByUserIdCategoryId api
export async function categoryUpdateByUserIdCategoryIdApi(data) {
  let userData = data.data;
  const URL = `${CATEGORYUPDATEBYUSERIDCATEGORYID}/${userData.user_id}/${userData.categoryId}`;
  return request({
    url: URL,
    method: "put",
    data: userData,
  });
}

// categoryDeleteByUserIdCategoryId api
export async function categoryDeleteByUserIdCategoryIdApi(data) {
  let userData = data.data;
  const URL = `${CATEGORYDELETEBYUSERIDCATEGORYID}/${userData.user_id}/${userData.categoryId}`;
  return request({
    url: URL,
    method: "delete",
    data: userData,
  });
}
