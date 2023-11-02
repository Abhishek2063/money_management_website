import { put, takeLatest } from "redux-saga/effects";
import _ from "lodash";
import {
  ERROR_GETLOGINUSERBYID,
  ERROR_GETUSERBYID,
  ERROR_LOGIN,
  ERROR_REGISTRATION,
  ERROR_UPDATEUSERBYID,
  GETLOGINUSERBYID,
  GETUSERBYID,
  LOGIN,
  REGISTRATION,
  SUCCESS_GETLOGINUSERBYID,
  SUCCESS_GETUSERBYID,
  SUCCESS_LOGIN,
  SUCCESS_REGISTRATION,
  SUCCESS_UPDATEUSERBYID,
  UPDATEUSERBYID,
  getLoginUserByIdResponse,
  loginResponse,
  registrationResponse,
  updateUserByIdResponse,
  userGetByIdResponse,
} from "./auth.action";
import {
  getLoginUserByIdApi,
  loginApi,
  registrationApi,
  updateUserByIdApi,
  userGetByIdApi,
} from "../../../api/sdk/auth";

// Registration
function* registrationRequest(data) {
  let getData = yield registrationApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(registrationResponse(SUCCESS_REGISTRATION, getData.data));
  } else {
    yield put(registrationResponse(ERROR_REGISTRATION, getData.data));
  }
}
export function* registrationWatcher() {
  yield takeLatest(REGISTRATION, registrationRequest);
}

// login
function* loginRequest(data) {
  let getData = yield loginApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(loginResponse(SUCCESS_LOGIN, getData.data));
  } else {
    yield put(loginResponse(ERROR_LOGIN, getData.data));
  }
}
export function* loginWatcher() {
  yield takeLatest(LOGIN, loginRequest);
}

// userGetById
function* userGetByIdRequest(data) {
  let getData = yield userGetByIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(userGetByIdResponse(SUCCESS_GETUSERBYID, getData.data));
  } else {
    yield put(userGetByIdResponse(ERROR_GETUSERBYID, getData.data));
  }
}
export function* userGetByIdWatcher() {
  yield takeLatest(GETUSERBYID, userGetByIdRequest);
}

// updateUserById
function* updateUserByIdRequest(data) {
  let getData = yield updateUserByIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(updateUserByIdResponse(SUCCESS_UPDATEUSERBYID, getData.data));
  } else {
    yield put(updateUserByIdResponse(ERROR_UPDATEUSERBYID, getData.data));
  }
}
export function* updateUserByIdWatcher() {
  yield takeLatest(UPDATEUSERBYID, updateUserByIdRequest);
}

// getLoginUserById
function* getLoginUserByIdRequest(data) {
  let getData = yield getLoginUserByIdApi(data);
  if (getData.success && _.has(getData, "data.data")) {
    yield put(getLoginUserByIdResponse(SUCCESS_GETLOGINUSERBYID, getData.data));
  } else {
    yield put(getLoginUserByIdResponse(ERROR_GETLOGINUSERBYID, getData.data));
  }
}
export function* getLoginUserByIdWatcher() {
  yield takeLatest(GETLOGINUSERBYID, getLoginUserByIdRequest);
}
