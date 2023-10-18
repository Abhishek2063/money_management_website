import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import {
  expanseDeleteByUserIdIncomeIdApi,
  expanseGetByUserIdApi,
  expanseStoreApi,
  expanseUpdateByUserIdIncomeIdApi,
} from "../../../api/sdk/expanseDetails";
import {
  ERROR_EXPANSEDELETEBYUSERIDINCOMEID,
  ERROR_EXPANSEGETBYUSERID,
  ERROR_EXPANSESTORE,
  ERROR_EXPANSEUPDATEBYUSERIDEXPANSEID,
  EXPANSEDELETEBYUSERIDINCOMEID,
  EXPANSEGETBYUSERID,
  EXPANSESTORE,
  EXPANSEUPDATEBYUSERIDEXPANSEID,
  SUCCESS_EXPANSEDELETEBYUSERIDINCOMEID,
  SUCCESS_EXPANSEGETBYUSERID,
  SUCCESS_EXPANSESTORE,
  SUCCESS_EXPANSEUPDATEBYUSERIDEXPANSEID,
  expanseDeleteByUserIdIncomeIdResponse,
  expanseGetByUserIdResponse,
  expanseStoreResponse,
  expanseUpdateByUserIdIncomeIdResponse,
} from "./expanse.action";

// expanseStore
function* expanseStoreRequest(data) {
  let getData = yield expanseStoreApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(expanseStoreResponse(SUCCESS_EXPANSESTORE, getData.data));
  } else {
    yield put(expanseStoreResponse(ERROR_EXPANSESTORE, getData.data));
  }
}
export function* expanseStoreWatcher() {
  yield takeLatest(EXPANSESTORE, expanseStoreRequest);
}

// expanseGetByUserId
function* expanseGetByUserIdRequest(data) {
  let getData = yield expanseGetByUserIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      expanseGetByUserIdResponse(SUCCESS_EXPANSEGETBYUSERID, getData.data)
    );
  } else {
    yield put(
      expanseGetByUserIdResponse(ERROR_EXPANSEGETBYUSERID, getData.data)
    );
  }
}
export function* expanseGetByUserIdWatcher() {
  yield takeLatest(EXPANSEGETBYUSERID, expanseGetByUserIdRequest);
}

// expanseUpdateByUserIdIncomeId
function* expanseUpdateByUserIdIncomeIdRequest(data) {
  let getData = yield expanseUpdateByUserIdIncomeIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      expanseUpdateByUserIdIncomeIdResponse(
        SUCCESS_EXPANSEUPDATEBYUSERIDEXPANSEID,
        getData.data
      )
    );
  } else {
    yield put(
      expanseUpdateByUserIdIncomeIdResponse(
        ERROR_EXPANSEUPDATEBYUSERIDEXPANSEID,
        getData.data
      )
    );
  }
}
export function* expanseUpdateByUserIdIncomeIdWatcher() {
  yield takeLatest(
    EXPANSEUPDATEBYUSERIDEXPANSEID,
    expanseUpdateByUserIdIncomeIdRequest
  );
}

// expanseDeleteByUserIdIncomeId
function* expanseDeleteByUserIdIncomeIdRequest(data) {
  let getData = yield expanseDeleteByUserIdIncomeIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      expanseDeleteByUserIdIncomeIdResponse(
        SUCCESS_EXPANSEDELETEBYUSERIDINCOMEID,
        getData.data
      )
    );
  } else {
    yield put(
      expanseDeleteByUserIdIncomeIdResponse(
        ERROR_EXPANSEDELETEBYUSERIDINCOMEID,
        getData.data
      )
    );
  }
}
export function* expanseDeleteByUserIdIncomeIdWatcher() {
  yield takeLatest(
    EXPANSEDELETEBYUSERIDINCOMEID,
    expanseDeleteByUserIdIncomeIdRequest
  );
}
