import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import {
  categoryCreateApi,
  categoryDeleteByUserIdCategoryIdApi,
  categoryGetByUserIdApi,
  categoryGetByUserIdCategoryIdApi,
  categoryGetByUserIdCategoryTypeApi,
  categoryUpdateByUserIdCategoryIdApi,
} from "../../../api/sdk/category";
import {
  CATEGORYCREATE,
  CATEGORYDELETEBYUSERIDCATEGORYID,
  CATEGORYGETBYUSERID,
  CATEGORYGETBYUSERIDCATEGORYID,
  CATEGORYGETBYUSERIDCATEGORYTYPE,
  CATEGORYUPDATEBYUSERIDCATEGORYID,
  ERROR_CATEGORYCREATE,
  ERROR_CATEGORYDELETEBYUSERIDCATEGORYID,
  ERROR_CATEGORYGETBYUSERID,
  ERROR_CATEGORYGETBYUSERIDCATEGORYID,
  ERROR_CATEGORYGETBYUSERIDCATEGORYTYPE,
  ERROR_CATEGORYUPDATEBYUSERIDCATEGORYID,
  SUCCESS_CATEGORYCREATE,
  SUCCESS_CATEGORYDELETEBYUSERIDCATEGORYID,
  SUCCESS_CATEGORYGETBYUSERID,
  SUCCESS_CATEGORYGETBYUSERIDCATEGORYID,
  SUCCESS_CATEGORYGETBYUSERIDCATEGORYTYPE,
  SUCCESS_CATEGORYUPDATEBYUSERIDCATEGORYID,
  categoryCreateResponse,
  categoryDeleteByUserIdCategoryIdResponse,
  categoryGetByUserIdCategoryIdResponse,
  categoryGetByUserIdCategoryTypeResponse,
  categoryGetByUserIdResponse,
  categoryUpdateByUserIdCategoryIdResponse,
} from "./category.action";

// categoryCreate
function* categoryCreateRequest(data) {
  let getData = yield categoryCreateApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(categoryCreateResponse(SUCCESS_CATEGORYCREATE, getData.data));
  } else {
    yield put(categoryCreateResponse(ERROR_CATEGORYCREATE, getData.data));
  }
}
export function* categoryCreateWatcher() {
  yield takeLatest(CATEGORYCREATE, categoryCreateRequest);
}

// categoryGetByUserId
function* categoryGetByUserIdRequest(data) {
  let getData = yield categoryGetByUserIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      categoryGetByUserIdResponse(SUCCESS_CATEGORYGETBYUSERID, getData.data)
    );
  } else {
    yield put(
      categoryGetByUserIdResponse(ERROR_CATEGORYGETBYUSERID, getData.data)
    );
  }
}
export function* categoryGetByUserIdWatcher() {
  yield takeLatest(CATEGORYGETBYUSERID, categoryGetByUserIdRequest);
}

// categoryGetByUserIdCategoryId
function* categoryGetByUserIdCategoryIdRequest(data) {
  let getData = yield categoryGetByUserIdCategoryIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      categoryGetByUserIdCategoryIdResponse(
        SUCCESS_CATEGORYGETBYUSERIDCATEGORYID,
        getData.data
      )
    );
  } else {
    yield put(
      categoryGetByUserIdCategoryIdResponse(
        ERROR_CATEGORYGETBYUSERIDCATEGORYID,
        getData.data
      )
    );
  }
}
export function* categoryGetByUserIdCategoryIdWatcher() {
  yield takeLatest(
    CATEGORYGETBYUSERIDCATEGORYID,
    categoryGetByUserIdCategoryIdRequest
  );
}

// categoryGetByUserIdCategoryType
function* categoryGetByUserIdCategoryTypeRequest(data) {
  let getData = yield categoryGetByUserIdCategoryTypeApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      categoryGetByUserIdCategoryTypeResponse(
        SUCCESS_CATEGORYGETBYUSERIDCATEGORYTYPE,
        getData.data
      )
    );
  } else {
    yield put(
      categoryGetByUserIdCategoryTypeResponse(
        ERROR_CATEGORYGETBYUSERIDCATEGORYTYPE,
        getData.data
      )
    );
  }
}
export function* categoryGetByUserIdCategoryTypeWatcher() {
  yield takeLatest(
    CATEGORYGETBYUSERIDCATEGORYTYPE,
    categoryGetByUserIdCategoryTypeRequest
  );
}

// categoryUpdateByUserIdCategoryId
function* categoryUpdateByUserIdCategoryIdRequest(data) {
  let getData = yield categoryUpdateByUserIdCategoryIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      categoryUpdateByUserIdCategoryIdResponse(
        SUCCESS_CATEGORYUPDATEBYUSERIDCATEGORYID,
        getData.data
      )
    );
  } else {
    yield put(
      categoryUpdateByUserIdCategoryIdResponse(
        ERROR_CATEGORYUPDATEBYUSERIDCATEGORYID,
        getData.data
      )
    );
  }
}
export function* categoryUpdateByUserIdCategoryIdWatcher() {
  yield takeLatest(
    CATEGORYUPDATEBYUSERIDCATEGORYID,
    categoryUpdateByUserIdCategoryIdRequest
  );
}

// categoryDeleteByUserIdCategoryId
function* categoryDeleteByUserIdCategoryIdRequest(data) {
  let getData = yield categoryDeleteByUserIdCategoryIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(
      categoryDeleteByUserIdCategoryIdResponse(
        SUCCESS_CATEGORYDELETEBYUSERIDCATEGORYID,
        getData.data
      )
    );
  } else {
    yield put(
      categoryDeleteByUserIdCategoryIdResponse(
        ERROR_CATEGORYDELETEBYUSERIDCATEGORYID,
        getData.data
      )
    );
  }
}
export function* categoryDeleteByUserIdCategoryIdWatcher() {
  yield takeLatest(
    CATEGORYDELETEBYUSERIDCATEGORYID,
    categoryDeleteByUserIdCategoryIdRequest
  );
}
