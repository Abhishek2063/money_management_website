import { Tokens } from "../../app/storage";
import { request } from "../request/axios.request";
import {
  INCOMEDELETEBYUSERIDINCOMEID,
  INCOMEGETBYUSERID,
  INCOMEIMPORTEXCELFILE,
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
  const userData = data.data;
  const URL = `${INCOMEGETBYUSERID}/${userData.user_id}`;
  const queryParams = {
    page: userData.page,
  };

  return request({
    url: URL,
    method: "get",
    params: queryParams, // Use "params" for query parameters
  });
}

// incomeUpdateByUserIdIncomeId api
export async function incomeUpdateByUserIdIncomeIdApi(data) {
  let userData = data.data;
  const URL = `${INCOMEUPDATEBYUSERIDINCOMEID}/${userData.user_id}/${userData.incomeId}`;
  return request({
    url: URL,
    method: "put",
    data: userData,
  });
}

// incomeDeleteByUserIdIncomeId api
export async function incomeDeleteByUserIdIncomeIdApi(data) {
  let userData = data.data;
  const URL = `${INCOMEDELETEBYUSERIDINCOMEID}/${userData.user_id}/${userData.incomeId}`;
  return request({
    url: URL,
    method: "delete",
    data: userData,
  });
}

// incomeImportExcel api
export async function incomeImportExcelApi(data) {
  let userData = data.data;
  console.log(userData.file,"userData");
  let formData = new FormData();
  formData.append("file", userData.file);
  const URL = `${INCOMEIMPORTEXCELFILE}/${userData.user_id}`;
  return request({
    url: URL,
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: ` ${Tokens.getToken() ? Tokens.getToken() : Tokens.getVerifyToken()
      }`,
    },
  });
}
