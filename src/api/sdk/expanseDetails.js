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
  let userData = data.data;
  return request({
    url: EXPANSEGETBYUSERID,
    method: "get",
    data: userData,
  });
}

// expanseUpdateByUserIdIncomeId api
export async function expanseUpdateByUserIdIncomeIdApi(data) {
  let userData = data.data;
  return request({
    url: EXPANSEUPDATEBYUSERIDEXPANSEID,
    method: "put",
    data: userData,
  });
}

// expanseDeleteByUserIdIncomeId api
export async function expanseDeleteByUserIdIncomeIdApi(data) {
  let userData = data.data;
  return request({
    url: EXPANSEDELETEBYUSERIDINCOMEID,
    method: "delete",
    data: userData,
  });
}
