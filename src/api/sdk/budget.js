import { request } from "../request/axios.request";
import {
  BUDGETDELETEBYUSERIDBUDGETID,
  BUDGETGETBYUSERID,
  BUDGETSTORE,
  BUDGETUPDATEBYUSERIDBUDGETID,
} from "../routing/route";
// budgetStore api
export async function budgetStoreApi(data) {
  let userData = data.data;
  return request({
    url: BUDGETSTORE,
    method: "post",
    data: userData,
  });
}

// budgetGetByUserId api
export async function budgetGetByUserIdApi(data) {
  const userData = data.data;
  const URL = `${BUDGETGETBYUSERID}/${userData.user_id}`;
  const queryParams = {
    page: userData.page,
  };

  return request({
    url: URL,
    method: "get",
    params: queryParams, // Use "params" for query parameters
  });
}

// budgetUpdateByUserIdBudgetId api
export async function budgetUpdateByUserIdBudgetIdApi(data) {
  let userData = data.data;
  const URL = `${BUDGETUPDATEBYUSERIDBUDGETID}/${userData.user_id}/${userData.budgetId}`;
  return request({
    url: URL,
    method: "put",
    data: userData,
  });
}

// budgetDeleteByUserIdBudgetId api
export async function budgetDeleteByUserIdBudgetIdApi(data) {
  let userData = data.data;
  const URL = `${BUDGETDELETEBYUSERIDBUDGETID}/${userData.user_id}/${userData.budgetId}`;
  return request({
    url: URL,
    method: "delete",
    data: userData,
  });
}
