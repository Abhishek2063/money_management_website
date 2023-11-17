import { request } from "../request/axios.request";
import {
  GETEXPANSEBYCATEGORY,
  GETEXPENSEDAYS,
  GETINCOMEEXPANSESUMMARY,
  GETTOTALINCOMEEXPANSE,
} from "../routing/route";

// getToalIncomeExpanse api
export async function getToalIncomeExpanseApi(data) {
  const userData = data.data;
  const URL = `${GETTOTALINCOMEEXPANSE}/${userData.user_id}`;
  const queryParams = {
    startDate: userData.startDate,
    endDate: userData.endDate,
  };

  return request({
    url: URL,
    method: "get",
    params: queryParams, // Use "params" for query parameters
  });
}

// getExpenseByCategory api
export async function getExpenseByCategoryApi(data) {
  const userData = data.data;
  const URL = `${GETEXPANSEBYCATEGORY}/${userData.user_id}`;
  const queryParams = {
    startDate: userData.startDate,
    endDate: userData.endDate,
  };

  return request({
    url: URL,
    method: "get",
    params: queryParams, // Use "params" for query parameters
  });
}

// getIncomeExpenseSummary api
export async function getIncomeExpenseSummaryApi(data) {
  const userData = data.data;
  const URL = `${GETINCOMEEXPANSESUMMARY}/${userData.user_id}`;
  const queryParams = {
    type: userData.type,
  };

  return request({
    url: URL,
    method: "get",
    params: queryParams, // Use "params" for query parameters
  });
}

// getExpenseDays api
export async function getExpenseDaysApi(data) {
  const userData = data.data;
  const URL = `${GETEXPENSEDAYS}/${userData.user_id}`;
  const queryParams = {
    month: userData.month,
  };

  return request({
    url: URL,
    method: "get",
    params: queryParams, // Use "params" for query parameters
  });
}
