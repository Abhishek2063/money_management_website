import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import {
  budgetDeleteByUserIdBudgetIdApi,
  budgetGetByUserIdApi,
  budgetStoreApi,
  budgetUpdateByUserIdBudgetIdApi,
} from "../../../api/sdk/budget";
import {
  BUDGETDELETEBYUSERIDBudgetID,
  BUDGETGETBYUSERID,
  BUDGETSTORE,
  BUDGETUPDATEBYUSERIDBUDGETID,
  ERROR_BUDGETDELETEBYUSERIDBudgetID,
  ERROR_BUDGETGETBYUSERID,
  ERROR_BUDGETSTORE,
  ERROR_BUDGETUPDATEBYUSERIDBUDGETID,
  SUCCESS_BUDGETDELETEBYUSERIDBudgetID,
  SUCCESS_BUDGETGETBYUSERID,
  SUCCESS_BUDGETSTORE,
  SUCCESS_BUDGETUPDATEBYUSERIDBUDGETID,
  budgetDeleteByUserIdBudgetIdResponse,
  budgetGetByUserIdResponse,
  budgetStoreResponse,
  budgetUpdateByUserIdBudgetIdResponse,
} from "./budget.action";

// budgetStore
function* budgetStoreRequest(data) {
  let getData = yield budgetStoreApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(budgetStoreResponse(SUCCESS_BUDGETSTORE, getData.data));
  } else {
    yield put(budgetStoreResponse(ERROR_BUDGETSTORE, getData.data));
  }
}
export function* budgetStoreWatcher() {
  yield takeLatest(BUDGETSTORE, budgetStoreRequest);
}

// budgetGetByUserId
function* budgetGetByUserIdRequest(data) {
  let getData = yield budgetGetByUserIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      budgetGetByUserIdResponse(SUCCESS_BUDGETGETBYUSERID, getData.data)
    );
  } else {
    yield put(budgetGetByUserIdResponse(ERROR_BUDGETGETBYUSERID, getData.data));
  }
}
export function* budgetGetByUserIdWatcher() {
  yield takeLatest(BUDGETGETBYUSERID, budgetGetByUserIdRequest);
}

// budgetUpdateByUserIdBudgetId
function* budgetUpdateByUserIdBudgetIdRequest(data) {
  let getData = yield budgetUpdateByUserIdBudgetIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      budgetUpdateByUserIdBudgetIdResponse(
        SUCCESS_BUDGETUPDATEBYUSERIDBUDGETID,
        getData.data
      )
    );
  } else {
    yield put(
      budgetUpdateByUserIdBudgetIdResponse(
        ERROR_BUDGETUPDATEBYUSERIDBUDGETID,
        getData.data
      )
    );
  }
}
export function* budgetUpdateByUserIdBudgetIdWatcher() {
  yield takeLatest(
    BUDGETUPDATEBYUSERIDBUDGETID,
    budgetUpdateByUserIdBudgetIdRequest
  );
}

// budgetDeleteByUserIdBudgetId
function* budgetDeleteByUserIdBudgetIdRequest(data) {
  let getData = yield budgetDeleteByUserIdBudgetIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      budgetDeleteByUserIdBudgetIdResponse(
        SUCCESS_BUDGETDELETEBYUSERIDBudgetID,
        getData.data
      )
    );
  } else {
    yield put(
      budgetDeleteByUserIdBudgetIdResponse(
        ERROR_BUDGETDELETEBYUSERIDBudgetID,
        getData.data
      )
    );
  }
}
export function* budgetDeleteByUserIdBudgetIdWatcher() {
  yield takeLatest(
    BUDGETDELETEBYUSERIDBudgetID,
    budgetDeleteByUserIdBudgetIdRequest
  );
}
