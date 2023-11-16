import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import {
  incomeDeleteByUserIdIncomeIdApi,
  incomeGetByUserIdApi,
  incomeImportExcelApi,
  incomeStoreApi,
  incomeUpdateByUserIdIncomeIdApi,
} from "../../../api/sdk/incomeDetails";
import {
  ERROR_INCOMEDELETEBYUSERIDINCOMEID,
  ERROR_INCOMEGETBYUSERID,
  ERROR_INCOMEIMPORTEXCELFILE,
  ERROR_INCOMESTORE,
  ERROR_INCOMEUPDATEBYUSERIDINCOMEID,
  INCOMEDELETEBYUSERIDINCOMEID,
  INCOMEGETBYUSERID,
  INCOMEIMPORTEXCELFILE,
  INCOMESTORE,
  INCOMEUPDATEBYUSERIDINCOMEID,
  SUCCESS_INCOMEDELETEBYUSERIDINCOMEID,
  SUCCESS_INCOMEGETBYUSERID,
  SUCCESS_INCOMEIMPORTEXCELFILE,
  SUCCESS_INCOMESTORE,
  SUCCESS_INCOMEUPDATEBYUSERIDINCOMEID,
  incomeDeleteByUserIdIncomeIdResponse,
  incomeGetByUserIdResponse,
  incomeImportExcelFileResponse,
  incomeStoreResponse,
  incomeUpdateByUserIdIncomeIdResponse,
} from "./income.action";

// incomeStore
function* incomeStoreRequest(data) {
  let getData = yield incomeStoreApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(incomeStoreResponse(SUCCESS_INCOMESTORE, getData.data));
  } else {
    yield put(incomeStoreResponse(ERROR_INCOMESTORE, getData.data));
  }
}
export function* incomeStoreWatcher() {
  yield takeLatest(INCOMESTORE, incomeStoreRequest);
}

// incomeGetByUserId
function* incomeGetByUserIdRequest(data) {
  let getData = yield incomeGetByUserIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      incomeGetByUserIdResponse(SUCCESS_INCOMEGETBYUSERID, getData.data)
    );
  } else {
    yield put(incomeGetByUserIdResponse(ERROR_INCOMEGETBYUSERID, getData.data));
  }
}
export function* incomeGetByUserIdWatcher() {
  yield takeLatest(INCOMEGETBYUSERID, incomeGetByUserIdRequest);
}

// incomeUpdateByUserIdIncomeId
function* incomeUpdateByUserIdIncomeIdRequest(data) {
  let getData = yield incomeUpdateByUserIdIncomeIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      incomeUpdateByUserIdIncomeIdResponse(
        SUCCESS_INCOMEUPDATEBYUSERIDINCOMEID,
        getData.data
      )
    );
  } else {
    yield put(
      incomeUpdateByUserIdIncomeIdResponse(
        ERROR_INCOMEUPDATEBYUSERIDINCOMEID,
        getData.data
      )
    );
  }
}
export function* incomeUpdateByUserIdIncomeIdWatcher() {
  yield takeLatest(
    INCOMEUPDATEBYUSERIDINCOMEID,
    incomeUpdateByUserIdIncomeIdRequest
  );
}

// incomeDeleteByUserIdIncomeId
function* incomeDeleteByUserIdIncomeIdRequest(data) {
  let getData = yield incomeDeleteByUserIdIncomeIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      incomeDeleteByUserIdIncomeIdResponse(
        SUCCESS_INCOMEDELETEBYUSERIDINCOMEID,
        getData.data
      )
    );
  } else {
    yield put(
      incomeDeleteByUserIdIncomeIdResponse(
        ERROR_INCOMEDELETEBYUSERIDINCOMEID,
        getData.data
      )
    );
  }
}
export function* incomeDeleteByUserIdIncomeIdWatcher() {
  yield takeLatest(
    INCOMEDELETEBYUSERIDINCOMEID,
    incomeDeleteByUserIdIncomeIdRequest
  );
}

// incomeImportExcelFile
function* incomeImportExcelFileRequest(data) {
  let getData = yield incomeImportExcelApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      incomeImportExcelFileResponse(SUCCESS_INCOMEIMPORTEXCELFILE, getData.data)
    );
  } else {
    yield put(
      incomeImportExcelFileResponse(ERROR_INCOMEIMPORTEXCELFILE, getData.data)
    );
  }
}
export function* incomeImportExcelFileWatcher() {
  yield takeLatest(INCOMEIMPORTEXCELFILE, incomeImportExcelFileRequest);
}
