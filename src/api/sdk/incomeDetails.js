import { request } from "../request/axios.request";
import {
  INCOMEDELETEBYUSERIDINCOMEID,
  INCOMEGETBYUSERID,
  INCOMESTORE,
  INCOMEUPDATEBYUSERIDINCOMEID,
} from "../routing/route";

// incomeStore api
export async function incomeStoreApi(data) {
  let userData = data.data;
  return request({
    url: INCOMESTORE,
    method: "post",
    data: userData,
  });
}

// incomeGetByUserId api
export async function incomeGetByUserIdApi(data) {
  let userData = data.data;
  return request({
    url: INCOMEGETBYUSERID,
    method: "get",
    data: userData,
  });
}

// incomeUpdateByUserIdIncomeId api
export async function incomeUpdateByUserIdIncomeIdApi(data) {
  let userData = data.data;
  return request({
    url: INCOMEUPDATEBYUSERIDINCOMEID,
    method: "put",
    data: userData,
  });
}

// incomeDeleteByUserIdIncomeId api
export async function incomeDeleteByUserIdIncomeIdApi(data) {
  let userData = data.data;
  return request({
    url: INCOMEDELETEBYUSERIDINCOMEID,
    method: "delete",
    data: userData,
  });
}
