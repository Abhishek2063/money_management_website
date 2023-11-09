import { request } from "../request/axios.request";
import {
  EXPANSEDELETEBYUSERIDINCOMEID,
  EXPANSEGETBYUSERID,
  EXPANSESTORE,
  EXPANSEUPDATEBYUSERIDEXPANSEID,
} from "../routing/route";

// expanseStore api
export async function expanseStoreApi(data) {
  let userData = data.data;
  return request({
    url: EXPANSESTORE,
    method: "post",
    data: userData,
  });
}

// expanseGetByUserId api
export async function expanseGetByUserIdApi(data) {
  const userData = data.data;
  const URL = `${EXPANSEGETBYUSERID}/${userData.user_id}`;
  const queryParams = {
    page: userData.page,
  };

  return request({
    url: URL,
    method: "get",
    params: queryParams, // Use "params" for query parameters
  });
}

// expanseUpdateByUserIdIncomeId api
export async function expanseUpdateByUserIdIncomeIdApi(data) {
  let userData = data.data;
  const URL = `${EXPANSEUPDATEBYUSERIDEXPANSEID}/${userData.user_id}/${userData.expanseId}`;
  return request({
    url: URL,
    method: "put",
    data: userData,
  });
}

// expanseDeleteByUserIdIncomeId api
export async function expanseDeleteByUserIdIncomeIdApi(data) {
  let userData = data.data;
  const URL = `${EXPANSEDELETEBYUSERIDINCOMEID}/${userData.user_id}/${userData.expanseId}`;
  return request({
    url: URL,
    method: "delete",
    data: userData,
  });
}
