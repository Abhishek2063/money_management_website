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
  let userData = data.data;
  return request({
    url: CATEGORYGETBYUSERID,
    method: "get",
    data: userData,
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
  return request({
    url: CATEGORYGETBYUSERIDCATEGORYTYPE,
    method: "get",
    data: userData,
  });
}

// categoryUpdateByUserIdCategoryId api
export async function categoryUpdateByUserIdCategoryIdApi(data) {
  let userData = data.data;
  return request({
    url: CATEGORYUPDATEBYUSERIDCATEGORYID,
    method: "put",
    data: userData,
  });
}

// categoryDeleteByUserIdCategoryId api
export async function categoryDeleteByUserIdCategoryIdApi(data) {
  let userData = data.data;
  return request({
    url: CATEGORYDELETEBYUSERIDCATEGORYID,
    method: "delete",
    data: userData,
  });
}
