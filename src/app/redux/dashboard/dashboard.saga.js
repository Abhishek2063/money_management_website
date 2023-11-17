import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import {
  getExpenseByCategoryApi,
  getExpenseDaysApi,
  getIncomeExpenseSummaryApi,
  getToalIncomeExpanseApi,
} from "../../../api/sdk/dashboard";
import {
  ERROR_GETEXPANSEBYCATEGORY,
  ERROR_GETEXPENSEDAYS,
  ERROR_GETINCOMEEXPANSESUMMARY,
  ERROR_GETTOTALINCOMEEXPANSE,
  GETEXPANSEBYCATEGORY,
  GETEXPENSEDAYS,
  GETINCOMEEXPANSESUMMARY,
  GETTOTALINCOMEEXPANSE,
  SUCCESS_GETEXPANSEBYCATEGORY,
  SUCCESS_GETEXPENSEDAYS,
  SUCCESS_GETINCOMEEXPANSESUMMARY,
  SUCCESS_GETTOTALINCOMEEXPANSE,
  getExpenseByCategoryResponse,
  getExpenseDaysResponse,
  getIncomeExpenseSummaryResponse,
  getToalIncomeExpanseResponse,
} from "./dashboard.action";

// getToalIncomeExpanse
function* getToalIncomeExpanseRequest(data) {
  let getData = yield getToalIncomeExpanseApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      getToalIncomeExpanseResponse(SUCCESS_GETTOTALINCOMEEXPANSE, getData.data)
    );
  } else {
    yield put(
      getToalIncomeExpanseResponse(ERROR_GETTOTALINCOMEEXPANSE, getData.data)
    );
  }
}
export function* getToalIncomeExpanseWatcher() {
  yield takeLatest(GETTOTALINCOMEEXPANSE, getToalIncomeExpanseRequest);
}

// getExpenseByCategory
function* getExpenseByCategoryRequest(data) {
  let getData = yield getExpenseByCategoryApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      getExpenseByCategoryResponse(SUCCESS_GETEXPANSEBYCATEGORY, getData.data)
    );
  } else {
    yield put(
      getExpenseByCategoryResponse(ERROR_GETEXPANSEBYCATEGORY, getData.data)
    );
  }
}
export function* getExpenseByCategoryWatcher() {
  yield takeLatest(GETEXPANSEBYCATEGORY, getExpenseByCategoryRequest);
}

// getIncomeExpenseSummary
function* getIncomeExpenseSummaryRequest(data) {
  let getData = yield getIncomeExpenseSummaryApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      getIncomeExpenseSummaryResponse(
        SUCCESS_GETINCOMEEXPANSESUMMARY,
        getData.data
      )
    );
  } else {
    yield put(
      getIncomeExpenseSummaryResponse(
        ERROR_GETINCOMEEXPANSESUMMARY,
        getData.data
      )
    );
  }
}
export function* getIncomeExpenseSummaryWatcher() {
  yield takeLatest(GETINCOMEEXPANSESUMMARY, getIncomeExpenseSummaryRequest);
}

// getExpenseDays
function* getExpenseDaysRequest(data) {
  let getData = yield getExpenseDaysApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(getExpenseDaysResponse(SUCCESS_GETEXPENSEDAYS, getData.data));
  } else {
    yield put(getExpenseDaysResponse(ERROR_GETEXPENSEDAYS, getData.data));
  }
}
export function* getExpenseDaysWatcher() {
  yield takeLatest(GETEXPENSEDAYS, getExpenseDaysRequest);
}
